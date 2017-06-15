import 'react-native';
import React from 'react';
import { Counter } from '../../../../app/components/counter';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Counter />
  );
});
