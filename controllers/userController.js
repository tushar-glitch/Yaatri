const uploadModel = require("../models/uploadModel")
const ticket_model = require("../models/userModel")
const dotenv = require('dotenv').config()
class userController {
    static upload = async (req, res) => {
        const { link } = req.body
        const newupload = uploadModel({
            link
        })
        newupload.save()
        res.status(200).json({
            msg: "Image/video uploaded successfully!"
        })
    }
    static getupload = async (req, res) => {
        const links = await uploadModel.find()
        res.status(200).json({
            data: links
        })
    }
    static ticketsell = async (req, res) => {
        const { name, source, destination, _class, fare, quota, date, trainNo, seatInfo } = req.body
        const newTicket = ticket_model({
            name, 
            source,
            destination,
            _class,
            fare,
            quota,
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