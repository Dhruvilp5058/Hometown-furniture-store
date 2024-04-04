import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFocusEffect,
  useNavigation,
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
import ModalAddress from './ModalAdress/ModalAddress';
import style from './styleSheet';

const BuyNowScreen = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [addresAsync, setAddresAsync] = useState('');
  const [count, setcount] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    getData();

  }, []);
  useFocusEffect(
    useCallback(() => {
      fetchAddress()
    })
  )

  const getData = useCallback(async () => {
    try {
      const storedData = await AsyncStorage.getItem('addcartitem');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
        setPrice(parsedData.totalprice);

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  const fetchAddress = async () => {
    try {
      const savedAddress = await AsyncStorage.getItem('addressDetails');
      setAddresAsync(savedAddress);
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
      const items = {
        data: data,
        address: addresAsync,
        totalPrice: totalPrice,
      };
      await AsyncStorage.setItem('orderDetail', JSON.stringify(items));
      console.log('Stored Order Detail', items);
    } catch (e) {
      console.log('Error storing order detail', e);
    }
  };

  const rzorPay = () => {
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
      .then((data) => {
        AsyncStorage.removeItem('@cartItems');
        AsyncStorage.removeItem('addcartitem');
        ToastAndroid.showWithGravityAndOffset(
          'Payment Successful!',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        storeOrder();
        navigation.navigate('MyOrder');
      })
      .catch((error) => {
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  const totalPrice = price + 120;

  return (
    <View style={style.Main}>
      <View style={style.blueview}>
        <TouchableOpacity
          style={style.btnback}
          onPress={() => navigation.goBack()}>
          <CaretLeft size={34} weight="bold" color="white" style={style.backicon} />
        </TouchableOpacity>
        <Text style={style.txtmycart}>My Cart</Text>
      </View>

      <FlatList
        data={data.cartItems}
        renderItem={({ item }) => (
          <View style={style.itemview}>
            <Image source={item.image} style={style.itmimage} />
            <View style={style.txtviewmain} >
              <Text style={style.txttype}>{item.type}</Text>
              <Text style={style.txtprice}>{item.price}</Text>
            </View>
            <View style={style.viewqty}>
              <Text style={style.qty}>Qty</Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            <View style={style.offerview}>
              <Text style={style.txtoffer}>Offers</Text>
              <TouchableOpacity style={style.addcodebtn}>
                <Text style={style.addcode}>add code</Text>
              </TouchableOpacity>
            </View>
            <View style={style.ordersummry}>
              <Text style={style.txtordersummery}>Order Summery</Text>
              <View style={style.orderview}>
                <Text style={style.txtorder}>Order</Text>
                <Text style={style.orderprice}>{price}</Text>
              </View>
              <View style={style.Delivery}>
                <Text style={style.txtdil}>Delivery</Text>
                <Text style={style.txtdilprice}>120</Text>
              </View>
              <View style={style.totalprice}>
                <Text style={style.txttotal}>Total</Text>
                <Text style={style.txttotalprice}>{totalPrice}</Text>
              </View>
            </View>
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
            <ModalAddress isVisible={isModalVisible} onClose={() => setModalVisible(false)} />

            <TouchableOpacity onPress={rzorPay} style={style.btnpaynow}>
              <Text style={style.txtpaynow}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default BuyNowScreen;
