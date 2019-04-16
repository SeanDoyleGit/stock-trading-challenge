
class User {
    constructor() {
        this.balance = 0;
        this.shares = [];
    }

    deposit(amount) {
        if(isNaN(amount)) { return; }
        this.balance += amount;
        this.balance = parseFloat(this.balance.toFixed(2));
    }

    withdraw(amount) {
        if(isNaN(amount)) { return; }
        this.balance -= amount;

        if(this.balance < 0) {
            this.balance = 0;
        }
        this.balance = parseFloat(this.balance.toFixed(2));
    }

    purchaseShares(shares) {
        if(shares.amount * shares.price > this.balance) {
            return;
        } 
        
        let currentShares = this.shares.find(share => share.symbol === shares.symbol);
        if(currentShares) {
            currentShares.amount += shares.amount;
            currentShares.price = shares.price;
        } else {
            this.shares.push(shares);
        }

        this.balance -= shares.amount * shares.price;
        this.balance = parseFloat(this.balance.toFixed(2));

        if(this.balance < 0) {
            this.balance = 0;
        }
    }

    sellShares(shares) {
        let currentShares = this.shares.find(share => share.symbol === shares.symbol);
        if(currentShares && shares.amount >= currentShares.amount) {
            this.balance += shares.amount * shares.price;
            this.shares.splice(this.shares.findIndex(share => share.symbol === shares.symbol), 1);
        } else if(currentShares) {
            this.balance += shares.amount * shares.price;
            currentShares.amount -= shares.amount;
        }

        this.balance = parseFloat(this.balance.toFixed(2));
    }
}

module.exports.User = User;