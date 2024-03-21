import React, { useState } from 'react';
import { TextInput, Text, Animated } from 'react-native';
import styleSheet from '../../Screens/LoginScreen/styleSheet';

const Textinputlogin = ({ label, value, onChangeText, props }) => {
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
    if (!value) { // Check if input is empty
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
            color: isFocused ? 'rgb(0, 172, 255)' : 'grey',
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
        style={[
          { borderColor: isFocused ? 'rgb(0, 172, 255)' : 'black' },
          styleSheet.txtinputemail,
        ]}
        {...props}
      />
       
    </>
  );
};

export default Textinputlogin;
