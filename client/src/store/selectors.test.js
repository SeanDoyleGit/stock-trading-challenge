import * as selectors from './selectors';

describe('selectors', () => {
    let state;
    
    beforeEach(() => {
        
        state = {
            portfolio: { 
                balance: 20
            }
        };
    });

    describe('getBalance', () => {
        it('should return balance', () => {
            expect(selectors.getBalance(state)).toEqual(state.portfolio.balance);
        });
    });
});