const Event = require('./Event')

class PassageIdentifiedEvent extends Event {

    constructor(transaction, history) {
        super('passageIdentified')
        this.transaction = transaction
        this.history = history
    }

    get message() {

        return {
            meta: this.meta,
            passage: {
                passageDate: this.transaction.passageDate.toISOString(),
                receivedDate: this.transaction.receivedDate.toISOString()
            },
            vehicle: {
                licensePlateCode: this.history.licensePlateCode
            }
        }

    }

    setMessageMetaFields(config, uuid, correlationId) {
        super.setMessageMetaFields(config.AWS_TOPIC_PASSAGE_IDENTIFIED, uuid(), correlationId)
    }

}

module.exports = PassageIdentifiedEvent