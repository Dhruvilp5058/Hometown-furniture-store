import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import styleSheet from '../LoginScreen/styleSheet';
import styleSheetverification from './StyleSheetVerification/styleSheetverification';
import TextInputVerification from './../../component/TextinputComponent/TextInputVerification';

import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'phosphor-react-native';
import LottieView from "lottie-react-native";
import Spinner from 'react-native-loading-spinner-overlay';

const VerificationScreen = props => {
  const {route} = props;
  const {email, phoneNumber} = route.params;
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(2);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    const countdown = setInterval(() => {
      setCount(prevCount => {
        if (prevCount <= 0) {
          clearInterval(countdown);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, []);

  return (
    <View style={styleSheetverification.main}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft size={32} style={styleSheetverification.backarrow} />
      </TouchableOpacity>
      <Text style={styleSheetverification.txtverification}>
        Verification Code
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styleSheetverification.txtnote}>
          We have Sent the verification{'\n'}
          code to your email address:
        </Text>
        <Text style={styleSheetverification.dataemail}>{email}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styleSheetverification.txtnote}>
          code to your phone Number:
        </Text>
        <Text style={styleSheetverification.dataphone}>{phoneNumber}</Text>
      </View>
      <View style={styleSheetverification.fbox}>
        <TextInputVerification />
      </View>
      <Text style={styleSheetverification.otpsend}> otp send in {count}</Text>
      <TouchableOpacity
        style={styleSheet.btncountinue}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styleSheet.textcontinue}>Confirm</Text>
      </TouchableOpacity>
      {isLoading && (
           <View style={styleSheetverification.loaderview}>
        <LottieView
        source={require("../../../Lottie_Animation/Animation_2.json")}
        style={{width: "60%", height: "60%",}}
        autoPlay
        loop
      />
          </View>
        //   <Spinner
        //     visible={isLoading}
        //     textContent={'    Loading....'}
        //     textStyle={styleSheetverification.spinnertext}
        //     color={'blue'}
        //     size={60}
        //     animation='slide'
        //   />
       
     
      )}
    </View>
  );
};

export default VerificationScreen;
