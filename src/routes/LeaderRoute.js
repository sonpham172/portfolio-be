const express = require('express')
const router = express.Router()
const leaderController = require('../controllers/LeaderController')
const {authMiddleware} = require('../middleware/authMiddleware')

router.post('/', authMiddleware, leaderController.createLeader)

module.exports = router