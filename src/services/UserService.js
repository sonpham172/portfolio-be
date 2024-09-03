const bcrypt = require('bcrypt');
const User = require("../models/User");

const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {email, name, password, phone, linkedIn} = newUser;
      const findUser = await User.findOne({email});

      if(findUser !== null) {
        resolve({
          status: 'OK',
          message: "The email are already created",
          data: null
        })
      }

      const hash = bcrypt.hashSync(password, 10);
      const createdUser = await User.create({
        email, 
        name, 
        password: hash,
        phone,
        linkedIn
      })
      if(createdUser) {
        resolve({
          status: 'OK',
          message: "Success",
          data: createdUser
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}

const getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUser = await User.find();

      resolve({
        status: 'OK',
        message: "Get all success",
        data: allUser
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  createUser,
  getAllUsers
}