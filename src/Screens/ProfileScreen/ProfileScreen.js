import {
  View,
  Text,
  Alert,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import styleSheet from './StyleSheet';
import {
  Bell,
  MessengerLogo,
  ShoppingCart,
  SignOut,
  User,
  UserList,
} from 'phosphor-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ButtonProfile from '../../component/Button/Button_Profile/ButtonProfile';
import Colors from '../../../assets/Colour/colour';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [phone, setPhone] = useState('');
  const [SelectedImage, setSelectedImage] = useState();

  const getImage = async () => {
    const getimage = await AsyncStorage.getItem('@profilePhoto');
    setSelectedImage(getimage);
  };
  useFocusEffect(
    useCallback(() => {
      getImage();
      getLoginData();
    }, []),
  );

  const PressLoginScreen = async () => {
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
      {text: 'OK', onPress: () => Removekey()},
    ]);
    const Removekey = async () => {
      await AsyncStorage.removeItem('@typeEmail');
      await AsyncStorage.removeItem('@typeOtp');
      let keys = ['@profilePhoto', '@profiledata', '@favItem', '@cartItems'];
      await AsyncStorage.multiRemove(keys);
      console.log('Your key is Remove');
      navigation.navigate('Login');
    };
  };
  const getLoginData = async () => {
    try {
      const typeEmail = await AsyncStorage.getItem('@typeEmail');
      const typeOtp = await AsyncStorage.getItem('@typeOtp');
      setemail(typeEmail);
      setPhone(typeOtp);
      // console.log('=-=-=', typeEmail);
    } catch {}
  };
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styleSheet.main}>
        <StatusBar backgroundColor={Colors.primarycolour} />
        <View style={styleSheet.blueview}></View>
        <View style={styleSheet.icondetail}>
          <View style={styleSheet.iconview}>
            {SelectedImage ? (
              <Image source={{uri: SelectedImage}} style={styleSheet.image} />
            ) : (
              <User
                size={80}
                color={Colors.primarycolour}
                style={styleSheet.iconmain}
              />
            )}
          </View>
          <View style={styleSheet.viewtxt}>
            <Text style={styleSheet.txtemail}>{email}</Text>
            <Text style={styleSheet.txtemail}>{phone}</Text>
          </View>
        </View>

        <View style={styleSheet.viewlogout}>
          <ButtonProfile
            onPress={() => navigation.navigate('MyOrder')}
            icon={<ShoppingCart size={32} style={styleSheet.iconuser} />}>
            My Order
          </ButtonProfile>
          <ButtonProfile
            onPress={() => navigation.navigate('Notification')}
            icon={<Bell size={32} style={styleSheet.iconuser} />}>
            NotiFication
          </ButtonProfile>
          <ButtonProfile
            onPress={() => navigation.navigate('chatboat')}
            icon={<MessengerLogo size={32} style={styleSheet.iconuser} />}>
            Messeges
          </ButtonProfile>
          <ButtonProfile
            onPress={() => navigation.navigate('AccountDetail')}
            icon={<UserList size={32} style={styleSheet.iconuser} />}>
            Account & Detail
          </ButtonProfile>
          <TouchableOpacity
            onPress={PressLoginScreen}
            style={styleSheet.btnlogoute}>
            <SignOut size={32} style={styleSheet.iconuser} />
            <Text style={styleSheet.txtlogoute}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
