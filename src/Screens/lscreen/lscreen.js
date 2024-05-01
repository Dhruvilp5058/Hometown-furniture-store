import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { google } from '../../Redux/Slice/orderSaveSlice';

const Lscreen = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
     webClientId: '585180573470-99eqr5h8e23aktelkbc8j4pg8qfrcnpp.apps.googleusercontent.com',
            scopes: ['profile', 'email']
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
      setUserInfo(userInfo);
    } catch (error) {
      console.log('Google Sign-In Error:', error);
    }
  };
  const dispatch = useDispatch()
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(google(null))   
      setUserInfo(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ color: 'black' }}>Lscreen</Text>
      {userInfo && (
        <>
          <Text style={{ color: 'black' }}>{userInfo.user.name}</Text>
          <Text style={{ color: 'black' }}>{userInfo.user.email}</Text>
          <Image style={{ height: 100, width: 100 }} source={{ uri: userInfo.user.photo }} />
        </>
      )}
      {!userInfo ? (
        <TouchableOpacity onPress={signIn} style={{ borderWidth: 1, marginTop: 10, padding: 10 }}>
          <Text style={{ color: 'black' }}>Sign In</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={signOut} style={{ borderWidth: 1, marginTop: 10, padding: 10 }}>
          <Text style={{ color: 'black' }}>Sign Out</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Lscreen;
