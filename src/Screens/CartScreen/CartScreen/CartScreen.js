import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import {
  Animated,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartData,
  removecart
} from '../../../Redux/Slice/counterSlice';
import CartscreenFlatlist from '../../../component/FLatList/CartScreen/CartscreenFlatlist';
import stylesheet from './stylesheet';

const CartScreen = props => {
  const navigation = useNavigation();
  const [totalprice, setTotalprice] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector(state => state.counter.value);

  useEffect(() => {
    updateTotalPrice();
  }, [data]);

  const updateTotalPrice = () => {
    let totalPrice = 0;
    data.forEach(item => {
      totalPrice += (item.price || 0) * (item.qty || 1);
    });
    setTotalprice(totalPrice);
  };

  const increaseCount = item => {
    const updatedData = data.map(cart => {
      if (cart.id === item.id) {
        return {
          ...cart,
          qty: (cart.qty || 1) + 1
        };
      } else {
        return cart;
      }
    });
    dispatch(cartData(updatedData));
  };

  const decreaseCount = item => {
    const updatedData = data.map(cart => {
      if (cart.id === item.id && cart.qty > 1) {
        return {
          ...cart,
          qty: cart.qty - 1
        };
      } else {
        return cart;
      }
    });
    dispatch(cartData(updatedData));
  };

  const addToCart = () => {
    navigation.navigate('BuyNowScreen', { data });
  };

  const removeItem = item => {
    dispatch(removecart(item.id));
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
            style={stylesheet.deleteButton}
            onPress={() => removeItem(item)}>
            <Text style={stylesheet.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={stylesheet.Main}>
        {data.length === 0 ? (
          <View>
            <LottieView
              source={require('../../../../Lottie_Animation/Animation_4.json')}
              style={stylesheet.lottieView}
              autoPlay={false}
              loop={false}
            />
            <Text style={stylesheet.txtemty}>Your Cart is Empty</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CartscreenFlatlist
                {...{
                  renderRightActions,
                  item,
                  decreaseCount,
                  increaseCount,
                  navigation
                }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        <View style={stylesheet.basketview}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={stylesheet.txttotal}>Total:</Text>
            <Text style={stylesheet.txtpricetotal}>{totalprice}₹</Text>
            <TouchableOpacity
              onPress={() => addToCart()}
              style={stylesheet.placeorderbtn}>
              <Text style={stylesheet.placeordertxt}>Place order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default CartScreen;
