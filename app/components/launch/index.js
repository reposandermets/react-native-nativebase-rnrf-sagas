import React, { Component, PropTypes } from 'react';
import {
  Container, Content, Text, Header, Left,
  Right, Body, Title, Button
} from 'native-base';

export const Launch = props => {
  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>Launch</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <Button onPress={() => alert('Hello')}>
          <Text>Hello</Text>
        </Button>
      </Content>
    </Container>
  );
};
