import React from 'react';
import {
    shallow, // renders ONLY a single component (not its children)
    // mount, // full DOM rendering (it requires a full DOM API through a (headless) browser)
    // render // renders React components to a static html
} from 'enzyme';
import Card from '../components/Card';

it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});
