import React, { Component } from "react";
import { Provider } from "react-redux";
import {
  StyleProvider, Container,
  Content, Spinner
} from 'native-base';
import { StatusBar } from 'react-native';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import AppNavigator from "./containers/app-navigator";
import getStore from "./store";

export class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false
    };
    //const theStore = getStore(() => this.setState({ isLoading: false }));
    this.state.store = getStore();
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider store={this.state.store}>
          <AppNavigator />
        </Provider>
      </StyleProvider>
    );
  }

}
