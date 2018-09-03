import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../components/SearchBox';

const mockProps = { searchChange: jest.fn() };
let wrapper;
beforeEach(() => {
    wrapper = shallow(<SearchBox {...mockProps} />);
})
it('expect SearchBox to render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('expect searchChange to be called on input change', () => {
    const inputField = wrapper.find('input');
    inputField.simulate('change');
    inputField.simulate('change');
    expect(mockProps.searchChange.mock.calls.length).toBe(2);
});
