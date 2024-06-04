import { useNavigation, useRoute } from '@react-navigation/native';
import { CaretLeft, Heart, ShoppingCart } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../../assets/Colour/colour';
import { favscreendata, removecartfav, savecart } from '../../Redux/Slice/counterSlice';
import styleDetilScreen from './styledetailScreen';

const DetailScreen = props => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const existingItems = useSelector(state => state.counter.value);
  const isItemInReduxCart = itemId => {
    return existingItems.find(item => item.id === itemId);
  };

  const setItemData = async () => {
    try {
      dispatch(savecart(item));

      ToastAndroid.showWithGravityAndOffset(
        '    Added to Cart !    ',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50,
      );
    } catch (error) {
      console.error('Error storing item: ', error);
    }
  };


  const reduxfav = useSelector(state => state.counter.favscreen)
  const isItemInReduxfavCart = itemId => {
    return reduxfav.find(item => item.id === itemId);
  };

  const favItemData = async () => {
    try {
      dispatch(favscreendata(item))
    } catch (e) {
      console.log('Error updating favorites:', e);
    }
  };
  const remove = ()=>{
    try{
      dispatch(removecartfav(item.id))
    }catch (e) {
      console.log('Error updating favorites:', e);
    }
  }



  const BuyNow = () => {
    // dispatch(maincart(item))
    navigation.navigate('BuyNowScreen', { data: item })
  }
  return (
    <ScrollView style={styleDetilScreen.Main}>
      <StatusBar backgroundColor={Colors.primarycolour} />
      <View style={styleDetilScreen.blueview}>
        <View style={styleDetilScreen.viewdetail}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <CaretLeft size={40} color="white" weight="bold" />
          </TouchableOpacity>
          <Text style={styleDetilScreen.txtdetail}>Detail Product</Text>
        </View>
      </View>
      <Image style={styleDetilScreen.itemimage} source={item.image} />
      <View style={styleDetilScreen.itemview}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={styleDetilScreen.txttype}>{item.type}</Text>
            <Text style={styleDetilScreen.txtprice}>{item.price}₹</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            {isItemInReduxfavCart(item?.id) ? (<TouchableOpacity
              style={styleDetilScreen.iconitem}
              onPress={()=>remove()}
              >
              <Heart
                size={50}
                weight={'fill'}
                color={'red'}
              />
            </TouchableOpacity>) : (
              <TouchableOpacity
                style={styleDetilScreen.iconitem}
                onPress={() => favItemData()}>
                <Heart
                  size={50}
                  weight={'regular'}
                  color={'black'}
                />
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styleDetilScreen.btnitem}
              onPress={() => BuyNow()}>
              <Text style={styleDetilScreen.btntxt}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styleDetilScreen.viewdec}>
        <Text style={styleDetilScreen.txtdec}>Description</Text>
        <Text style={styleDetilScreen.decdetail}>
          {item?.discription}
        </Text>
      </View>
      {isItemInReduxCart(item.id) ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={styleDetilScreen.addcartbtn}>
          <ShoppingCart size={30} style={styleDetilScreen.iconcart} />
          <Text style={styleDetilScreen.addcarttxt}>Go to cart</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styleDetilScreen.addcartbtn}
          onPress={() => setItemData()}>
          <ShoppingCart size={30} style={styleDetilScreen.iconcart} />
          <Text style={styleDetilScreen.addcarttxt}>Add to cart</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default DetailScreen;
