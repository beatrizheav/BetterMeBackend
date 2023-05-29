const express = require('express')
const router = express.Router()
const { validateLogin, validateSignup } = require('../validators/validateAuth')
const authController = require('../controllers/auth.controller')

router.post('/login', validateLogin, authController.login)
router.post('/signup', validateSignup, authController.signup)

module.exports = router