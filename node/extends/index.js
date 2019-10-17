class Entity {

    constructor() {
        this.id = '313'
    }

    toJSON() {

        const propertyNames = Object.getOwnPropertyNames(this);

        return propertyNames.reduce((body, field) => {

            if (this[field] instanceof Entity)
                body[field] = this[field].toJSON()

            else if (this[field] instanceof Date)
                body[field] = this[field].toISOString()

            else
                body[field] = this[field]

            return body;

        }, {});

    }

}

class Test extends Entity {

    constructor(field, child) {
        super()
        this.child = child
        this.field = field
    }

    validate(){
        
    }

}

class OtherTest extends Test {

    constructor(field, child, test){
        super(field, child)
        this.test = test
    }

}

const test = new OtherTest('ola', new Date(), new Test('ola', new Date()))

console.log(test.toJSON())