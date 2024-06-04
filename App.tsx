import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './src/Navigation/StackNavigation/rootNavigator';
import { persistor, store } from './src/Redux/Store/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer> 
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
