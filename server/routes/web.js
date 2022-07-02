const router = require('express').Router()

/**
* Required controllers
*/
const UserController = require('../controllers/UserController')

/**
* Available routes in app
*/
router.get('/users', UserController.index)

module.exports = router