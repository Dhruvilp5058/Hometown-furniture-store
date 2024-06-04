import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TextInput } from 'react-native';
import Colors from '../../../../assets/Colour/colour';
import { horizontalScale, moderateScale, verticalScale } from '../../../Screens/Metrics';



const TextInputAdd = ({ placeholder, props, onChangeText, value, error, label }) => {
  const [isFocused, setIsFocused] = useState(false);

  const labelPosition = new Animated.Value(value || isFocused ? verticalScale(8) : verticalScale(35));
  const animationFocus = () => {
    setIsFocused(true);
    Animated.timing(labelPosition, {
      toValue: verticalScale(30),
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animationBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(labelPosition, {
        toValue: 15,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };
  return (
    <>
      <Animated.Text
        style={[
          {
            color: isFocused ? Colors.primarycolour : Colors.offerprice,
            top: labelPosition,


          },
          style.txt
        ]}>
        {label}
      </Animated.Text>
      <TextInput style={style.txtinput}
        placeholder={placeholder}
        placeholderTextColor={'black'}
        value={value}
        onChangeText={onChangeText}
        onFocus={animationFocus}
        onBlur={animationBlur}

        {...props}

      />
      {error ? <Text style={style.txterror}>{error}</Text> : null}
    </>
  );
};
const style = StyleSheet.create({
  txtinput: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(25),
    paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(20),
    // marginTop: verticalScale(20),
    color: Colors.blackcolour,
    paddingVertical: verticalScale(12)

  },
  txt: {
    fontSize: 16,
    backgroundColor: Colors.backgroundScreen,
    zIndex: 1,
    height: verticalScale(20),
    borderRadius: moderateScale(10),
    fontWeight:'700',
    color:Colors.blackcolour,
    alignSelf:'flex-start',
    marginLeft:horizontalScale(40),
    paddingHorizontal:horizontalScale(6)
    // width:horizontalScale(70)
  },
  txterror: {
    color: 'red',
    marginLeft: horizontalScale(32)
  }
});
export default TextInputAdd;
