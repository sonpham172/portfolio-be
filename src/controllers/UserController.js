const userService = require('../services/UserService')

const createUser = async (req, res) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {email, name, password, confirmPassword, phone, linkedIn} = req.body;
    if(!email || !name || !password || !confirmPassword || !phone || !linkedIn) {
      return res.status(200).json({
        message: 'The input is required',
        data: null
      })
    } else if(!emailRegex.test(email)) {
      return res.status(200).json({
        message: 'The email wrong validation',
        data: null
      }) 
    } else if(password !== confirmPassword) {
      return res.status(200).json({
        message: 'Password wrong validation',
        data: null
      })
    }

    const response = await userService.createUser(req.body);

    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

const getAllUsers = async (req, res) => {
  try {

    const resAllUser = await userService.getAllUsers();
    return res.status(200).json(resAllUser)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

const getUserDetail = async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await userService.getUserDetail(userId);
    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if(!userId) {
      return res.status(200).json({
        message: 'The userId is required!',
        data: null
      }) 
    }
    const payload = req.body;
    const response = await userService.updateUser(userId, payload);
    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if(!userId) {
      return res.status(200).json({
        message: 'The userId is required!',
        data: null
      }) 
    }

    const response = await userService.deleteUser(userId);
    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

module.exports = {
  createUser,
  getUserDetail,
  updateUser,
  deleteUser,
  getAllUsers
};