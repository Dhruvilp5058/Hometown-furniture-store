import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { CaretLeft } from 'phosphor-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import { useDispatch } from 'react-redux';
import { maincart, savecart } from '../../Redux/Slice/counterSlice';
import ModalAddress from './ModalAdress/ModalAddress';
import style from './styleSheet';
import { ordercart } from '../../Redux/Slice/ordersaveslice';

const BuyNowScreen = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route?.params ?? [];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (data?.length > 0) {
      setProducts(data);
    } else {
      setProducts([data]);
    }
  }, [data]);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      fetchAddress();
    }),
  );

  const fetchAddress = async () => {
    try {
      const savedAddress = await AsyncStorage.getItem('addressDetails');
      if (savedAddress) {
        const { address } = JSON.parse(savedAddress);
        const shortenedAddress =
          address.length > 20 ? `${address.substring(0, 20)}...` : address;
        setAddress(shortenedAddress);
      } else {
        setAddress('');
      }
    } catch (error) {
      console.error('Failed to fetch address', error);
    }
  };
  const storeOrder = async () => {
    try {
      dispatch(savecart(null));
      dispatch(maincart(data));
    } catch (e) {
      console.log('Error storing order detail', e);
    }
  };
  const rzorPay = () => {
    if (!address) {
      ToastAndroid.showWithGravityAndOffset(
        'Please add your address before continuing with the order',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return;
    }
    var options = {
      description: 'Credits towards consultation',
      image: 'https://example.com/your-image.png',
      currency: 'INR',
      key: 'rzp_test_L5QxgL7k3fUKDE',
      amount: totalPrice * 100,
      name: 'My Store App',
      order_id: '',
      prefill: {
        email: '',
        contact: '',
        name: '',
      },
      theme: { color: 'rgb(0, 172, 255)' },
    };
    RazorpayCheckout.open(options)
      .then(data => {
        ToastAndroid.showWithGravityAndOffset(
          'Payment Successful!',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        storeOrder();
        navigation.navigate('MyOrder');
      })
      .catch(error => {
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  const totalPrice = products.reduce(
    (acc, curr) => acc + parseInt(curr.price) * (curr.qty || 1),
    0
  );
  const totalPricebuynow = totalPrice + 120

  return (
    <View style={style.Main}>
      <View style={style.blueview}>
        <TouchableOpacity
          style={style.btnback}
          onPress={() => navigation.goBack()}>
          <CaretLeft
            size={34}
            weight="bold"
            color="white"
            style={style.backicon}
          />
        </TouchableOpacity>
        <Text style={style.txtmycart}>My Cart</Text>
      </View>

      <FlatList
        data={products ?? []}
        renderItem={({ item }) => (
          <View style={style.itemview}>
            <Image source={item.image} style={style.itmimage} />
            <View style={style.txtviewmain}>
              <Text style={style.txttype}>{item?.type}</Text>
              <Text style={style.txtprice}>{item?.price}₹</Text>
            </View>
            <View style={style.viewqty}>
              {item.qty == null ? (
                <Text style={style.qty}>Qty:1</Text>
              ) : (
                <Text style={style.qty}>Qty:{item.qty}</Text>
              )}
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            <View style={style.addressview}>
              <View style={style.adress}>
                <Text style={style.txtadress}>Address</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  {address ? (
                    <Text style={style.addadress}>{address}</Text>
                  ) : (
                    <Text style={style.addadress}>Add Address</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={style.ordersummry}>
              <Text style={style.txtordersummery}>Order Summery</Text>

              <View style={style.orderview}>
                <Text style={style.txtorder}>Order</Text>
                <Text style={style.orderprice}>{totalPrice}</Text>
              </View>
              <View style={style.Delivery}>
                <Text style={style.txtdil}>Delivery</Text>
                <Text style={style.txtdilprice}>120</Text>
              </View>
              <View style={style.totalprice}>
                <Text style={style.txttotal}>Total</Text>
                <Text style={style.txttotalprice}>{totalPricebuynow ?? []}₹</Text>
              </View>
            </View>
            <View style={style.offerview}>
              <Text style={style.txtoffer}>Offers</Text>
              <TouchableOpacity style={style.addcodebtn}>
                <Text style={style.addcode}>add code</Text>
              </TouchableOpacity>
            </View>
            <ModalAddress
              isVisible={isModalVisible}
              onClose={() => setModalVisible(false)}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={style.viewbtn}>
        {data?.count == null ? (
          <Text style={style.txtpay}>Pay:{totalPricebuynow ?? []}₹</Text>
        ) : (
          <Text style={style.txtpay}>Pay:{totalPrice ?? []}₹</Text>
        )}
        <TouchableOpacity
          onPress={rzorPay}
          style={style.btnpaynow}>
          <Text style={style.txtpaynow}>Countinue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuyNowScreen;
