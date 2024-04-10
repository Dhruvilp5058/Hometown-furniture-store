import { View, Text, FlatList, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import style from './stylesheet';
import LottieView from 'lottie-react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { savecart } from '../../../Redux/Slice/counterSlice';
import FavScreenFlatlist from '../../../component/FLatList/FavScreen/FavScreenFlatlist';

export default function FavScreen() {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();
  const reduxCartItems = useSelector(state => state?.counter?.value);
  // console.log('Fav Screen data',reduxCartItems);

  const addTocart = (item) => {
    dispatch(savecart(item))
  }
  const isItemInReduxCart = (itemId) => {
    return reduxCartItems.find(item => item.id === itemId);
  };

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
  const renderRightActions = (item, progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
    return (
      <View
        style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.View style={{ transform: [{ translateX: trans }] }}>
          <TouchableOpacity
            style={style.deleteButton}
            onPress={() => removeItem(item)}>
            <Text style={style.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
            renderItem={({ item, index }) => (
              <FavScreenFlatlist
                {...{
                  item,
                  isItemInReduxCart,
                  addTocart,
                  renderRightActions
                }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </GestureHandlerRootView>
  );
}
