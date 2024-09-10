const express = require('express')
const router = express.Router()
const projectController = require('../controllers/ProjectController')
const {authMiddleware} = require('../middleware/authMiddleware')

router.post('/', authMiddleware, projectController.createProject)
router.get('/', authMiddleware, projectController.getAllProject)

module.exports = router