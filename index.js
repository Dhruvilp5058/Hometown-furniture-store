/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './Learning_Screen/navigator/stacknavigation';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }

    // Render the app component on foreground launch
    return (
        <App />
    )
}

// Your main application component defined here
//  r


AppRegistry.registerComponent(appName, () => HeadlessCheck);
