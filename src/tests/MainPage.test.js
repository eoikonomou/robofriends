import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../components/MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />);
});

it('expect MainPage component to render', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'Sedrick',
            email: 'sed@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    };
    let wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'Sedrick',
            email: 'sed@gmail.com'
        }],
        searchField: 'sed',
        isPending: false
    };
    let wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual(mockProps2.robots);
});

it('shows loader when request is pending', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: true
    };
    let wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.contains(<h1 className="f1 tc">Loading...</h1>)).toBe(true);
});

it('error should be thrown if error is passed in props', () => {
    const mockProps4 = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
        error: 'mock error'
    };
    try {
        shallow(<MainPage {...mockProps4} />);
    } catch (e) {
        expect(e.message).toBe(mockProps4.error);
    }
});
