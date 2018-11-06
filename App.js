/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import store from './src2/redux/store';

// import Main from "./src/Main.js"
import App from './src2/App.js';
// import App from './src/components/App.js';

export default class MyProjectReactNative extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProjectReactNative);
