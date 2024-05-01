import React, {useEffect, useState} from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import orderDetailStyle from './orderDetailStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const OrderDetail = ({itemdata}) => {
  const [addressdetail, setaddress] = useState('');
  const googledata = useSelector(state => state.order.googleauth);
  useEffect(() => {
    (async () => {
      const address = await AsyncStorage.getItem('addressDetails');
      setaddress(JSON.parse(address));
    })();
  }, []);
  return (
    <View style={orderDetailStyle.main}>
      <ScrollView>
        <View style={orderDetailStyle.itemview}>
          <Image style={orderDetailStyle.image} source={itemdata?.image} />
          <View style={orderDetailStyle.txtview}>
            <Text style={orderDetailStyle.txttype}>Type: {itemdata?.type}</Text>
            <Text style={orderDetailStyle.txtprice}>
              Price:{itemdata?.price}
            </Text>
          </View>
          {itemdata?.qty == null ? (
            <Text style={orderDetailStyle.qty}>Qty:1</Text>
          ) : (
            <Text style={orderDetailStyle.qty}>Qty:{itemdata?.qty}</Text>
          )}
        </View>
        <View style={orderDetailStyle.addressview}>
        <View style={orderDetailStyle.addview}>
          <Text style={orderDetailStyle.Add}>Dilivary Address:-</Text>
          <Text style={orderDetailStyle.txtaddress}>
            {googledata?.firstname || googledata.user?.givenName} {googledata?.lastname || googledata.user.familyName}  {`\n`}
            {addressdetail?.address}
            {`\n`}
            {addressdetail?.locality}{`\n`}{addressdetail?.city}{`\n`}{addressdetail?.pincode}{`\n`}{addressdetail?.state}
          </Text>
          <Text style={orderDetailStyle?.addmob}>{addressdetail?.mobilenumber}</Text>
          <Text style={orderDetailStyle?.addmob}>{addressdetail?.addressType}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetail;
