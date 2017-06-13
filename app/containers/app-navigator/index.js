import React, { Component } from "react";

import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { createSelector, createStructuredSelector } from 'reselect';
import LaunchPage from '../page-launch';

const RouterWithRedux = connect()(Router);

export class AppNavigator extends Component {

  render() {
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="LaunchPage" component={LaunchPage} hideNavBar initial />
        </Scene>
      </RouterWithRedux>
    );
  }

}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

