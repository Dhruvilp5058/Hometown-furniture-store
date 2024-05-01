import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NotePencil } from 'phosphor-react-native';
import React, { useCallback, useRef, useState } from 'react';
import {
  BackHandler,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch } from 'react-redux';
import { images } from '../../../assets/image';
import { google } from '../../Redux/Slice/orderSaveSlice';
import Textinputlogin from './../../component/TextInput/TextInputlogin/Textinputlogin';
import styleSheet from './styleSheet';

const LoginScreen = () => {
  const phoneNumberRef = useRef(null);
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [phoneNumber, setphoneNumber] = useState(null);
  const [emaileror, setEmaileror] = useState('');
  const [emailerorfull, setEmailerorfull] = useState('');
  const [phonenumberError, setphonenumberError] = useState();
  const [phonenumberErrorfull, setphonenumberErrorfull] = useState();

  const nextTxtinput = () => {
    if (email) {
      setEmaileror(false);
    }
    if (email?.includes('@gmail.com')) {
      setEmailerorfull(false);
    }
    if (
      !email ||
      !email.includes('@gmail.com')
    ) {
      return false;
    }

    return phoneNumberRef.current.focus();
  }
  const onkeyTxtinput = () => {
    if (email) {
   
      setEmaileror(false);
    }
    if (email?.includes('@gmail.com')) {
      setEmailerorfull(false);
    }
  }


  const onsubTxtinput = () => {
    if (!phoneNumber) {
      setphonenumberError(true);
    } else {
      setphonenumberError(false);
    }
    if (!phoneNumber?.match(/^\d{10}$/)) {
      setphonenumberErrorfull(true);
    } else {
      setphonenumberErrorfull(false);
    }
    if (
      !phoneNumber ||
      !phoneNumber.match(/^\d{10}$/)
    ) {
      return false;
    }

    return true;
  }

  const onkeyphoneTxtinput = () => {
    if (!phoneNumber) {
      setphonenumberError(true);
    } else {
      setphonenumberError(false);
    }
    if (!phoneNumber?.match(/^\d{10}$/)) {
      setphonenumberErrorfull(true);
    } else {
      setphonenumberErrorfull(false);
    }
  }



  const validationInput = () => {
    if (!email) {
      setEmaileror(true);
    } else {
      setEmaileror(false);
    }
    if (!email?.includes('@gmail.com')) {
      setEmailerorfull(true);
    } else {
      setEmailerorfull(false);
    }
    if (!phoneNumber) {
      setphonenumberError(true);
    } else {
      setphonenumberError(false);
    }
    if (!phoneNumber?.match(/^\d{10}$/)) {
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

  const dispatch = useDispatch()
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(google(userInfo))
      navigation.navigate('HomeScreen')
    } catch (error) {
      console.log('Google Sign-In Error:', error);
    }
  };
  const navigateToVerification = async () => {
    try {
      if (validationInput()) {
        const data = { email, phoneNumber }
        dispatch(google(data))
        const demoRef = firestore()
          .collection('testing')
          .doc('kdbJjPTCFREHhDWe7sXH')
        await demoRef.update({
          demodata: firestore.FieldValue.arrayUnion(data)
        });
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
        <TouchableOpacity style={styleSheet.iconnote}>
          <NotePencil size={32} />
        </TouchableOpacity>
        <View style={styleSheet.viewtxtinputemail}>
          <Textinputlogin
            label={'Email'}
            value={email}
            onChangeText={handleEmailChange}
            onKeyPress={() => onkeyTxtinput()}
            props={{
              keyboardType: 'email-address',
              paddingRight: 50,
              paddingLeft: 25,
              onSubmitEditing: () => nextTxtinput(),
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
            onKeyPress={ onkeyphoneTxtinput}
            props={{
              keyboardType: 'numeric',
              maxLength: 10,
              paddingLeft: 25,
              ref: phoneNumberRef,
              onSubmitEditing: () => onsubTxtinput()
            }}
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
          <Text style={styleSheet.or}>Or</Text>
          <TouchableOpacity
            style={styleSheet.googlesign}
            onPress={() => signIn()}>
            <Image style={styleSheet.imggoogle} source={images.googlelogo} />
            <Text style={styleSheet.txtgoogle}>sign in with google</Text>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
