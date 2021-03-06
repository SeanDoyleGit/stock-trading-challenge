export const getBalance = (state) => state.portfolio.balance;
export const getCurrentShares = (state) => state.portfolio.shares;

export const getSearchValue = (state) => state.shares.searchValue;
export const getShares = (state) => state.shares.shares;

export const getTransactionHistory = (state) => {
    console.log(state);
    return state.transactionHistory.history;
}