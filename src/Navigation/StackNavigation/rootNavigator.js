import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../../Redux/Store/store';
import * as Screens from '../../Screens/index';
import RootTabNavigator from '../TabBottomNavigation/RootTabNavigter';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={Screens.SplashScreen} />
      <Stack.Screen name="Login" component={Screens.LoginScreen} />
      <Stack.Screen
        name="Verification"
        component={Screens.verificationScreen}
      />
      <Stack.Screen name="HomeScreen" component={RootTabNavigator} />
      <Stack.Screen name="DetailScreen" component={Screens.DetailScreen} />
      <Stack.Screen
        name="ProfileScreen"
        component={Screens.ProfileScreen}
      />
      <Stack.Screen name="BuyNowScreen" component={Screens.BuyNowScreen} />
      <Stack.Screen
        name="AccountDetail"
        component={Screens.AccountDetailScreen}
      />
      <Stack.Screen
        name="Notification"
        component={Screens.NotificationScreen}
      />
      <Stack.Screen
        name="SettingScreen"
        component={Screens.SettingScreen}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={Screens.PaymentScreen}
      />
      <Stack.Screen name="MyOrder" component={Screens.MyOrder} />
      <Stack.Screen name="OrderDetail" component={Screens.OrderDetail} />
      <Stack.Screen name="chatboat" component={Screens.ChatBoats} />
      <Stack.Screen name="image" component={Screens.ImageScren} />


    </Stack.Navigator>
  );
}

export default RootNavigator;
