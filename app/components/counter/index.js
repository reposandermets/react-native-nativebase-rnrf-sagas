import React, { Component, PropTypes } from 'react';
import {
  Container, Content, Text, Header, Left,
  Right, Body, Title, Button
} from 'native-base';

export const Counter = props => {

  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>Counter {props.count}</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <Button onPress={() => props.increment()}>
          <Text>Increment</Text>
        </Button>
        <Button onPress={() => props.decrement()}>
          <Text>Decrement</Text>
        </Button>
        <Button onPress={() => props.zero()}>
          <Text>Zero</Text>
        </Button>
        <Button onPress={() => props.multiplyBy(10)}>
          <Text>multiplyBy 10</Text>
        </Button>
        <Button onPress={() => props.incrementAsync()}>
          <Text>incrementAsync (Saga)</Text>
        </Button>
      </Content>
    </Container>
  );

};
