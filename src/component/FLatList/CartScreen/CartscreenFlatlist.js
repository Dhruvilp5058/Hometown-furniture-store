import { Minus, Plus } from 'phosphor-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import stylesheet from '../../../Screens/CartScreen/CartScreen/stylesheet';
import { horizontalScale } from '../../../Screens/Metrics';

const CartscreenFlatlist = ({
  renderRightActions,
  item,
  decreaseCount,
  increaseCount,
  navigation
}) => {
  return (
    <Swipeable
      renderRightActions={(progress, dragX) =>
        renderRightActions(item, progress, dragX)
      }
      overshootRight={false}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailScreen', { item: item })}>
        <View style={stylesheet.flatmain}>
          <View style={stylesheet.itemview}>
            <Image style={stylesheet.image} source={item.image} />
            <View style={stylesheet.txtview}>
              <Text style={stylesheet.txttype}>{item.type}</Text>
              <Text style={stylesheet.txtprice}>{item.price}₹</Text>
            </View>
            <View style={stylesheet.btntextview}>
              <Text style={stylesheet.txtswipe}>Swipe to Delete</Text>
              <View style={stylesheet.iconview}>
                <TouchableOpacity onPress={() => decreaseCount(item)}>
                  <Minus
                    size={30}
                    weight="bold"
                    style={{ right: horizontalScale(5) }}
                  />
                </TouchableOpacity>
                <Text style={stylesheet.txtamount}>{item.qty || 1}</Text>
                <TouchableOpacity onPress={() => increaseCount(item)}>
                  <Plus
                    size={30}
                    weight="bold"
                    style={{ left: horizontalScale(5) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
};

export default CartscreenFlatlist;

const styles = StyleSheet.create({});
