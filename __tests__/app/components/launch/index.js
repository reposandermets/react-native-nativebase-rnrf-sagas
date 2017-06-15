import 'react-native';
import React from 'react';
import { Launch } from '../../../../app/components/launch';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Launch />
  );
});
