const express = require('express')
const userController = require('../controllers/userController')
const route = express.Router()

route.post('/sellticket',userController.ticketsell)

module.exports = route