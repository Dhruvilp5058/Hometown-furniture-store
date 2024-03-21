import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import stylesheet from './Stylesheet'

const Higherhoc = () => {
  const [input, setInput] = useState('')
  const [visable, setVisable] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handlePress = () => {
   
  setVisable(true)
  setButtonDisabled(true)
  }

  return (
    <View style={stylesheet.main}>
      <View style={stylesheet.blueview}></View>
      <View style={stylesheet.secondview}>
        <TextInput
          placeholder='Type something...'
          placeholderTextColor={'black'}
          style={stylesheet.txtinput}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity style={stylesheet.btn} onPress={handlePress} disabled={buttonDisabled} >
          <Text style={stylesheet.btntxt}>Press</Text>
        </TouchableOpacity>
      </View>
    { visable &&(  <View>
        <Text style={{color:'black',fontSize:30}}>{input}</Text> 
      </View>)}
    </View>
  )
}

export default Higherhoc
