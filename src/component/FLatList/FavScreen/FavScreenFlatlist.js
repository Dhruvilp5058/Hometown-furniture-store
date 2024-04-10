import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import React from 'react';
import style from '../../../Screens/CartScreen/FavScreen/stylesheet';
import {Swipeable} from 'react-native-gesture-handler';

const FavScreenFlatlist = ({
  item,
  isItemInReduxCart,
  addTocart,
  renderRightActions
}) => {
  return (
    <Swipeable
    renderRightActions={(progress, dragX) =>
      renderRightActions(item, progress, dragX)
    }
    overshootRight={false}>
      <View>
        <View style={style.itemrow}>
          <View style={style.imageview}>
            <Image style={style.imageitem} source={item.image} />
          </View>
          <View style={style.itemtxtview}>
            <Text style={style.txttype}>{item.type}</Text>
            <Text style={style.txtprice}>{item.price}</Text>
          </View>
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
    </Swipeable>
  );
};

export default FavScreenFlatlist;

const styles = StyleSheet.create({});
