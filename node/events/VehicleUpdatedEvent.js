const Event = require('./Event')

class VehicleUpdatedEvent extends Event {

    constructor(vehicle) {
        super('vehicleUpdated')
        this.vehicle = vehicle
    }

    get message() {

        return {
            meta: this.meta,
            vehicle: {
                id: this.vehicle.id,
                status: this.vehicle.vehicleStatus.name,
                licensePlateCode: this.vehicle.licensePlateCode,
                tagCode: this.vehicle.tagCode,
                categoryId: this.vehicle.category.id,
                customer: {
                    id: this.vehicle.subscription.userId
                },
                plan: {
                    id: this.vehicle.subscription.plan.id
                }
            }
        }

    }

    setMessageMetaFields(config, uuid, correlationId) {
        super.setMessageMetaFields(config.AWS_TOPIC_VEHICLE_UPDATED, uuid(), correlationId)
    }

}

module.exports = VehicleUpdatedEvent