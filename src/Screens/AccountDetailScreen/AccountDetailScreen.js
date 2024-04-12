import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { CaretLeft, Check, User } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import RadioGroup from 'react-native-radio-buttons-group';
import { useDispatch, useSelector } from 'react-redux';
import { addressdata, profiledata } from '../../Redux/Slice/counterSlice';
import style from './styleSheet';
import { verticalScale } from '../Metrics';

const AccountDetailScreen = () => {
  const dispatch = useDispatch();
  const reduxdata = useSelector(state => state.counter.profile);
  const navigation = useNavigation();

  const [data, setData] = useState({
    city: '',
    mobilenumber: '',
    firstname: '',
    lastname: '',
    Email: '',
  });
  const [dataerror, setDataerror] = useState({
    city: '',
    mobilenumber: '',
    firstname: '',
    lastname: '',
    Email: '',
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
        const imageUri = response.uri || response.assets?.[0]?.uri;
        if (imageUri) {
          setSelectedImage(imageUri); // Update selected image
        } else {
          console.log('No image selected or URI not found');
        }
      }
    });
  };

  const storeData = async () => {
    try {
      if (!data.firstname) {
        setDataerror(prevData => ({ ...prevData, firstname: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, firstname: false }));
      }
      if (!data.lastname) {
        setDataerror(prevData => ({ ...prevData, lastname: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, lastname: false }));
      }
      if (!data.Email) {
        setDataerror(prevData => ({ ...prevData, Email: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, Email: false }));
      }
      if (!data.mobilenumber) {
        setDataerror(prevData => ({ ...prevData, mobilenumber: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, mobilenumber: false }));
      }
      if (!data.city) {
        setDataerror(prevData => ({ ...prevData, city: true }));
      } else {
        setDataerror(prevData => ({ ...prevData, city: false }));
      }
      if (!selectedImage) {
        setImageerror(true)
      } else {
        setImageerror(false)
      }
      if (!selectedGender) {
        setGendererror(true)
      } else {
        setGendererror(false)
      }
      if (!data.firstname || !data.lastname || !data.Email || !data.mobilenumber || !data.city || !selectedImage || !selectedGender) {
        return false
      }
      const payload = { ...data, selectedGender, SelectedImage: selectedImage };
      dispatch(profiledata(payload));
    } catch (error) {
      console.log(error);
    }
  };

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
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={style.image} />
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
              value={data.firstname}
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
              value={data.lastname}
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
          value={data.Email}
          onChangeText={text => setData(prevData => ({ ...prevData, Email: text }))}
        />
        {dataerror.Email ? (
          <Text style={style.error}>Enter Email </Text>
        ) : null}
        <Text style={style.txt}>Mobile number</Text>
        <TextInput
          style={style.txtinput}
          value={data.mobilenumber}
          onChangeText={text => setData(prevData => ({ ...prevData, mobilenumber: text }))}
          keyboardType={'numeric'}
          maxLength={10}
        />
        {dataerror.mobilenumber ? (
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
