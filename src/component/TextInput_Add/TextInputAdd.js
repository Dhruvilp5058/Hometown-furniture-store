import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Screens/Metrics';

const TextInputAdd = ({placeholder,props,onChangeText,value}) => {
  return (
    <>
 
      <TextInput style={style.txtinput}
      placeholder={placeholder}
      placeholderTextColor={'black'}
      value={value}
      onChangeText={onChangeText}
      {...props}
      
      />
    </>
  );
};
const style = StyleSheet.create({
  txtinput: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(25),
    paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(20),
    marginTop: verticalScale(20),
   
  },
  txt: {
    fontSize: moderateScale(20),
    color: 'black',
  },
});
export default TextInputAdd;
