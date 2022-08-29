const router = require('express').Router()
const placeRouter = require('./places')
const userRouter = require('./users')
const loginRouter = require('./login')
const errorHandler = require('../middlewares/errorHandler')
const notFound = require('../middlewares/notFound')

// Places
router.use('/api/places', placeRouter)

// Users
router.use('/api/users', userRouter)

// Login
router.use('/api/login', loginRouter)

// Route not found
router.use(notFound)

// Error handler
router.use(errorHandler)

module.exports = router
