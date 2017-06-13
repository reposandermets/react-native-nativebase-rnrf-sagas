import 'react-native';
import React from 'react';
import { App } from '../../app/main.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <App />
    );
});
