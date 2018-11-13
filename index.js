import { AppRegistry } from 'react-native';
import RootScene from './src/RootScene';
import * as app from './app.json'
AppRegistry.registerComponent(app.name, () => RootScene);
