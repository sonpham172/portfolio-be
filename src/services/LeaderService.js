const Leader = require("../models/Leader");

const createLeader = (newLeader) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {name, level} = newLeader;
      const findExExisted = await Leader.findOne({name});

      if(findExExisted !== null) {
        resolve({
          status: 'OK',
          message: "The leader are already created",
          data: null
        })
      }

      const createdEx = await Leader.create({
        name, 
        level
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
  createLeader
}