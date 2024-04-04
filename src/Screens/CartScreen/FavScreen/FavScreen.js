import {View, Text, FlatList, Image, TouchableOpacity, Animated} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import style from './stylesheet';
import LottieView from 'lottie-react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

export default function FavScreen() {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
 
  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );
  const getData = async () => {
    try {
      const storedata = await AsyncStorage.getItem('@favItem');
      const itemObj = JSON.parse(storedata);
      const itemdata = Object.values(itemObj);
      setCartItems(itemdata);
     
    } catch (e) {
      console.log('error for fetch data', e);
    }
  };
  const removeItem = async item => {
    try {
      const updatedItems = cartItems.filter(
        cartItem => cartItem.id !== item.id,
      );

      setCartItems(updatedItems);

      const updatedItemsObject = updatedItems.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
      }, {});

      await AsyncStorage.setItem(
        '@favItem',
        JSON.stringify(updatedItemsObject),
      );

     
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <View style={style.Main}>
      {cartItems.length === 0 ? (
        <View>
        <LottieView
          source={require('../../../../Lottie_Animation/Animation_4.json')}
          style={style.animationcart}
          autoPlay={false}
          loop={false}
        />
        <Text style={style.Favmsg}>Your Favorite List is Emty </Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({item, index}) => (
            <Swipeable
            renderRightActions={() => (
              <Animated.View style={style.swipeableActions}>
                <TouchableOpacity
                  style={style.deleteButton}
                  onPress={() => removeItem(item)}>
                  <Text style={style.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </Animated.View>
            )}>
            <View>
              <View style={style.itemrow}>
                <View style={style.imageview}>
                  <Image style={style.imageitem} source={item.image} />
                </View>
                <View style={style.itemtxtview}>
                  <Text style={style.txttype}>{item.type}</Text>
                  <Text style={style.txtprice}>{item.price}</Text>
                </View>
                <TouchableOpacity
              
                style={style.btnbuynow}>
                <Text style={style.txtbuynow}>Buy Now</Text>
              </TouchableOpacity>
              </View>

           
            </View>
            </Swipeable>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
    </GestureHandlerRootView>
  );
}
