import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import Colors from '../../../../assets/Colour/colour';
import { horizontalScale, moderateScale, verticalScale } from '../../../Screens/Metrics';



const TextInputAdd = ({placeholder,props,onChangeText,value,error}) => {
  return (
    <>
 
      <TextInput style={style.txtinput}
      placeholder={placeholder}
      placeholderTextColor={'black'}
      value={value}
      onChangeText={onChangeText}
      
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
    marginTop: verticalScale(20),
    color:Colors.blackcolour,
    paddingVertical:verticalScale(12)
   
  },
  txt: {
    fontSize: moderateScale(20),
    color: 'black',
  },
  txterror:{
    color:'red',
    marginLeft:horizontalScale(32)
  }
});
export default TextInputAdd;
