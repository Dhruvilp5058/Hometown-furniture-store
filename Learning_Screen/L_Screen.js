import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Higherhoc from './Higherhoc'
import Child from './Child'
const Stack = createNativeStackNavigator()
const L_Screen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={Higherhoc} name='Home'/>
        <Stack.Screen component={Child} name='Whatssapp' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default L_Screen