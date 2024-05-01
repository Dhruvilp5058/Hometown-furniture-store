import { View, Image, BackHandler, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import { horizontalScale, verticalScale } from '../Metrics';
import { useSelector } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      GoogleSignin.configure({
        webClientId: '585180573470-99eqr5h8e23aktelkbc8j4pg8qfrcnpp.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });
      CheckLogin();
    }, 3000);
  }, []);

  const gdata = useSelector(state => state?.order?.googleauth)
  console.log(gdata);
  const CheckLogin = async () => {
    
    if (gdata !== null ) {

      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: 'HomeScreen' }],
      // });
      navigation.navigate('HomeScreen')

    } else {
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: 'Login' }],
      // });
      navigation.navigate('Login')
    }
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <LottieView
        source={require('../../../Lottie_Animation/Animation - 7.json')}
        style={{ height: verticalScale(300), width: horizontalScale(300) }}
        autoPlay={true}
        loop={false}
        speed={0.5}
      />
    </View>
  );
};

export default SplashScreen;
