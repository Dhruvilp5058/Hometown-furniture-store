import AsyncStorage from '@react-native-async-storage/async-storage';
import { X } from 'phosphor-react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import TextInputAdd from '../../../component/TextInput/TextInput_Add/TextInputAdd';
import style from './styleSheet';
import { useFocusEffect } from '@react-navigation/native';

const ModalAddress = ({ isVisible, onClose }) => {
  const [selectid, setSelectId] = useState('');
  const [addressDetails, setAddressDetails] = useState({
    address: '',
    locality: '',
    city: '',
    pincode: '',
    state: '',
    mobilenumber: '',
  });
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({
    address: '',
    locality: '',
    city: '',
    pincode: '',
    state: '',
    mobilenumber: '',
  });

  const validation = () => {
    const errors = {};

    if (!addressDetails.address.trim()) {
      errors.address = 'Please enter address';
    }

    if (!addressDetails.locality.trim()) {
      errors.locality = 'Please enter locality';
    }

    if (!addressDetails.city.trim()) {
      errors.city = 'Please enter city';
    }

    if (!addressDetails.pincode.trim()) {
      errors.pincode = 'Please enter pincode';
    }

    if (!addressDetails.state.trim()) {
      errors.state = 'Please enter state';
    }

    if (!addressDetails.mobilenumber.trim()) {
      errors.mobilenumber = 'Please enter mobile number';
    } else if (!/^\d{10}$/.test(addressDetails.mobilenumber.trim())) {
      errors.mobilenumber = 'Please enter a valid mobile number';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    (async () => {
      try {
        const savedAddress = await AsyncStorage.getItem('addressDetails');
        if (savedAddress) {
          const parsedData = JSON.parse(savedAddress);
          setAddressDetails({
            address: parsedData.address,
            locality: parsedData.locality,
            city: parsedData.city,
            pincode: parsedData.pincode,
            state: parsedData.state,
            mobilenumber: parsedData.mobilenumber,
          });
          setSelectId(parsedData.addressType);
        }
      } catch (error) {
        console.error('Failed to load the address data', error);
      }
    })();
  }, []);


  useEffect(() => {
    (async () => {
      const savedAddress = await AsyncStorage.getItem('addressDetails');
      setAddress(savedAddress)
    })()
  }, [address])

  const deleteAddress = () => {
    const remove = () => {
      AsyncStorage.removeItem('addressDetails')
        .then(() => {
          setAddress(null)
          setAddressDetails({
            address: '',
            locality: '',
            city: '',
            pincode: '',
            state: '',
            mobilenumber: '',
          });
          setSelectId('');
          setErrors({
            address: '',
            locality: '',
            city: '',
            pincode: '',
            state: '',
            mobilenumber: '',
          });
        })
        .catch(error => {
          console.error('Failed to delete the address details', error);
        });
    };

    Alert.alert('Delete Address', 'Are you sure you want to delete your address?', [
      { text: 'OK', onPress: remove },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const saveAddressDetails = async () => {
    if (validation()) {
      try {
        const dataToSave = {
          ...addressDetails,
          addressType: selectid,
        };
        await AsyncStorage.setItem('addressDetails', JSON.stringify(dataToSave));
        Alert.alert('Success', 'Address saved successfully!', [{ text: 'OK', onPress: onClose }]);
      } catch (error) {
        console.error('Failed to save the address', error);
      }
    }
  };

  const handleChange = (name, value) => {
    setAddressDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const radioButtons = useMemo(
    () => [
      {
        id: 'Home',
        label: 'Home',
        value: 'option1',
        selected: selectid === 'Home',
      },
      {
        id: 'Office',
        label: 'Office',
        value: 'option2',
        selected: selectid === 'Office',
      },
    ],
    [selectid],
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={style.blur}>
          <View style={style.Main}>
            <TouchableWithoutFeedback>
              <KeyboardAvoidingView style={style.container}>
                <ScrollView>
                  <TouchableOpacity onPress={onClose} style={style.trass}>
                    <X size={32} />
                  </TouchableOpacity>
                  <TextInputAdd
                    placeholder={'Address(House No , Building , Street , Area)'}
                    value={addressDetails.address}
                    onChangeText={text => handleChange('address', text)}
                    error={errors.address}
                  />
                  <TextInputAdd
                    placeholder={'Locality/Town'}
                    value={addressDetails.locality}
                    onChangeText={text => handleChange('locality', text)}
                    error={errors.locality}
                  />
                  <TextInputAdd
                    placeholder={'City/District'}
                    value={addressDetails.city}
                    onChangeText={text => handleChange('city', text)}
                    error={errors.city}
                  />
                  <TextInputAdd
                    placeholder={'Pincode'}
                    props={{ keyboardType: 'numeric' }}
                    value={addressDetails.pincode}
                    onChangeText={text => handleChange('pincode', text)}
                    error={errors.pincode}
                  />
                  <TextInputAdd
                    placeholder={'State'}
                    value={addressDetails.state}
                    onChangeText={text => handleChange('state', text)}
                    error={errors.state}
                  />
                  <TextInputAdd
                    placeholder={'Mobile number'}
                    value={addressDetails.mobilenumber}
                    onChangeText={text => handleChange('mobilenumber', text)}
                    error={errors.mobilenumber}
                    props={{ maxLength: 10, keyboardType: 'numeric' }}
                  />
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectId}
                    selectedId={selectid}
                    containerStyle={{
                      flexDirection: 'row',
                      marginLeft: '7%',
                      marginTop: '3%',
                    }}
                    labelStyle={{ fontSize: 15, color: 'black' }}
                  />
                  {address ? (<TouchableOpacity onPress={deleteAddress} style={style.btnadd}>
                    <Text style={style.txtadd}>Reset</Text>
                  </TouchableOpacity>) : (<TouchableOpacity onPress={saveAddressDetails} style={style.btnadd}>
                    <Text style={style.txtadd}>Add Address</Text>
                  </TouchableOpacity>)}
                </ScrollView>
              </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalAddress;
