const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')
const {authMiddleware, authDetailMiddleware} = require('../middleware/authMiddleware')

router.post('/', authMiddleware, userController.createUser)
router.get('/', authMiddleware, userController.getAllUsers)
router.get('/:id', userController.getUserDetail)
router.put('/:id', authDetailMiddleware, userController.updateUser)
router.delete('/:id', authDetailMiddleware, userController.deleteUser)

module.exports = router