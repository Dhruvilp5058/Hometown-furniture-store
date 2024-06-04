import { useNavigation } from '@react-navigation/native';
import { CaretLeft, Check, User } from 'phosphor-react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { useDispatch, useSelector } from 'react-redux';
import { google } from '../../Redux/Slice/orderSaveSlice';
import { verticalScale } from '../Metrics';
import style from './styleSheet';
import ImagePicker from 'react-native-image-crop-picker';

const AccountDetailScreen = () => {
  const dispatch = useDispatch();
  const reduxdata = useSelector(state => state.order.googleauth);
  console.log(reduxdata)
  const navigation = useNavigation();

  const [data, setData] = useState({
    city: '',
    phoneNumber: '',
    firstname: '',
    lastname: '',
    email: '',
  });
  const [dataerror, setDataerror] = useState({
    city: '',
    phoneNumber: '',
    firstname: '',
    lastname: '',
    email: '',
  });

  const [selectedGender, setSelectedGender] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [imageerror, setImageerror] = useState('')
  const [gendererror, setGendererror] = useState('')
  useEffect(() => {
    if (reduxdata) {
      setData(reduxdata);
      setSelectedGender(reduxdata.selectedGender || '');
      setSelectedImage(reduxdata.SelectedImage || '');
    }
  }, [reduxdata]);

  const openImagePicker = async () => {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      const doneimage = image.path
      setSelectedImage(doneimage);
    });


  };

  const storeData = async () => {
    try {
      if (!data.firstname && !reduxdata?.user?.givenName) {
        setDataerror(prevData => ({ ...prevData, firstname: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, firstname: false }));
      }
      if (!data.lastname && !reduxdata?.user?.familyName) {
        setDataerror(prevData => ({ ...prevData, lastname: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, lastname: false }));
      }
      if (!data.email && !reduxdata?.user?.email) {
        setDataerror(prevData => ({ ...prevData, email: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, email: false }));
      }
      if (!data.phoneNumber) {
        setDataerror(prevData => ({ ...prevData, phoneNumber: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, phoneNumber: false }));
      }
      if (!data.city) {
        setDataerror(prevData => ({ ...prevData, city: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, city: false }));
      }
      if (!selectedImage && !reduxdata?.user?.photo) {
        setImageerror(true)
      } else {
        setImageerror(false)
      }
      if (!selectedGender) {
        setGendererror(true)
      } else {
        setGendererror(false)
      }
      if (
        !data.firstname && !reduxdata?.user?.givenName ||
        !data.lastname && !reduxdata?.user?.familyName ||
        !data.email && !reduxdata?.user?.email ||
        !data.city ||
        !data.phoneNumber ||
        !selectedImage && !reduxdata?.user?.photo ||
        !selectedGender
      ) {
        return false;
      } else {
        const payload = { ...data, selectedGender, SelectedImage: selectedImage };
        console.log('data?>>>>>>>>', payload)
        dispatch(google(payload))
      }
    } catch (error) {
      console.log(error);
    }
  }

  const radioOptions = useMemo(
    () => [
      { id: 'male', label: 'Male', value: 'male' },
      { id: 'female', label: 'Female', value: 'female' },
    ],
    []
  );

  return (
    <View style={style.Main}>
      <ScrollView>
        <View style={style.myeditprofieview}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={style.iconback}>
            <CaretLeft size={30} weight="bold" color="white" />
          </TouchableOpacity>
          <Text style={style.myorder}>Detail</Text>
          <TouchableOpacity style={style.check} onPress={storeData}>
            <Check size={30} color='white' weight='bold' />
          </TouchableOpacity>
        </View>
        <View style={style.iconview}>
          <TouchableOpacity onPress={openImagePicker}>
            {selectedImage || reduxdata?.user?.photo ? (
              <Image source={{ uri: selectedImage || reduxdata?.user?.photo }} style={style.image} />
            ) : (
              <User size={80} style={style.usericon} />
            )}
          </TouchableOpacity>

        </View>
        {imageerror ? (
          <Text style={style.imagerror}>Enter image</Text>
        ) : null}
        <View style={style.viewname}>
          <View>
            <Text style={style.txtl}>First name</Text>
            <TextInput
              style={style.txtinputl}
              value={data?.firstname || reduxdata?.user?.givenName}
              onChangeText={text => setData(prevData => ({ ...prevData, firstname: text }))}
            />
            {dataerror.firstname ? (
              <Text style={{ color: 'red' }}>Enter First name</Text>
            ) : null}
          </View>
          <View>
            <Text style={style.txtl}>Last name</Text>
            <TextInput
              style={style.txtinputl}
              value={data?.lastname || reduxdata?.user?.familyName}
              onChangeText={text => setData(prevData => ({ ...prevData, lastname: text }))}
            />
            {dataerror.lastname ? (
              <Text style={{ color: 'red' }}>Enter Last name</Text>
            ) : null}
          </View>
        </View>
        <Text style={style.txt}>Email</Text>
        <TextInput
          style={style.txtinput}
          value={data?.email || reduxdata?.user?.email}
          onChangeText={text => setData(prevData => ({ ...prevData, Email: text }))}
        />
        {dataerror.email ? (
          <Text style={style.error}>Enter Email </Text>
        ) : null}
        <Text style={style.txt}>Mobile number</Text>
        <TextInput
          style={style.txtinput}
          value={data.phoneNumber}
          onChangeText={text => setData(prevData => ({ ...prevData, phoneNumber: text }))}
          keyboardType={'numeric'}
          maxLength={10}
        />
        {dataerror.phoneNumber ? (
          <Text style={style.error}>Enter Mobile number</Text>
        ) : null}
        <Text style={style.txtgender}>Gender</Text>
        <RadioGroup
          radioButtons={radioOptions}
          onPress={setSelectedGender}
          selectedId={selectedGender}
          containerStyle={style.redioButton}
          labelStyle={{ fontSize: 15, color: 'black' }}
        />
        {gendererror ? (
          <Text style={style.error}>Enter Gender</Text>
        ) : null}
        <Text style={style.txt}>City</Text>
        <TextInput
          style={[{ marginBottom: verticalScale(5) }, style.txtinput]}
          value={data.city}
          onChangeText={text => setData(prevData => ({ ...prevData, city: text }))}
        />
        {dataerror.city ? (
          <Text style={style.error}>Enter city</Text>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default AccountDetailScreen;
