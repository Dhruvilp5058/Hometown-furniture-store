import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import style from './styleSheet'

const TextInputAcc = ({label,initialValue,onChangeText,keyboardType,maxLength,editable}) => {
   
  return (
    <View>
    <Text style={style.txtlable}>{label}</Text>
      <TextInput
      style={style.txtinput}
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

export default TextInputAcc