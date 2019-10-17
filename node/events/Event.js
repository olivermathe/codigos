class Event {

    constructor(name) {
        this.name = name
        this.id = null
        this.correlationId = null
        this.topic = null
    }

    get meta() {

        return {
            id: this.id,
            correlationId: this.correlationId,
            timestamp: new Date().toISOString(),
            name: this.name
        }

    }

    get message() {

        return {
            meta: this.meta,
        }

    }

    setMessageMetaFields(topic, uuid, correlationId) {
        this.id = uuid
        this.correlationId = correlationId,
        this.topic = topic
    }

}

module.exports = Event