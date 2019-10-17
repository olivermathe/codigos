const Transaction = require('./Transaction');

class TransactionParking extends Transaction {

    constructor(tollPassageDate, licensePlate, value, sla) {
        super(licensePlate, value, sla)
        this.tollPassageDate = tollPassageDate;
    }

    get tollPassageDate() {
        return this._tollPassageDate;
    }

    set tollPassageDate(tollPassageDate) {

        if(!tollPassageDate)
            throw new Error('Toll passage date is required.');

        if(!(tollPassageDate instanceof Date) || isNaN(tollPassageDate.getTime()))
            throw new Error('Toll passage date is invalid.');

        this._tollPassageDate = tollPassageDate;

    }

    isValidSLA(history) {
        return super.isValidSLA(history, this.tollPassageDate);
    }

}

module.exports = TransactionParking;