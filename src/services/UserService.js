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

const getUserDetail = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const detailUser = await User.findOne({_id: userId});
      if(!detailUser) {
        resolve({
          status: 'OK',
          message: "User is not existed!",
          data: null
        })
      }

      resolve({
        status: 'OK',
        message: "Get all success",
        data: detailUser
      })
    } catch (error) {
      reject(error)
    }
  })
}

const updateUser = (userId, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const detailUser = await User.findOne({_id: userId});
      if(!detailUser) {
        resolve({
          status: 'OK',
          message: "User is not existed!",
          data: null
        })
      }

      const updatedUser = await User.findByIdAndUpdate(userId, payload, {new: true})

      resolve({
        status: 'OK',
        message: "Update user success",
        data: updatedUser
      })
    } catch (error) {
      reject(error)
    }
  })
}

const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const detailUser = await User.findOne({_id: userId});
      if(!detailUser) {
        resolve({
          status: 'OK',
          message: "User is not existed!",
          data: null
        })
      }

      await User.findByIdAndDelete(userId)

      resolve({
        status: 'OK',
        message: "Delete user success"
      })
    } catch (error) {
      reject(error)
    }
  })
}


module.exports = {
  createUser,
  getUserDetail,
  updateUser,
  deleteUser,
  getAllUsers
}