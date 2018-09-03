import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from '../components/CounterButton';

it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('expect to raise state counter on button click', () => {
    const wrapper = shallow(<CounterButton />);
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
});
