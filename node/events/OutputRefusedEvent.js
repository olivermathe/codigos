const OutputIdentifiedEvent = require('./PassageIdentifiedEvent')

class OutputRefusedEvent extends OutputIdentifiedEvent {

    constructor(transaction, history) {
        super('outputRefused')
        this.transaction = transaction
        this.history = history
    }

    setMessageMetaFields(config, uuid, correlationId) {
        super.setMessageMetaFields(config.AWS_TOPIC_OUTPUT_REFUSED, uuid(), correlationId)
    }

}

module.exports = OutputRefusedEvent