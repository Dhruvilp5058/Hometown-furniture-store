// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import { Provider } from 'react-redux';
// import { DataProvider } from '../Hometown-furniture-store/src/Screens/DataProvider/DataProvider';
// import * as Screens from '../Hometown-furniture-store/src/Screens/index';
// import { store } from './src/Redux/Store/store';
// import RootTabNavigator from './src/Navigation/TabBottomNavigation/RootTabNavigter';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <Provider store={store}>
//     <DataProvider>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="SplashScreen"
//           screenOptions={{headerShown: false}}>
//           <Stack.Screen name="SplashScreen" component={Screens.SplashScreen} />
//           <Stack.Screen name="Login" component={Screens.LoginScreen} />
//           <Stack.Screen
//             name="Verification"
//             component={Screens.verificationScreen}
//           />
//           <Stack.Screen name="HomeScreen" component={RootTabNavigator} />
//           <Stack.Screen name="DetailScreen" component={Screens.DetailScreen} />
//           <Stack.Screen
//             name="ProfileScreen"
//             component={Screens.ProfileScreen}
//           />
//           <Stack.Screen name="BuyNowScreen" component={Screens.BuyNowScreen} />
//           <Stack.Screen
//             name="AccountDetail"
//             component={Screens.AccountDetailScreen}
//           />
//           <Stack.Screen
//             name="Notification"
//             component={Screens.NotificationScreen}
//           />
//           <Stack.Screen
//             name="SettingScreen"
//             component={Screens.SettingScreen}
//           />
//           <Stack.Screen
//             name="PaymentScreen"
//             component={Screens.PaymentScreen}
//           />
//           <Stack.Screen name="MyOrder" component={Screens.MyOrder} />
//           <Stack.Screen name="OrderDetail" component={Screens.OrderDetail} />

//         </Stack.Navigator>
//       </NavigationContainer>
//     </DataProvider>
//      </Provider>
//   );
// }

// export default App;
