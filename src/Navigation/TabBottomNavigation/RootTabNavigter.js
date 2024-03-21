import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as TabBottomNavigation from '../../Navigation/TabBottomNavigation/index';
import { Gear, House, User,ShoppingCart } from 'phosphor-react-native';


const Tab = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    
      <Tab.Navigator
    
        screenOptions={{   tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        showLabel: false,
          headerShown:false,tabBarStyle:{height:60,borderTopLeftRadius:15,borderTopRightRadius:15}}}
      >
        <Tab.Screen
          name="Home"
          component={TabBottomNavigation.homeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <House
                name={focused ? 'home' : 'home-outline'}
                size={46}
                color={color}
               
              />
              
            ),
            tabBarActiveTintColor:'rgb(0, 172, 255)'
          }}
        />
   
         <Tab.Screen
          name="Cart"
          component={TabBottomNavigation.MainCartScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <ShoppingCart
                name={focused ? 'settings' : 'settings-outline'}
                size={46}
                color={color}
              />
            ),
            tabBarActiveTintColor:'rgb(0, 172, 255)'
          }}
        />
             <Tab.Screen
          name="Profile"
          component={TabBottomNavigation.ProfileScreen}
          options={{
          
            tabBarIcon: ({ focused, color, size }) => (
              <User
                name={focused ? 'person' : 'person-outline'}
                size={46}
                color={color}
              />
            ),
            tabBarActiveTintColor:'rgb(0, 172, 255)'
          }}
        />
      
      </Tab.Navigator>
   
  );
}
