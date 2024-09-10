const authSerice = require('../services/AuthService')

const login = async (req, res) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {email, password} = req.body;
    if(!email || !password) {
      return res.status(200).json({
        message: 'The input is required!',
        data: null
      })
    } else if(!emailRegex.test(email)) {
      return res.status(200).json({
        message: 'The email is invalid!',
        data: null
      })
    }

    const response = await authSerice.loginUser(req.body);

    const {refresh_token, ...resExpectRefreshToken} = response;
    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: true
    })
    return res.status(200).json(resExpectRefreshToken)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie('refresh_token')
    return res.status(200).json({
      message: 'Logout successfully!',
      status: 'OK'
    })
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refresh_token;
    if(!token) {
      return res.status(200).json({
        message: 'The token is required!',
        data: null
      }) 
    }
    const response = await authSerice.generateNewJWT(token);
    return res.status(200).json(response)
    return;
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

module.exports = {
  login,
  logout,
  refreshToken
};