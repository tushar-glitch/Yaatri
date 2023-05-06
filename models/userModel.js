const mongoose = require('mongoose')

const ticketsellSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    trainNo: {
        type: Number,
        required: true
    },
    seatInfo: {
        type: [{
            berth: {
                type: Number,
                required: true
            },
            coach: {
                type: String,
                required: true
            },
            berthCode: {
                type: String
            }
        }]
    }
})
const ticketsellModel = mongoose.model('Ticket-sell', ticketsellSchema)
module.exports = ticketsellModel;