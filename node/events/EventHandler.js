class EventHandler {

    constructor({ snsService, config, uuid }) {
        this.snsService = snsService
        this.config = config
        this.uuid = uuid
        this.correlationId = null
        this.events = []
    }

    handle(event) {
        event.setMessageMetaFields(this.config, this.uuid, this.correlationId)
        this.events.push(event)
        return this
    }

    dispatch() {
        while(this.events.length) {
            const event = this.events.shift()
            this.snsService.publish(JSON.stringify(event.message), event.topic)
        }

    }

}

module.exports = EventHandler