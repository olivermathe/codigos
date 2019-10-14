class LicensePlate {

    constructor(code) {
        this.code = code;
    }

    get code() {
        return this._code;
    }

    set code(code) {

        if(!code)
            throw new Error('Code is required.');

        const plateRegex = /[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{2}/;

        if(!plateRegex.test(code))
            throw new Error('Code formar is invalid.');

        this._code = code;

    }

}

module.exports = LicensePlate;