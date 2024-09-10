const Experience = require("../models/Experience");

const getAllExperience = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allExperience = await Experience.find();

      resolve({
        status: 'OK',
        message: "Get all success",
        data: allExperience
      })
    } catch (error) {
      reject(error)
    }
  })
}

const createExperience = (newEx) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {company, address} = newEx;
      const findExExisted = await Experience.findOne({company});

      if(findExExisted !== null) {
        resolve({
          status: 'OK',
          message: "The company are already created",
          data: null
        })
      }

      const createdEx = await Experience.create({
        company, 
        address
      })
      if(createdEx) {
        resolve({
          status: 'OK',
          message: "Success",
          data: createdEx
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  getAllExperience,
  createExperience
}