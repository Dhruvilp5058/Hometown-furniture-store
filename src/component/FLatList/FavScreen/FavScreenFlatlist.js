import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import style from '../../../Screens/CartScreen/FavScreen/stylesheet';

const FavScreenFlatlist = ({
  item,
  isItemInReduxCart,
  addTocart,
  renderRightActions,
  navigation
}) => {
  return (
    <Swipeable
    renderRightActions={(progress, dragX) =>
      renderRightActions(item, progress, dragX)
    }
    overshootRight={false}>
       <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailScreen', { item: item })}>
      <View>
        <View style={style.itemrow}>
          <View style={style.imageview}>
            <Image style={style.imageitem} source={item.image} />
          </View>
          <View style={style.itemtxtview}>
            <Text style={style.txttype}>{item.type}</Text>
            <Text style={style.txtprice}>{item.price}₹</Text>
          </View>
          <View style={style.addcart}>
            <Text style={style.swipedelete}>Swipe to Delete</Text>
          {isItemInReduxCart(item.id) ? (
            <TouchableOpacity style={style.btnbuynow}>
              <Text style={style.txtbuynow}>Item In Cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={style.btnbuynow}
              onPress={() => addTocart(item)}>
              <Text style={style.txtbuynow}>Add To Cart</Text>
            </TouchableOpacity>
          )}
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
};

export default FavScreenFlatlist;

const styles = StyleSheet.create({});
