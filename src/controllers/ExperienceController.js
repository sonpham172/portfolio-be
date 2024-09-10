const exService = require('../services/ExperienceService')

const getAllExperience = async (req, res) => {
  try {

    const response = await exService.getAllExperience();
    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

const createExperience = async (req, res) => {
  try {
    const {company, address} = req.body;
    if(!company || !address) {
      return res.status(200).json({
        message: 'The input is required',
        data: null
      })
    }

    const response = await exService.createExperience(req.body);

    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

module.exports = {
  getAllExperience,
  createExperience
};