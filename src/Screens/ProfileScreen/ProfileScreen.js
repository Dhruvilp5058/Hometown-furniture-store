import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Bell,
  MessengerLogo,
  ShoppingCart,
  SignOut,
  User,
  UserList
} from 'phosphor-react-native';
import React, { useCallback, useState } from 'react';
import {
  Alert,
  Image,
  StatusBar,
  Text,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../../assets/Colour/colour';
import ButtonProfile from '../../component/Button/Button_Profile/ButtonProfile';
import { google } from '../../Redux/Slice/orderSaveSlice';
import { moderateScale } from '../Metrics';
import styleSheet from './StyleSheet';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [SelectedImage, setSelectedImage] = useState();
  const dispatch = useDispatch()

  // const getimage = useSelector(state => state.counter.profile)
  const googledata = useSelector(state => state.order.googleauth);
  const getImage = () => {
    setSelectedImage(googledata?.SelectedImage);
  };
  useFocusEffect(
    useCallback(() => {
      getImage()
    }, [getImage])
  )


  const PressLogout = async () => {
    Alert.alert('Log Out!!!', 'Are You Sure To Log Out Your Acc', [
      {
        text: 'Ask me leter',
        onPress: () => console.log('Ask Me Letter'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => Removekey() },
    ]);
    const Removekey = async () => {
      try {
        dispatch(google(null));
        await GoogleSignin.signOut();
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } catch (error) {
        console.log("Error during logout:", error);
      }
    };
  };

  return ( 
    <View style={styleSheet.main}>
      <StatusBar backgroundColor={Colors.primarycolour} />
      <View style={styleSheet.myprofileview}>
        <Text style={styleSheet.myprofile}>My Profile</Text>
      </View>
      <View style={styleSheet.icondetail}>
        <View style={styleSheet.iconview}>
          {SelectedImage || googledata?.user?.photo  ? (

            <Image source={{ uri: googledata?.user?.photo || SelectedImage }} style={styleSheet.image} />
          )
            : (
              <User
                size={moderateScale(70)}
                color={Colors.primarycolour}
                style={styleSheet.iconmain}
              />
            )}
        </View>
        <View style={styleSheet.viewtxt}>
          {googledata?.email != null ? (<Text style={[{ fontWeight: '700' }, styleSheet.txtemail]}>{googledata?.email}</Text>) : (
            <Text style={[{ fontWeight: '700' }, styleSheet.txtemail]}>{googledata?.user?.email}</Text>)}
          <Text style={[{ fontWeight: '400' }, styleSheet.txtemail]}>{googledata?.phoneNumber}</Text>
        </View>
      </View>

      <View style={styleSheet.viewlogout}>
        <ButtonProfile
          style={[{ borderBottomWidth: 0.2 }, styleSheet.btnlogout]}
          onPress={() => navigation.navigate('MyOrder')}
          icon={<ShoppingCart size={32} style={styleSheet.iconuser} />}>
          My Order
        </ButtonProfile>
        <ButtonProfile
          style={[{ borderBottomWidth: 0.2 }, styleSheet.btnlogout]}
          onPress={() => navigation.navigate('Notification')}
          icon={<Bell size={32} style={styleSheet.iconuser} />}>
          NotiFication
        </ButtonProfile>
        <ButtonProfile
          style={[{ borderBottomWidth: 0.2 }, styleSheet.btnlogout]}
          onPress={() => navigation.navigate('chatboat')}
          icon={<MessengerLogo size={32} style={styleSheet.iconuser} />}>
          Messeges
        </ButtonProfile>
        <ButtonProfile
          style={[{ borderBottomWidth: 0.2 }, styleSheet.btnlogout]}
          onPress={() => navigation.navigate('AccountDetail')}
          icon={<UserList size={32} style={styleSheet.iconuser} />}>
          Account & Detail
        </ButtonProfile>
        <ButtonProfile
          style={styleSheet.btnlogout}
          onPress={PressLogout}
          icon={<SignOut size={32} style={styleSheet.iconuser} />}
        >
          Log Out
        </ButtonProfile>
      </View>
    </View>
  );
};

export default ProfileScreen;
