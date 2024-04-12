import {
  View,
  Text,
  Alert,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import styleSheet from './StyleSheet';
import {
  Bell,
  CaretLeft,
  CaretRight,
  MessengerLogo,
  ShoppingCart,
  SignOut,
  User,
  UserList,
} from 'phosphor-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import ButtonProfile from '../../component/Button/Button_Profile/ButtonProfile';
import Colors from '../../../assets/Colour/colour';
import { moderateScale } from '../Metrics';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [phone, setPhone] = useState('');
  const [SelectedImage, setSelectedImage] = useState();

  const getimage = useSelector(state => state.counter.profile)
  const getImage = () => {
    setSelectedImage(getimage.SelectedImage);
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
      await AsyncStorage.removeItem('@typeEmail');
      await AsyncStorage.removeItem('@typeOtp');
      let keys = ['@favItem', '@cartItems'];
      await AsyncStorage.multiRemove(keys);
      console.log('Your key is Remove');
       navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
    };
  };
  useFocusEffect(
    useCallback(() => {
      const getlogin = async () => {
        try {
          const typeEmail = await AsyncStorage.getItem('@typeEmail');
          const typeOtp = await AsyncStorage.getItem('@typeOtp');
          setemail(typeEmail);
          setPhone(typeOtp);
          // console.log('=-=-=', typeEmail);
        } catch { }
      }
      getlogin()
    }, [])
  )

  return (
    <View style={styleSheet.main}>
      <StatusBar backgroundColor={Colors.primarycolour} />
      <View style={styleSheet.myprofileview}>
        <Text style={styleSheet.myprofile}>My Profile</Text>
      </View>
      <View style={styleSheet.icondetail}>
        <View style={styleSheet.iconview}>
          {SelectedImage ? (
            <Image source={{ uri: SelectedImage }} style={styleSheet.image} />
          ) : (
            <User
              size={moderateScale(70)}
              color={Colors.primarycolour}
              style={styleSheet.iconmain}
            />
          )}
        </View>
        <View style={styleSheet.viewtxt}>
          <Text style={[{ fontWeight: '700' }, styleSheet.txtemail]}>{email}</Text>
          <Text style={[{ fontWeight: '400' }, styleSheet.txtemail]}>{phone}</Text>
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
