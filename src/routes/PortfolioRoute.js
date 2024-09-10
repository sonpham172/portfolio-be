const express = require('express')
const router = express.Router()
const portfolioController = require('../controllers/PortfolioController')
const {authMiddleware} = require('../middleware/authMiddleware')

router.post('/', authMiddleware, portfolioController.createPortfolio)
router.get('/', authMiddleware, portfolioController.getAllPortfolio)

module.exports = router