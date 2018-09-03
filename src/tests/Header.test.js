import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

it('expect Header component to render correctly', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
});

it('expect shouldComponentUpdate to always return false', () => {
    const shouldUpdate = shallow(<Header />).instance().shouldComponentUpdate({}, {});
    expect(shouldUpdate).toBe(false);
});
