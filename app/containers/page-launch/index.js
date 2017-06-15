import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Launch } from '../../components/launch';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Launch);

