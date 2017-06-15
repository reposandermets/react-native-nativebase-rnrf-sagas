import React, { Component } from 'react';
import {
  Container, Content, Text, Header, Left,
  Right, Body, Title, Button
} from 'native-base';
import {
  getMoviesFromFbApi, getAuth, postAuth
} from '../../api/auth';

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
        <Button
          onPress={() => {
            getMoviesFromFbApi()
              .then(r => {
                console.log(r);
              })
              .catch(e => {
                console.log(e);
              });

            getAuth()
              .then(r => {
                console.log(r);
              })
              .catch(e => {
                console.log(e);
              })

            postAuth()
              .then(r => {
                console.log(r);
              })
              .catch(e => {
                console.log(e);
              })

          }}
        >
          <Text>Hello</Text>
        </Button>
      </Content>
    </Container>
  );
};
