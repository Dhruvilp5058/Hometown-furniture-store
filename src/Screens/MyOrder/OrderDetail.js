import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import orderDetailStyle from './orderDetailStyle';
import {AddressCollectionMode} from '@stripe/stripe-react-native/lib/typescript/src/types/PaymentSheet';

const OrderDetail = () => {
  const {params} = useRoute();
  const data = params;
  const {item} = data;
  const {orderDetail} = data;
  const {address} = orderDetail;
  const adressdata = JSON.parse(address);
  console.log('data=-===--=-=', address);

  useEffect(() => {}, []);

  return (
    <View style={orderDetailStyle.main}>
      <View style={orderDetailStyle.itemview}>
        <View>
          <Text style={orderDetailStyle.txttype}>{item.type}</Text>
          <Text style={orderDetailStyle.txtprice}>{item.price}</Text>
        </View>
        <Image style={orderDetailStyle.image} source={item.image} />
      </View>
      <View style={orderDetailStyle.addview}>
        <Text style={orderDetailStyle.txtuser}>User Name</Text>
        <Text style={orderDetailStyle?.address ?? []}>
          {adressdata?.address ?? []},{adressdata?.locality ?? []},{`\n`}
          {adressdata?.city ?? []} ,{adressdata?.state ?? []},{' '}
          {adressdata?.pincode ?? []}{`\n`}{adressdata?.mobilenumber??[]}{`\n`}{adressdata?.addressType??[]}
        </Text>

      </View>
    </View>
  );
};

export default OrderDetail;
