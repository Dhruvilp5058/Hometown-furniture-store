import React, {createContext, useState} from 'react';
import * as Screens from '../../Screens/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DataProvider} from '../../Screens/DataProvider/DataProvider';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={Screens.SplashScreen} />
          <Stack.Screen name="Login" component={Screens.LoginScreen} />
          <Stack.Screen
            name="Verification"
            component={Screens.verificationScreen}
          />
          <Stack.Screen name="HomeScreen" component={Screens.TabNavigator} />
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

        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;
