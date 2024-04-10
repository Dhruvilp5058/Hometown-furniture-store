import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from './Main';

const Out = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="first" component={Main} />
      <Tab.Screen name="second" component={Secondd} />
    </Tab.Navigator>
  );
};
const Secondd = () => {
  <View>
    <Text>First</Text>
  </View>;
};

export default Out;
