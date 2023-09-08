const express = require('express')
const userController = require('../controllers/userController')
const route = express.Router()

route.post('/sellticket',userController.ticketsell)
route.get('/gettickets/:date/:source/:destination', userController.getTickets)
route.post('/upload',userController.upload)
route.post('/getlinks',userController.getupload)

module.exports = route