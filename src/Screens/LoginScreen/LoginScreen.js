import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NotePencil } from 'phosphor-react-native';
import React, { useCallback, useState } from 'react';
import {
  Alert,
  BackHandler,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Textinputlogin from './../../component/TextInput/TextInputlogin/Textinputlogin';
import styleSheet from './styleSheet';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [phoneNumber, setphoneNumber] = useState(null);
  const [emaileror, setEmaileror] = useState('');
  const [emailerorfull, setEmailerorfull] = useState('');
  const [phonenumberError, setphonenumberError] = useState();
  const [phonenumberErrorfull, setphonenumberErrorfull] = useState();



  const validationInput = () => {
    if (!email) {
      setEmaileror(true);
    } else {
      setEmaileror(false);
    }
    if (!phoneNumber) {
      setphonenumberError(true);
    } else {
      setphonenumberError(false);
    }
    if (!email.includes('@gmail.com')) {
      setEmailerorfull(true);
    } else {
      setEmailerorfull(false);
    }
    if (!phoneNumber.match(/^\d{10}$/)) {
      setphonenumberErrorfull(true);
    } else {
      setphonenumberErrorfull(false);
    }

    if (
      !email ||
      !phoneNumber ||
      !email.includes('@gmail.com') ||
      !phoneNumber.match(/^\d{10}$/)
    ) {
      return false;
    }

    return true;
  };

  const handleEmailChange = text => {
    setEmail(text);

  };
  const handlePhoneNumberChange = text => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    setphoneNumber(cleanedText);

  };
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp()
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const navigateToVerification = async () => {
    try {
      if (validationInput()) {
        await AsyncStorage.setItem('@typeEmail', email);
        await AsyncStorage.setItem('@typeOtp', phoneNumber);
        navigation.navigate('Verification', {
          email: email,
          phoneNumber: phoneNumber,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styleSheet.main}>
      <View style={styleSheet.imageview}>
        <Image
          source={require('../../../assets/image/otp1.webp')}
          style={styleSheet.imagelogo}
        />
      </View>
      <Text style={styleSheet.txtotpverification}>OTP Verification</Text>
      <Text style={styleSheet.txtothertext}>
        Enter Email and phone number to{'\n'}send one time Password
      </Text>
      <View style={styleSheet.viewinput}>
        <TouchableOpacity>
          <NotePencil size={32} style={styleSheet.iconnote} />
        </TouchableOpacity>
        <View style={styleSheet.viewtxtinputemail}>
          <Textinputlogin
            label={'Email'}
            value={email}
            onChangeText={handleEmailChange}
            props={{
              keyboardType: 'email-address',
              paddingRight: 50,
              paddingLeft: 25,
            }}
          />
          {emaileror ? (
            <Text style={styleSheet.emailerror}>Please Enter Email</Text>
          ) : emailerorfull ? (
            <Text style={styleSheet.emailerror}>
              Please Enter a valid Email (e.g., example@gmail.com)
            </Text>
          ) : null}
        </View>
        <View style={styleSheet.viewtxtinputotp}>
          <Textinputlogin
            label={'Phone Number'}
            isPhoneNumber={true}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            props={{ keyboardType: 'numeric', maxLength: 10, paddingLeft: 25 }}
          />
          {phonenumberError ? (
            <Text style={styleSheet.phonenumbererror}>
              Please Enter Phone number
            </Text>
          ) : phonenumberErrorfull ? (
            <Text style={styleSheet.phonenumbererror}>
              Please Enter phone number (e.g.,9825827482)
            </Text>
          ) : null}
        </View>
        <View style={styleSheet.viewbtncontiniue}>
          <TouchableOpacity
            style={styleSheet.btncountinue}
            onPress={() => navigateToVerification()}>
            <Text style={styleSheet.textcontinue}>continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
