const projectService = require('../services/ProjectService')

const getAllProject = async (req, res) => {
  try {

    const response = await projectService.getAllProject();
    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

const createProject = async (req, res) => {
  try {
    const {name, technologies} = req.body;
    if(!name || !technologies) {
      return res.status(200).json({
        message: 'The input is required',
        data: null
      })
    }

    const response = await projectService.createProject(req.body);

    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

module.exports = {
  getAllProject,
  createProject
};