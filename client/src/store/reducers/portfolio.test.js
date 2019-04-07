import * as actionTypes from '../actions/actionTypes';
import portfolioReducer from './portfolio';

describe('portfolio reducer', () => {
    let defaultState;

    beforeEach(() => {
        defaultState = {
            balance: 0
        };
    });

    it('should return the default state when state is undefined', () => {
        const result = portfolioReducer(undefined, { type: 'not an action' });
        expect(result).toEqual(defaultState);
    });

    it('should return the current state when the action type does not match', () => {
        const result = portfolioReducer(defaultState, { type: 'not an action' });
        expect(result).toEqual(defaultState);
    });

    it('should return the updated balance when action type is SET_BALANCE', () => {
        const result = portfolioReducer(defaultState, { type: actionTypes.SET_BALANCE, balance: 25 });
        expect(result).toEqual({ ...defaultState, balance: 25 });
    });
});