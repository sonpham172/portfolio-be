const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.headers.token?.split(' ')[1];
  if(!token) {
    return res.status(401).json({
      message: 'Invalid authentication!',
      status: "ERROR"
    }) 
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if(err) {
      return res.status(401).json({
        message: 'Invalid authentication!',
        status: "ERROR"
      }) 
    }

    const {isAdmin} = user.payload;
    if(isAdmin) {
      next();
    } else {
      return res.status(401).json({
        message: 'Error authorization!',
        status: "ERROR"
      }) 
    }
  })
}

const authDetailMiddleware = (req, res, next) => {
  const token = req.headers.token?.split(' ')[1];
  const id = req.params.id;
  if(!token) {
    return res.status(401).json({
      message: 'Invalid authentication!',
      status: "ERROR"
    }) 
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if(err) {
      return res.status(401).json({
        message: 'Invalid authentication!',
        status: "ERROR"
      }) 
    }

    const {isAdmin} = user.payload;
    console.log('payloadss', user);
    if(isAdmin || id === user.payload.id) {
      next();
    } else {
      return res.status(401).json({
        message: 'Error authorization!',
        status: "ERROR"
      }) 
    }
  })
}

module.exports = {
  authMiddleware,
  authDetailMiddleware
}