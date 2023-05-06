const mongoose = require('mongoose')

const ticketsellSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    trainNo: {
        type: Number,
        required: true
    },
    coach: {
        type: String,
        required: true
    },
    berth: {
        type: Number,
        required: true
    },
    bookingStatus: {
        type: String
    }
})
const ticketsellModel = mongoose.model('Ticket-sell', ticketsellSchema)
module.exports = ticketsellModel;