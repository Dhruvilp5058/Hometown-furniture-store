import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import style from './stylesheet';
import LottieView from 'lottie-react-native';
import { moderateScale, verticalScale } from '../Metrics';

const MyOrder = () => {
  const [orderDetail, setOrderDetail] = useState('');
  const navigation = useNavigation()
  useFocusEffect(
    useCallback(() => {
      orderdetail();
    }),
  );

  const orderdetail = async () => {
    try {
      const getItem = await AsyncStorage.getItem('orderDetail');

      const parsedOrderDetail = JSON.parse(getItem);

      setOrderDetail(parsedOrderDetail);
    } catch (e) {
      console.error('error for fetch data', e);
    }
  };
  useEffect(() => {
    //  navigation.goBack('HomeScreen')
  }, [navigation]);

  return (
    <View style={style.Main}>
      {orderDetail ? (<FlatList
        data={orderDetail?.data?.cartItems ?? []}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('OrderDetail', { item: item, orderDetail })}>
              <View style={style.ItemVIew}>
                <View>
                  <Text style={style.txtarrive}>Arrive on next 2 Day...</Text>
                  <View style={style.txtview}>
                    <Text style={style.txttype}> {item?.type}</Text>
                    <Text style={style.txtprice}> {item?.price}</Text>
                  </View>
                </View>
                <Image style={style.imageitem} source={item?.image} />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />) : (
        <View>
          <LottieView
            source={require('../../../Lottie_Animation/Animation_4.json')}
            style={style.lottieview}
            autoPlay={false}
            loop={false}
          />
          <Text style={style.txtemtycart}>Your Cart is Emty</Text>  
        </View>
      )}
    </View>
  );
};

export default MyOrder;
