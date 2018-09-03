import React from 'react';
import { shallow } from 'enzyme';
import Scroll from '../components/Scroll';

const mockProps = {
    children: <h1 key={'mockElement'}>Mock child</h1>
};
let wrapper;
beforeEach(() => {
    wrapper = shallow(<Scroll {...mockProps} />);
});

it('expect Scroll to render properly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('expect passed children to be rendered', () => {
    expect(wrapper.contains(mockProps.children)).toBe(true);
});
