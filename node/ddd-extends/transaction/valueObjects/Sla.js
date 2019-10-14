class Sla {

    constructor(rangeHours) {
        this.rangeHours = rangeHours
    }

    get rangeHours() {
        return this._rangeHours;
    }

    set rangeHours(rangeHours) {

        if(!rangeHours)
            throw new Error('Range hours is required.');

        this._rangeHours = rangeHours;

    }

    isOutRange(transactionDate, vehicleInactivationDate) {

        const dateLimit = new Date(vehicleInactivationDate);

        dateLimit.setHours(vehicleInactivationDate.getHours() + this.rangeHours);

        if (transactionDate > dateLimit)
            return true;

        return false;

    }

}

module.exports = Sla;