import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CartScreen from './CartScreen/CartScreen';
import FavScreen from './FavScreen/FavScreen';
import {useFocusEffect} from '@react-navigation/native';
import { Heart, ShoppingCartSimple } from 'phosphor-react-native';
import Colors from '../../../assets/Colour/colour';

const Tab = createMaterialTopTabNavigator();
const MainCartScreen = () => {
  const [Focus, setFocus] = useState(false);

  useFocusEffect(
    useCallback(() => {
      colourchange();
    }, []),
  );
  const colourchange = () => {
    setFocus(!Focus);
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.primarycolour,
          borderBottomLeftRadius: 11,
          borderBottomRightRadius: 11,
          paddingBottom:25
        },
        
        tabBarIndicatorStyle:{
          opacity:0
        },
        swipeEnabled:false,
        tabBarShowLabel:false
        
      }}
      >
      <Tab.Screen
        name="MyCart"
        component={CartScreen}
        options={{tabBarActiveTintColor:Colors.backgroundScreen,
        tabBarIcon: ({ focused, color, size }) => (
          <ShoppingCartSimple 
            weight='fill'
            size={40}
            color={color}
           
          />
          
        ),
        
      }}
      />
      <Tab.Screen
        name="FavoriteList"
        component={FavScreen}
        options={{tabBarActiveTintColor: Colors.backgroundScreen,
        tabBarIcon: ({ focused, color, size }) => (
          <Heart 
            weight='fill'
            size={40}
            color={color}
           
          />
          
        ),
        tabBarShowLabel:false
      }}
        
      />
    </Tab.Navigator>
  );
};

export default MainCartScreen;
