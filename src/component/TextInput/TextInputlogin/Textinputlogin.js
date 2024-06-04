import React, { useEffect, useRef, useState } from 'react';
import { TextInput, Text, Animated } from 'react-native';
import styleSheet from '../../../Screens/LoginScreen/styleSheet';
import Colors from '../../../../assets/Colour/colour';

const Textinputlogin = ({ label, value, onChangeText, props ,onKeyPress}) => {
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = new Animated.Value(value || isFocused ? -10 : 16);

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
            color: isFocused ? Colors.primarycolour: Colors.offerprice,
            top: labelPosition,
            fontSize: isFocused || value ? 12 : 16, 
          },
          styleSheet.txtlabel,
        ]}>
        {label}
      </Animated.Text>
      <TextInput
        onFocus={animationFocus}
        onBlur={animationBlur}
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={props.onSubmitEditing}
        onKeyPress={onKeyPress}
        style={[
          { borderColor: isFocused ? Colors.primarycolour :Colors.offerprice },
          styleSheet.txtinputemail,
        ]}
        {...props}
      />
       
    </>
  );
};

export default Textinputlogin;
