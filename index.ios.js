import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { App } from './app/main';

export default class RNStarter extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('RNStarter', () => RNStarter);
