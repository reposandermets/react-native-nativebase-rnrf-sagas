
import React, { Component } from 'react';
import {
  Container, Item, Input, Header,
  Body, Content, Title, Button, Text
} from 'native-base';
import { Field, reduxForm } from 'redux-form';
import {
  getMoviesFromFbApi, getAuth, postAuth
} from '../../api/auth';

const validate = values => {

  const error = {};
  error.email = '';
  error.name = '';
  let ema = values.email;
  let nm = values.name;
  if (values.email === undefined) {
    ema = '';
  }
  if (values.name === undefined) {
    nm = '';
  }
  if (ema.length < 8 && ema !== '') {
    error.email = 'too short';
  }
  if (!ema.includes('@') && ema !== '') {
    error.email = '@ not included';
  }
  if (nm.length > 8) {
    error.name = 'max 8 characters';
  }
  return error;
};

const AuthForm = props => {

  const { handleSubmit, reset } = props;

  const renderInput = ({ input, label, type, meta: { touched, error, warning } }) => {
    let hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (<Item error={hasError}>
      <Input {...input} />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>)
  };

  const submit = valuesObj => {
    console.log('submitting form', valuesObj);
    postAuth(valuesObj)
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <Container>
      <Header>
        <Body>
          <Title> Login </Title>
        </Body>
      </Header>
      <Content padder>

        <Field name="email" component={renderInput} />
        <Field name="name" component={renderInput} />

        <Button block primary onPress={handleSubmit(submit)}>
          <Text>Submit</Text>
        </Button>

        <Button block primary onPress={reset}>
          <Text>Reset</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default reduxForm({
  form: 'test',
  validate
})(AuthForm);
