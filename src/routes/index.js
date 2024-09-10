const authRoute = require('./AuthRoute')
const userRoute = require('./UserRoute')
const exRoute = require('./Experience')
const leaderRoute = require('./LeaderRoute')
const projectRoute = require('./ProjectRoute')
const portfolioRoute = require('./PortfolioRoute')

const routes = (app) => {
  app.use('/api/users', userRoute)
  app.use('/api/experiences', exRoute)
  app.use('/api/leaders', leaderRoute)
  app.use('/api/projects', projectRoute)
  app.use('/api/auth', authRoute)
  app.use('/api/portfolios', portfolioRoute)
}

module.exports = routes;