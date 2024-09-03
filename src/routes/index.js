const authRoute = require('./AuthRoute')
const userRoute = require('./UserRoute')

const routes = (app) => {
  app.use('/api/users', userRoute)
  app.use('/api/auth', authRoute)
}

module.exports = routes;