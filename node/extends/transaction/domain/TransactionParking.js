const Transaction = require('./Transaction');

class TransactionParking extends Transaction {

    constructor(parkingEntranceDate, parkingExitDate, licensePlate, value, sla) {
        super(licensePlate, value, sla);
        this.parkingEntranceDate = parkingEntranceDate;
        this.parkingExitDate = parkingExitDate;
    }

    get parkingEntranceDate() {
        return this._parkingEntranceDate;
    }

    set parkingEntranceDate(parkingEntranceDate) {

        if(!parkingEntranceDate)
            throw new Error('Parking entrance date is required.');

        if(!(parkingEntranceDate instanceof Date) || isNaN(parkingEntranceDate.getTime()))
            throw new Error('Parking entrance date is invalid.');

        this._parkingEntranceDate = parkingEntranceDate;

    }

    get parkingExitDate() {
        return this._parkingExitDate;
    }

    set parkingExitDate(parkingExitDate) {

        if(!parkingExitDate)
            throw new Error('Parking entrance date is required.');

        if(!(parkingExitDate instanceof Date) || isNaN(parkingExitDate.getTime()))
            throw new Error('Parking entrance date is invalid.');

        this._parkingExitDate = parkingExitDate;

    }

    isValidSLA(history) {
        return super.isValidSLA(history, this.parkingEntranceDate)
    }

}

module.exports = TransactionParking;