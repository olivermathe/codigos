class Pai {

    constructor(campo1) {
        this.campo1 = campo1
    }

    set campo1(campo1) {

        if (!campo1)
            throw new Error("Campo1 is required")

        if (!(campo1 instanceof Date) || isNaN(campo1.getTime()))
            throw new Error("Campo1 must be a valid date.")

        this._campo1 = campo1

    }

    get campo1() {
        return this._campo1
    }

    sum(a, b) {
        return a + b;
    }

}

class Filho extends Pai {

    constructor(campo1, campo2) {
        super(campo1)
        this.campo2 = campo2;
    }

    set campo2(campo2) {

        if(!campo2)
            throw new Error("Campo2 required")

        this._campo2 = campo2

    }

    get campo2() {
        return this._campo2
    }

    sum(a) {
        return super.sum(a, this.campo2)
    }

}

const filho = new Filho(new Date(), 2)

console.log(filho.campo1.toISOString())
console.log(filho.sum(3))