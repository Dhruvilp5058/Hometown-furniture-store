import { View, Text, Image, FlatList, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../Redux/Slice/counterSlice'

const SettingScreen = () => {
  const count = useSelector(state => state.counter.value)
  console.log(count);
  const dispatch = useDispatch()
  const deleteItemHandler = (itemId) => {
    dispatch(removeItem(itemId)); 
    console.log(count);
  }
  return (
    <View>
      <FlatList
        data={count}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{margin:20,borderWidth:1}}>
            <Image
              source={item.image}
              style={{ height: 100, width: 100 }}
            />
            <Button title='delete' onPress={() => deleteItemHandler(item.id)} />
          </View>
        )}
      />
    </View>
  )
}

export default SettingScreen