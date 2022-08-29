const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

userRouter.post('/', async (req, res) => {
  const { email, name, password } = req.body
  const user = await User.findOne({ email })

  if (user) return res.status(400).json({ error: 'email already taken' })

  const passwordHash = await bcrypt.hash(password, 10)
  const newUser = new User({
    email,
    name,
    password: passwordHash
  })
  const savedUser = await newUser.save()

  res.status(201).json(savedUser)
})

module.exports = userRouter
