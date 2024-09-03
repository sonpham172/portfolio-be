const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')
const {authMiddleware} = require('../middleware/authMiddleware')

router.post('/', authMiddleware, userController.createUser)
router.get('/', authMiddleware, userController.getAllUsers)

module.exports = router