const Portfolio = require("../models/Portfolio");

const getAllPortfolio = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allPort = await Portfolio.find();

      resolve({
        status: 'OK',
        message: "Get all success",
        data: allPort
      })
    } catch (error) {
      reject(error)
    }
  })
}

const createPortfolio = (newPort) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {name, projects, bio, skills, experienceWithLevel, contactInfo, extra} = newPort;

      const findPortExisted = await Portfolio.findOne({name});

      if(findPortExisted !== null) {
        resolve({
          status: 'OK',
          message: "The portfolio are already created",
          data: null
        })
      }

      const createdPort = await Portfolio.create({
        name, projects, bio, skills, experienceWithLevel, contactInfo, extra
      })
      if(createdPort) {
        resolve({
          status: 'OK',
          message: "Success",
          data: createdPort
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  getAllPortfolio,
  createPortfolio
}