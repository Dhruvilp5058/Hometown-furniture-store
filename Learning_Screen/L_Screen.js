import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Out from './Out'
import Third from './Third'
const Stack = createNativeStackNavigator()
const L_Screen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Out' component={Out} />
        <Stack.Screen name='Third' component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default L_Screen