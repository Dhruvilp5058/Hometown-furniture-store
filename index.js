/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Navigation/StackNavigation/rootNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
