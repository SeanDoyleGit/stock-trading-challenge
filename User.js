
class User {
    constructor() {
        this.balance = 0;
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
}

module.exports.User = User;