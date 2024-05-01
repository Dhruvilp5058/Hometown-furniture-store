import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import TabStackNAvi from './tabStackScreen'
import Profile from '../screens/ProfileScreen/profile'
import CartMAin from '../screens/CartScreen/cartMAin'


const Tabnavigation = () => {
    const Tab = createBottomTabNavigator()
  return (
   <Tab.Navigator screenOptions={{headerShown:false}}>
    <Tab.Screen name='Home' component={TabStackNAvi} options={{tabBarHideOnKeyboard:true}} />
    <Tab.Screen name='cart' component={CartMAin} />
    <Tab.Screen name='profile' component={Profile} />
   </Tab.Navigator>
  )
}

export default Tabnavigation