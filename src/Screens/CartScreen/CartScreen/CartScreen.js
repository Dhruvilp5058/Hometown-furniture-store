import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import stylesheet from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {
  ArrowLeft,
  CurrencyInr,
  Minus,
  Plus,
  ShoppingCart,
} from 'phosphor-react-native';
import LottieView from 'lottie-react-native';

const CartScreen = props => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState({});
  const [totalprice, setTotalprice] = useState(0);
  
  const callbackdata = useCallback(() => {
    getData();
  }, []);
  useFocusEffect(callbackdata);
  const getData = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('@cartItems');
      if (storedItems) {
        const itemsObject = JSON.parse(storedItems);
        if (itemsObject && typeof itemsObject === 'object') {
          const itemsArray = Object.values(itemsObject);
          setCartItems(itemsArray);
          let totalPrice = 0;
          itemsArray.forEach(item => {
            const priceWithoutDollar = parseFloat(item.price.replace('$', ''));
            const itemCount = count[item.id] || 1;
            totalPrice += priceWithoutDollar * itemCount;
          });
          setTotalprice(totalPrice);
        } else {
          console.log(
            'Retrieved cart items are not in expected format:',
            itemsObject,
          );
          setCartItems([]);
        }
      } else {
        // console.log('No cart items found in AsyncStorage');
        setCartItems([]);
      }
    } catch (error) {
      console.error('Error retrieving cart items: ', error);
    }
  };
  const updateTotalPrice = updatedCart => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      const priceWithoutDollar = parseFloat(item.price.replace('$', ''));
      const itemCount = updatedCart[item.id] || 1;
      totalPrice += priceWithoutDollar * itemCount;
    });
    setTotalprice(totalPrice);
  };

  const increaseCount = async item => {
    const updatedCart = {...count};
    updatedCart[item.id] = (updatedCart[item.id] || 1) + 1;
    setCount(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const decreaseCount = item => {
    const updatedCart = {...count};
    if (updatedCart[item.id] && updatedCart[item.id] > 0) {
      updatedCart[item.id] -= 1;
      setCount(updatedCart);
      updateTotalPrice(updatedCart);
    }
  };
  const addToCart = async () => {
    const data = {cartItems, totalprice};
    try {
      await AsyncStorage.setItem('addcartitem', JSON.stringify(data));
      //  console.log('data store async',data);
      navigation.navigate('BuyNowScreen');
    } catch (error) {
      console.error('Error storing data:', error);
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
        '@cartItems',
        JSON.stringify(updatedItemsObject),
      );

      updateTotalPrice(count);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={stylesheet.Main}>
        {cartItems.length === 0 ? (
          <View>
            <LottieView
              source={require('../../../../Lottie_Animation/Animation_4.json')}
              style={stylesheet.lottieView}
              autoPlay={true}
              loop={false}
            />
            <Text style={stylesheet.txtemty}>Your Cart is Emty</Text>
          </View>
        ) : (
          <FlatList
            data={cartItems}
            renderItem={({item, index}) => (
              <Swipeable
                renderRightActions={() => (
                  <Animated.View style={stylesheet.swipeableActions}>
                    <TouchableOpacity
                      style={stylesheet.deleteButton}
                      onPress={() => removeItem(item)}>
                      <Text style={stylesheet.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                  </Animated.View>
                )}>
                <View style={{top: 25}}>
                  <View style={stylesheet.itemrow}>
                    <View style={stylesheet.imageview}>
                      <Image style={stylesheet.imageitem} source={item.image} />
                    </View>
                    <View style={stylesheet.itemtxtview}>
                      <Text style={stylesheet.txttype}>{item.type}</Text>
                      <Text style={stylesheet.txtprice}>{item.price}</Text>
                    </View>
                  </View>

                  <View style={stylesheet.iconmainview}>
                    <View style={stylesheet.iconview}>
                      <TouchableOpacity onPress={() => decreaseCount(item)}>
                        <Minus
                          size={25}
                          style={{borderColor: 'black', right: '20%'}}
                        />
                      </TouchableOpacity>
                      <Text style={stylesheet.txtcount}>
                        {count[item.id] || 1}
                      </Text>
                      <TouchableOpacity onPress={() => increaseCount(item)}>
                        <Plus
                          size={25}
                          style={{borderColor: 'black', left: '20%'}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Swipeable>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        <View style={stylesheet.basketview}>
          <View style={{flexDirection: 'row'}}>
            <Text style={stylesheet.txttotal}>Total:</Text>
            <Text style={stylesheet.txtpricetotal}>{totalprice}</Text>
            <CurrencyInr size={25} weight="bold" style={stylesheet.ruppes} />
            <TouchableOpacity
              style={stylesheet.placeorderbtn}
              onPress={() => addToCart()}>
              <Text style={stylesheet.placeordertxt}>Place ordder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default CartScreen;
