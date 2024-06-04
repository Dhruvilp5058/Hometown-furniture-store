import React, { useState } from 'react';
import {TextInput, View, StyleSheet, Animated} from 'react-native';
import Style from './StyleSheet';
import Colors from '../../../assets/Colour/colour';
import { horizontalScale, moderateScale, verticalScale } from '../Metrics';

const FilterTextInput = ({minPrice, setminPrice, maxPrice, setmaxPrice}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedmax, setIsFocusedmax] = useState(false);

  const labelPosition = new Animated.Value(minPrice || isFocused ? verticalScale(-15) : verticalScale(3));
  const maxlabelPosition = new Animated.Value(maxPrice || isFocusedmax ? verticalScale(-15) : verticalScale(3));

  const animationFocus = () => {
    setIsFocused(true);
    Animated.timing(labelPosition, {
      toValue: -20,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animationBlur = () => {
    setIsFocused(false);
    if (!minPrice) {
      Animated.timing(labelPosition, {
        toValue: 15,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };
  const animationmaxFocus = () => {
    setIsFocusedmax(true);
    Animated.timing(maxlabelPosition, {
      toValue: -20,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animationmaxBlur = () => {
    setIsFocusedmax(false);
    if (!minPrice) {
      Animated.timing(maxlabelPosition, {
        toValue: 15,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };
  return (
    <View style={Style.viewinput}>
      <Animated.Text
        style={[
          {
            top: labelPosition,
          },
          styles.txt
        ]}>
        min
      </Animated.Text>
      <TextInput
        style={Style.inputfilter}
        value={minPrice}
        onChangeText={(text) => setminPrice(text)}
        keyboardType="numeric"
        onFocus={animationFocus}
        onBlur={animationBlur}
      />
        <Animated.Text
        style={[
          {
            top: maxlabelPosition,
          },
          styles.txt
        ]}>
        max
      </Animated.Text>
      <TextInput
        style={Style.inputfilter}
        value={maxPrice}
        onChangeText={(text) => setmaxPrice(text)}
        keyboardType="numeric"
        onFocus={animationmaxFocus}
        onBlur={animationmaxBlur}
      />
    </View>
  );
};

export default FilterTextInput;

const styles = StyleSheet.create({
  txt:{
    fontSize:moderateScale(15),
    fontWeight:'700',
    color:Colors.primarycolour,
    left:horizontalScale(38),
    alignSelf:'center',
    backgroundColor:'white',
    zIndex:1,
    paddingHorizontal:horizontalScale(5),
    borderRadius:moderateScale(5),
    // elevation:1
    
  }
});
