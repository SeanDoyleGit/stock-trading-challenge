

class TransactionHistory {
    constructor() {
        this.history = [];
    }

    addTransaction(transaction) {
        this.history.push(transaction);
    }
}

module.exports.TransactionHistory = TransactionHistory;