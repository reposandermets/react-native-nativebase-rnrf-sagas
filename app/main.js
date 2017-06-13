import React, { Component } from "react";

import {
  StyleProvider, Container, Content, Text
} from 'native-base';

import getTheme from '../native-base-theme/components';

export class App extends Component {

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Content>
            <Text>Hello</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }

}
