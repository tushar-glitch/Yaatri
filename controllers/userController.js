const ticket_model = require("../models/userModel")
const dotenv = require('dotenv').config()
class userController {
    static ticketsell = async (req, res) => {
        const { tickets } = req.body
        var isticketpresent = false
        for (const ticket of tickets) {
            const bookingStatus = ticket.trainNo + " " + ticket.coach + " " + ticket.berth
            const isBookingStatus = await ticket_model.findOne({ bookingStatus })
            if (isBookingStatus) {
                isticketpresent = true
            }
        }
        if (isticketpresent) {
            res.status(400).json({
                msg: "Some tickets are already available for purchase!"
            })
        }
        else {
            for (const ticket of tickets) {
                const bookingStatus = ticket.trainNo + " " + ticket.coach + " " + ticket.berth
                const new_ticket = ticket_model({
                    name: ticket.name,
                    trainNo: ticket.trainNo,
                    coach: ticket.coach,
                    berth: ticket.berth,
                    bookingStatus: bookingStatus
                })
                new_ticket.save()
            }
            res.status(200).json({
                msg: "The tickets have been made available for purchase!"
            })
        }
    }
}

module.exports = userController