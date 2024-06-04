import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabnavigation from './tabnavigation'
import DetailScreen from '../screens/DetailScreen/detailScreen'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../../src/Redux/Store/store'
import Address from '../screens/AddressScreen/address'
import Showaddress from '../screens/AddressScreen/showaddress'
import SearchScreen from '../screens/SearchScreen/searchScreen'
import BuyNowScreen from '../screens/BuyNowscreen/buyNowScreen'


const Navigationlearning = () => {
  const Stack = createNativeStackNavigator()

  return (

    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}> 
      <Stack.Screen name='TabScreen' component={Tabnavigation} />
      <Stack.Screen name='detail' component={DetailScreen} />
      <Stack.Screen name='address' component={Address} />
      <Stack.Screen name='addressview' component={Showaddress} />
      <Stack.Screen name='search' component={SearchScreen} />
      <Stack.Screen name='buynow' component={BuyNowScreen} />
    </Stack.Navigator>

  )
}

export default Navigationlearning