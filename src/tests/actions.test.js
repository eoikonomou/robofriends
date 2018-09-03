import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "../constants";
import * as actions from '../actions';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

describe('setSearchField', () => {
    it('should create an action to search robots', () => {
        const text = 'test';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
});

describe('requestRobots', () => {
    const store = mockStore();
    it('handles requesting robots API', () => {
        store.dispatch(actions.requestRobots());
        let action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        };
        expect(action[0]).toEqual(expectedAction);
    });
    it('handles successful robots request', () => {
        store.dispatch(actions.requestRobots()).then(data => {
            let action = store.getActions();
            expect(action[0]).toEqual({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
        }).catch(e => {
            const action = store.getActions();
            expect(action[0]).toEqual({ type: REQUEST_ROBOTS_FAILED, payload: e });
        });
    });
});
