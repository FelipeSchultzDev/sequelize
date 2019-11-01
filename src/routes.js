const express = require('express')
const controller = require('./controllers/UserController')

const routes = express.Router()

routes.post('/users', controller.store)

module.exports = routes;