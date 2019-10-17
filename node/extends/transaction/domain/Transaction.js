const Sla = require('../valueObjects/Sla');
const LicensePlate = require('../valueObjects/LicensePlate');

class Transaction {

    constructor(licensePlate, value, sla) {
        this.licensePlate = licensePlate;
        this.value = value;
        this.sla = sla;
    }

    get licensePlate() {
        return this._licensePlate;
    }

    set licensePlate(licensePlate) {

        if (!licensePlate)
            throw new Error('License plate is required.');

        if (!(licensePlate instanceof LicensePlate))
            throw new Error('License plate is invalid.');

        this._licensePlate = licensePlate;

    }

    get value() {
        return this._value;
    }

    set value(value) {

        if(!value)
            throw new Error('Value is required.');

        this._value = value;
        
    }

    get sla() {
        return this._sla;
    }

    set sla(sla) {

        if(!sla)
            throw new Error('SLA is required.');

        if(!(sla instanceof Sla))
            throw new Error('SLA is invalid.');

        this._sla = sla;

    }

    isValidSLA(history, transactionDate) {

        if (history.vehicleStatus.isActive())
            return true;
        
        else if (this.sla.isOutRange(transactionDate, history.createdAt))
            return false;

        return true;

    }

}

module.exports = Transaction;