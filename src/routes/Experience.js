const express = require('express')
const router = express.Router()
const experienceController = require('../controllers/ExperienceController')
const {authMiddleware} = require('../middleware/authMiddleware')

router.post('/', authMiddleware, experienceController.createExperience)
router.get('/', authMiddleware, experienceController.getAllExperience)

module.exports = router