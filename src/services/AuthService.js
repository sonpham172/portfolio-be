const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const loginUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {email, password} = user;

      const findUser = await User.findOne({email})
      if(!findUser) {
        resolve({
          status: 'OK',
          message: "The user is not existed!",
          data: null
        })
      }

      const isMatchPassword = bcrypt.compareSync(password, findUser.password);
      if(!isMatchPassword) {
        resolve({
          status: 'OK',
          message: "The password is incorrect!",
          data: null
        })
      }

      const access_token = await generateJWT({
        id: findUser._id,
        isAdmin: findUser.isAdmin
      })

      const refresh_token = await refreshJWT({
        id: findUser._id,
        isAdmin: findUser.isAdmin
      })

      resolve({
        status: 'OK',
        message: "Login success",
        access_token,
        refresh_token
      })
    } catch (error) {
      reject(error)
    }
  })
}

const generateJWT = async (payload) => {
  const token = jwt.sign({
    payload,
  }, process.env.ACCESS_TOKEN, {expiresIn: '1d'})

  return token;
}

const refreshJWT = async (payload) => {
  const token = jwt.sign({
    payload,
  }, process.env.REFRESH_TOKEN, {expiresIn: '365d'})

  return token;
}

const generateNewJWT = (token) => {
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(
        token, process.env.REFRESH_TOKEN, async (err, user) => {
        if(err) {
          resolve({
            status: 'ERROR',
            message: "Can't refresh JWT"
          })
        }
        const {payload} = user;
        const newAccessToken = await generateJWT({
          id: payload?.id,
          isAdmin: payload?.isAdmin
        })

        resolve({
          status: 'OK',
          message: "Refresh JWT success",
          access_token: newAccessToken
        })
      })
    } catch (error) {
      reject(error)
    }
  })

}

module.exports = {
  loginUser,
  generateJWT,
  refreshJWT,
  generateNewJWT
}