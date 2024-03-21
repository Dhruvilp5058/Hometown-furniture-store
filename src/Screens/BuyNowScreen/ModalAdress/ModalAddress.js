import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import style from './styleSheet';
import TextInputAdd from '../../../component/TextInput_Add/TextInputAdd';
import {RadioGroup} from 'react-native-radio-buttons-group';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Trash} from 'phosphor-react-native';

const ModalAddress = ({isVisible, onClose}) => {
  const [selectid, setselectid] = useState('');
  const [addressDetails, setAddressDetails] = useState({
    address: '',
    locality: '',
    city: '',
    pincode: '',
    state: '',
    mobilenumber: '',
  });
  useEffect(() => {
    const loadData = async () => {
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
          });
          setselectid(parsedData.addressType);
        }
      } catch (error) {
        console.error('Failed to load the address data', error);
      }
    };

    loadData();
  }, []);
  const deleteAdd = () => {
    const remove = () => {
      AsyncStorage.removeItem('addressDetails')
        .then(() => {
          setAddressDetails({
            address: '',
            locality: '',
            city: '',
            pincode: '',
            state: '',
          });
          setselectid(undefined); // Reset the selected radio button
        })
        .catch(error => {
          console.error('Failed to delete the address details', error);
        });
    };
    Alert.alert('Delete Address', 'Are you Sure Delete Your Address', [
      {text: 'ok', onPress: () => remove()},
    ]);
  };
  const saveAddressDetails = async () => {
    try {
      const dataToSave = {
        ...addressDetails,
        addressType: selectid,
      };
      await AsyncStorage.setItem('addressDetails', JSON.stringify(dataToSave));
      Alert.alert('Susscess', 'Address saved successfully!', [
        {text: 'OK', onPress: () => onClose()},
      ]);
    } catch (error) {
      console.error('Failed to save the address', error);
    }
  };
  const handleChange = (name, value) => {
    setAddressDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const redioButton = useMemo(
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
      onRequestClose={onClose}>
      <View style={style.blur}>
        <View style={style.Main}>
          <ScrollView>
            <TouchableOpacity
              style={style.btndelete}
              onPress={() => deleteAdd()}>
              <Trash size={32} />
            </TouchableOpacity>
            <TextInputAdd
              placeholder={'Address(House No , Building , Street , Area)'}
              value={addressDetails.address}
              onChangeText={text => handleChange('address', text)}
            />
            <TextInputAdd
              placeholder={'Locality/Town'}
              value={addressDetails.locality}
              onChangeText={text => handleChange('locality', text)}
            />

            <TextInputAdd
              placeholder={'City/District'}
              value={addressDetails.city}
              onChangeText={text => handleChange('city', text)}
            />

            <TextInputAdd
              placeholder={'Pincode'}
              props={{maxLength: 9}}
              value={addressDetails.pincode}
              onChangeText={text => handleChange('pincode', text)}
            />

            <TextInputAdd
              placeholder={'State'}
              value={addressDetails.state}
              onChangeText={text => handleChange('state', text)}
            />
               <TextInputAdd
              placeholder={'Mobile number'}
              value={addressDetails.mobilenumber}
              onChangeText={text => handleChange('mobilenumber', text)}
            />

        
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
            <TouchableOpacity style={style.BtnAdd} onPress={saveAddressDetails}>
              <Text style={style.txtAdd}>Add Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.BtnAdd} onPress={onClose}>
              <Text style={style.txtAdd}>close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddress;
