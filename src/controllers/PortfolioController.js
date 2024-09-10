const portfolioService = require('../services/PortfolioService')

const getAllPortfolio = async (req, res) => {
  try {

    const response = await portfolioService.getAllPortfolio();
    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

const createPortfolio = async (req, res) => {
  try {
    const {name, projects, bio, skills, experienceWithLevel, contactInfo, extra} = req.body;
    if(!name || !projects || !contactInfo) {
      return res.status(200).json({
        message: 'The input is required',
        data: null
      })
    }

    const response = await portfolioService.createPortfolio(req.body);

    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

module.exports = {
  getAllPortfolio,
  createPortfolio
};