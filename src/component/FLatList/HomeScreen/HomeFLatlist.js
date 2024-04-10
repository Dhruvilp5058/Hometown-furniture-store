import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import stylesheet from '../../../Screens/HomeScreen/styleSheet';

const HomeFLatlist = ({navigation, item}) => {
  return (
    <TouchableOpacity
      activeOpacity={2}
      onPress={() => navigation.navigate('DetailScreen', {item: item})}>
      <View style={stylesheet.itemview}>
        <Image source={item.image} style={stylesheet.imageitem} />
        <View style={stylesheet.viewtype}>
          <Text style={stylesheet.txttype}>{item.type}</Text>
          <Text style={stylesheet.txtprice}>{item.price}/-</Text>
        </View>
        <View style={stylesheet.viewprice}>
          <Text style={stylesheet.txtofferprice}>₹79</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeFLatlist;

const styles = StyleSheet.create({});
