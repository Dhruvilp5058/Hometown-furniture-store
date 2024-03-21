import {View,  Image, BackHandler, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import { horizontalScale, verticalScale } from '../Metrics';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      CheckLogin();
    }, 3000);
  },[]);
  

  const CheckLogin = async () => {
    const isLogin = await AsyncStorage.getItem('@typeEmail');
    const Otp = await AsyncStorage.getItem('@typeOtp');
    console.log('====================================');
    console.log('isLogin IS :: ', isLogin);
    console.log('isOtp IS :: ', Otp);
    console.log('====================================');
    
    if (isLogin !== null  ) {
      navigation.navigate('HomeScreen');
      
    } else {
      navigation.navigate('Login')
    }
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
   <LottieView
   source={require('../../../Lottie_Animation/Animation - 7.json')}
   style={{height:verticalScale(300),width:horizontalScale(300)}}
   autoPlay={true}
   loop={false}
   speed={0.5}
   />
    </View>
  );
};

export default SplashScreen;
