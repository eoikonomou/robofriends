import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../components/ErrorBoundary';

let wrapper;
const mockProps = {
    children: <h1>Mock Child</h1>
};
beforeEach(() => {
    wrapper = shallow(<ErrorBoundary {...mockProps} />);
});

it('expect to render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('expect to render children if no error', () => {
    expect(wrapper.contains(mockProps.children)).toBe(true);
});

it('expect to change state if an error is caught', () => {
    wrapper.instance().componentDidCatch();
    expect(wrapper.state().hasError).toBe(true);
});
