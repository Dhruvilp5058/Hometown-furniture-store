import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import style from './styleSheet';
import {CaretLeft, User} from 'phosphor-react-native';
import TextInputAcc from './TextInputAcc';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioGroup from 'react-native-radio-buttons-group';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AccountDetailScreen = () => {
  const navigation = useNavigation();
  const [edit, setedit] = useState(false);
  const [data, setData] = useState({
    fullname: '',
    usename: '',
    Email: '',
    mobilenumber: '',
    Gender: '',
    City: '',
  });
  const [fullnameerror, setfullnameerror] = useState('');
  const [usernameerror, setusernameerror] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [fullemailerror, setfullemailerror] = useState('');
  const [errormobilenumber, seterrorobilenumber] = useState('');
  const [fullmobilenumber, setfullMobilenumber] = useState('');
  const [cityerror, setCityerror] = useState('');
  const [image, setimage] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );
  const [SelectedImage, setSelectedImage] = useState(null);
  const openImagePicker = async () => {
    console.log('button press');
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        if (imageUri) {
          // Ensure imageUri is not undefined
          setSelectedImage(imageUri);
        } else {
          // Handle the case where imageUri might be undefined
          console.log('No image selected or URI not found');
        }
      }
    });
    // await AsyncStorage.setItem('@profilePhoto', JSON.stringify(SelectedImage));
  };
  const loadData = async () => {
    try {
      const getData = await AsyncStorage.getItem('@profiledata');
      if (getData !== null) {
        const parsedData = JSON.parse(getData);
        setData(parsedData);
        setselectid(parsedData);
        
      }
      const getProfile = await AsyncStorage.getItem('@profilePhoto');
      if (getProfile !== null) {
        setSelectedImage(getProfile);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const StoreData = async () => {
    let isValid = true;
    setfullnameerror('');
    setusernameerror('');
    setemailerror('');
    setfullemailerror('');
    seterrorobilenumber('');
    setfullMobilenumber('');
    setCityerror('');

    // Perform validations
    if (!data.fullname) {
      setfullnameerror('Please enter full name');
      isValid = false;
    }
    if (!data.usename) {
      setusernameerror('Please enter a username');
      isValid = false;
    }
    if (!data.Email) {
      setemailerror('Please enter an email address');
      isValid = false;
    } else if (!data.Email.includes('@gmail.com')) {
      setfullemailerror('Email must be a Gmail address');
      isValid = false;
    }
    if (!data.mobilenumber) {
      seterrorobilenumber('Please enter a mobile number');
      isValid = false;
    } else if (!data.mobilenumber.match(/^\d{10}$/)) {
      setfullMobilenumber('Mobile number must be 10 digits');
      isValid = false;
    }
    if (!data.City) {
      setCityerror('Please enter a city');
      isValid = false;
    }
    if (!selectid) {
      console.log('Please select a gender');
      isValid = false;
    }
    if (!isValid) {
      console.log('Validation failed');
      return false;
    }

    // If all validations pass, proceed to save data
    try {
      const dataToSave = {
        ...data,
          selectid,
      };
      await AsyncStorage.setItem('@profiledata', JSON.stringify(dataToSave));
  
      if (SelectedImage) {
        await AsyncStorage.setItem('@profilePhoto', SelectedImage);
      } else {
        await AsyncStorage.removeItem('@profilePhoto');
      }
      setedit(false);
      console.log('Data saved successfully');
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const editable = () => {
    setedit(!edit);
    setimage(!image);
  };

  const [selectid, setselectid] = useState('');
  const redioButton = useMemo(
    () => [
      {
        id: 'male',
        label: 'male',
        value: 'option1',
        selected: selectid === 'male',
      },
      {
        id: 'female',
        label: 'female',
        value: 'option2',
        selected: selectid === 'female',
      },
    ],
    [selectid],
  );



  return (
    <View style={style.Main}>
      <View style={style.blueview}>
        <View style={style.editview}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft
              size={40}
              color="white"
              weight="bold"
              style={style.backarrow}
            />
          </TouchableOpacity>
          <Text style={style.txteditprofile}>Edit Profile</Text>
          {!edit && (
            <TouchableOpacity style={style.btnedit} onPress={() => editable()}>
              <Text style={style.txtsave}>Add</Text>
            </TouchableOpacity>
          )}
          {edit && (
            <TouchableOpacity style={style.btnsave} onPress={() => StoreData()}>
              <Text style={style.txtsave}>SAVE</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={style.iconview}>
          <TouchableOpacity onPress={() => openImagePicker()}>
            {SelectedImage ? (
              <Image source={{uri: SelectedImage}} style={style.image} />
            ) : (
              <User size={100} style={style.usericon} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={style.whiteview}>
        <View>
        <TextInputAcc
          label={'Full Name'}
          initialValue={data.fullname}
          onChangeText={text => setData({...data, fullname: text})}
          editable={edit}
        />
        {fullnameerror ? (
          <Text style={style.errormsg}>Please Enter Full Name</Text>
        ) : null}
        <TextInputAcc
          label={'User Name'}
          initialValue={data.usename}
          onChangeText={text => setData({...data, usename: text})}
          editable={edit}
        />
        {usernameerror ? (
          <Text style={style.errormsg}>Enter User Name</Text>
        ) : null}
        <TextInputAcc
          label={'Email'}
          initialValue={data.Email}
          onChangeText={text => setData({...data, Email: text})}
          keyboardType={'email-address'}
          editable={edit}
        />
        {emailerror ? (
          <Text style={style.errormsg}>Please Enter Email</Text>
        ) : fullemailerror ? (
          <Text style={style.errormsg}>
            Please Enter a valid Email (e.g., example@gmail.com)
          </Text>
        ) : null}
        <TextInputAcc
          label={'Mobile Number'}
          initialValue={data.mobilenumber}
          onChangeText={text => setData({...data, mobilenumber: text})}
          keyboardType={'numeric'}
          maxLength={10}
          editable={edit}
        />
        {errormobilenumber ? (
          <Text style={style.errormsg}>Please Enter Phone number</Text>
        ) : fullmobilenumber ? (
          <Text style={style.errormsg}>
            Please Enter phone number (e.g.,9825827482)
          </Text>
        ) : null}
        <Text style={style.txtgender}>Gender</Text>
        <RadioGroup
              radioButtons={redioButton}
              onPress={setselectid}
              selectedId={selectid}
              containerStyle={{
                flexDirection: 'row',
                marginLeft: '7%',
                marginTop: '3%',
              }}
              labelStyle={{fontSize: 15, color: 'black'}}
            />

        <TextInputAcc
          label={'city'}
          initialValue={data.City}
          onChangeText={text => setData({...data, City: text})}
          editable={edit}
        />
        {cityerror ? (
          <Text style={style.errormsg}>Please Enter City</Text>
        ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountDetailScreen;
