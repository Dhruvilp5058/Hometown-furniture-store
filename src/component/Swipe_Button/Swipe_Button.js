import {View, Text} from 'react-native';
import React, {useState} from 'react';
import SwipeButton from 'rn-swipe-button';
import {ShoppingCart} from 'phosphor-react-native';

const Swipe_Button = ({onSwipeSuccess, onSwipeStart}) => {
  return (
    <View>
      <SwipeButton
        containerStyles={{borderRadius: 30, marginHorizontal: 20}}
        height={55}
        onSwipeSuccess={onSwipeSuccess}
        onSwipeStart={onSwipeStart}
        railBackgroundColor="blue"
        railStyles={{borderRadius: 30}}
        thumbIconBackgroundColor="blue"
        thumbIconComponent={() => <ShoppingCart color="white" />}
        thumbIconStyles={{borderRadius: 30, backgroundColor: 'blue'}}
        thumbIconWidth={50}
        title="Add to Cart"
        titleColor="white"
      />
    </View>
  );
};

export default Swipe_Button;
