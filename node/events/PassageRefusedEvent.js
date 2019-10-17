const PassageIdentifiedEvent = require('./PassageIdentifiedEvent')

class PassageRefusedEvent extends PassageIdentifiedEvent {

    constructor(transaction, history) {
        super('passageRefused')
        this.transaction = transaction
        this.history = history
    }

    setMessageMetaFields(config, uuid, correlationId) {
        super.setMessageMetaFields(config.AWS_TOPIC_PASSAGE_IDENTIFIED, uuid(), correlationId)
    }

}

module.exports = PassageRefusedEvent