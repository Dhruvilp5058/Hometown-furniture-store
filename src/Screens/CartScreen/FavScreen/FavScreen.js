import { View, Text, FlatList, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import style from './stylesheet';
import LottieView from 'lottie-react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { favscreendata, removecart, removecartfav, savecart } from '../../../Redux/Slice/counterSlice';
import FavScreenFlatlist from '../../../component/FLatList/FavScreen/FavScreenFlatlist';

export default function FavScreen() {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();
  const reduxCartItems = useSelector(state => state?.counter?.value);
  const reduxfavItems = useSelector(state => state?.counter?.favscreen);



  const addTocart = (item) => {
    dispatch(savecart(item))
  }
  const isItemInReduxCart = (itemId) => {
    return reduxCartItems.find(item => item.id === itemId);
  };
  const removeItem = item => {


    dispatch(removecartfav(item.id));
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
        {reduxfavItems.length === 0 ? (
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
            data={reduxfavItems}
            renderItem={({ item, index }) => (
              <FavScreenFlatlist
                {...{
                  item,
                  isItemInReduxCart,
                  addTocart,
                  renderRightActions,
                  navigation 
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
