const Project = require("../models/Project");

const getAllProject = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allProject = await Project.find();

      resolve({
        status: 'OK',
        message: "Get all success",
        data: allProject
      })
    } catch (error) {
      reject(error)
    }
  })
}

const createProject = (newProject) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {name, technologies, image, link, github, description} = newProject;
      const findExExisted = await Project.findOne({name});

      if(findExExisted !== null) {
        resolve({
          status: 'OK',
          message: "The project are already created",
          data: null
        })
      }

      const createdProject = await Project.create({
        name, technologies, image, link, github, description
      })
      if(createdProject) {
        resolve({
          status: 'OK',
          message: "Success",
          data: createdProject
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  getAllProject,
  createProject
}