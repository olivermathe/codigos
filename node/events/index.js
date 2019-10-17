const EventHandler = require('./EventHandler')
const PassageIdentified = require('./PassageIdentifiedEvent')
const OutputIdentified = require('./OutputIdentifiedEvent')

const dependencies = {
    snsService: {
        publish: (message, topic) => console.log(topic)
    },
    config: {
        AWS_TOPIC_PASSAGE_IDENTIFIED: 'AWS_TOPIC_PASSAGE_IDENTIFIED',
        AWS_TOPIC_OUTPUT_IDENTIFIED: 'AWS_TOPIC_OUTPUT_IDENTIFIED',
    },
    uuid: () => 'hash-hash-hash-hash'
}

const transactionToll = {
    passageDate: new Date(),
    receivedDate: new Date()
}

const transactionParking = {
    entranceDate: new Date(),
    exitDate: new Date(),
    receivedDate: new Date()
}

const history = {
    licensePlateCode: 'AAA9A99'
}

const eventHandler = new EventHandler(dependencies)

eventHandler
    .handle(new PassageIdentified(transactionToll, history))
    .handle(new OutputIdentified(transactionParking, history))
    .dispatch()