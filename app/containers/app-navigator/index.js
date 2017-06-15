import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { createSelector, createStructuredSelector } from 'reselect';
import LaunchPage from '../page-launch';
import AuthPage from '../page-auth';

//not to connect router at all? - https://github.com/aksonov/react-native-router-flux/blob/master/docs/REDUX_FLUX.md#about-key-xxx-is-already-defined
const RouterWithRedux = connect()(Router);

/*
export class AppNavigator extends Component {
  render() {
    return (
      <RouterWithRedux>
        <Scene key='root'>
          <Scene key='LaunchPage' component={LaunchPage} hideNavBar />
          <Scene key='AuthPage' component={AuthPage} hideNavBar initial />
        </Scene>
      </RouterWithRedux>
    );
  }
}
*/

const AppNavigator = () => {
  return (
    <RouterWithRedux>
      <Scene key='root'>
        <Scene key='LaunchPage' component={LaunchPage} hideNavBar />
        <Scene key='AuthPage' component={AuthPage} hideNavBar initial />
      </Scene>
    </RouterWithRedux>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

