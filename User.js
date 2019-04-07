
class User {
    constructor() {
        this.balance = 0;
        this.shares = [];
    }

    deposit(amount) {
        if(isNaN(amount)) { return; }
        this.balance += amount;
    }

    withdraw(amount) {
        if(isNaN(amount)) { return; }
        this.balance -= amount;

        if(this.balance < 0) {
            this.balance = 0;
        }
    }

    purchaseShares(shares) {
        let currentShares = this.shares.find(share => share.symbol === shares.symbol);
        if(currentShares) {
            currentShares.amount += shares.amount;
            currentShares.value += shares.value;
        } else {
            this.shares.push(shares);
        }

        this.balance -= shares.amount * shares.value;

        if(this.balance < 0) {
            this.balance = 0;
        }
    }
}

module.exports.User = User;