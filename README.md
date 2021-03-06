# react-native-nativebase-rnrf-sagas

[![Build Status](https://travis-ci.org/reposandermets/react-native-nativebase-rnrf-sagas.svg?branch=master)](https://travis-ci.org/reposandermets/react-native-nativebase-rnrf-sagas)

## Architecture

This projects tries to follow guidelines from [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate).
## Install

    yarn
    react-native link

## Development run

    react-native run-ios
    react-native run-android

## Packages

React Native  
Nativebase  
react-native-router-flux  
react-redux  
redux-form  
redux-saga  
reselect  

## Misc

### Ideas for Travis

https://github.com/facebook/react-native/blob/master/.travis.yml

### Problems during dev build in local env

```No bundle URL present``` or ```Unable to resolve module...```

    watchman watch-del-all && \
      rm -rf node_modules && yarn && \
      rm -fr $TMPDIR/react-* && \
      npm start -- reset-cache

    react-native link

### Run fake backend

For this to work both device and pc have to bre in the same (W)LAN
    node _fake-backend/server.js

    ifconfig

Add your local LAN IP to app/config/index.js as baseApiRoot

For http to work added to ./ios/RNStarter/Info.plist

    <key>NSAppTransportSecurity</key>
	<dict>
		<!--Include to allow all connections (DANGER)-->
		<key>NSAllowsArbitraryLoads</key>
		<true/>
	</dict>
