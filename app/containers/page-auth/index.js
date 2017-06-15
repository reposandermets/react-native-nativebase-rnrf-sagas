
import React, { Component } from 'react';
import {
  Container, Item, Input, Header,
  Body, Content, Title, Button, Text
} from 'native-base';
import { Field, reduxForm } from 'redux-form';

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

class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    let hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (<Item error={hasError}>
      <Input {...input} />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>)
  }
  render() {
    const { handleSubmit, reset } = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Redux Form</Title>
          </Body>
        </Header>
        <Content padder>
          <Field name="email" component={this.renderInput} />
          <Field name="name" component={this.renderInput} />
          <Button block primary onPress={reset}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default reduxForm({
  form: 'test',
  validate
})(AuthForm);
