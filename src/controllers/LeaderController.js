const leaderService = require('../services/LeaderService')

const createLeader = async (req, res) => {
  try {
    const {name, level} = req.body;
    if(!name || !level) {
      return res.status(200).json({
        message: 'The input is required',
        data: null
      })
    }

    const response = await leaderService.createLeader(req.body);

    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

module.exports = {
  createLeader
};