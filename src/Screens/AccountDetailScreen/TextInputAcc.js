import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import style from './styleSheet'
import { horizontalScale, moderateScale, verticalScale } from '../Metrics'

const TextInputAcc = ({label,initialValue,onChangeText,keyboardType,maxLength,editable,style}) => {
   
  return (
    <View>
    <Text style={lablestye.txt}>{label}</Text>
      <TextInput
      style={style}
      value={initialValue}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      maxLength={maxLength}
      editable={editable}
      selectTextOnFocus={editable}
      />
    </View>
  )
}
const lablestye = StyleSheet.create({
  txt:{
    fontSize: moderateScale(15),
    color: 'grey',
    fontWeight: '400',
  }
})


export default TextInputAcc