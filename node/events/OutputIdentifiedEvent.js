const Event = require('./Event')

class OutputIdentifiedEvent extends Event {

    constructor(transaction, history) {
        super('outputIdentified')
        this.transaction = transaction
        this.history = history
    }

    get message() {

        return {
            meta: this.meta,
            output: {
                entranceDate: this.transaction.entranceDate.toISOString(),
                exitDate: this.transaction.exitDate.toISOString(),
                receivedDate: this.transaction.receivedDate.toISOString()
            },
            vehicle: {
                licensePlateCode: this.history.licensePlateCode
            }
        }

    }

    setMessageMetaFields(config, uuid, correlationId) {
        super.setMessageMetaFields(config.AWS_TOPIC_OUTPUT_IDENTIFIED, uuid(), correlationId)
    }

}

module.exports = OutputIdentifiedEvent