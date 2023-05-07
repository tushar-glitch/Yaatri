const ticket_model = require("../models/userModel")
const dotenv = require('dotenv').config()
class userController {
    static ticketsell = async (req, res) => {
        const { name, source, destination, date, trainNo, seatInfo } = req.body
        const newTicket = ticket_model({
            name, 
            source,
            destination,
            date, 
            trainNo,
            seatInfo
        })
        newTicket.save()
        res.status(200).json({
            msg: "Tickets are now available for purchase!"
        })
    }
    static getTickets = async (req, res) => {
        const { date, source, destination } = req.params
        const tickets = await ticket_model.find({
            date,
            source,
            destination
        })
        res.status(200).json(tickets)
    }
}

module.exports = userController