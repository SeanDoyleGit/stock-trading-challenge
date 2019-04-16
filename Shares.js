const leven = require('leven');

class Shares {
    constructor() {
        this._shares = [];
    }

    setShares(shares) {
        this._shares = shares;
    }

    searchShares(searchTerm, amount) {

        if(!amount) { amount = 10; }
        const results = this._shares.filter(share => {
            let order = share.symbol.toLowerCase().indexOf(searchTerm.toLowerCase());
            // if(order < 0) {
            //     order = share.name.toLowerCase().indexOf(searchTerm.toLowerCase()) + 1000;
            // }
            
            share.order = order;
            return order >= 0;
        });

        results.sort((a, b) => (a.order - b.order) === 0 ? a.symbol.localeCompare(b.symbol) : (a.order - b.order));
        return results.slice(0, amount);
    }
}

module.exports.Shares = Shares;