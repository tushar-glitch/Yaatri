const express = require('express')
const userController = require('../controllers/userController')
const route = express.Router()

route.post('/sellticket',userController.ticketsell)
route.get('/gettickets/:date/:source/:destination',userController.getTickets)

module.exports = route