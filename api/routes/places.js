const placeRouter = require('express').Router()
const upload = require('../upload')
const Place = require('../models/place')
const authorize = require('../middlewares/authorize') 
const uploadImage = require('../utils/cloudinary')

placeRouter.get('/:type', async (req, res) => {
  const type = req.params.type
  const list = await Place.find({ type })

  res.status(200).json(list)
})

placeRouter.post('/', authorize, upload.upload, async (req, res) => {
  let { title, description, type } = req.body

  const path = req.file.path
  const imageUploaded = await uploadImage(path)
  console.log(imageUploaded)

  const img = imageUploaded.secure_url
  description = description
    .split('.\r')
    .map((e) => e.replace(/(\r\n|\n|\r)/gm, ''))

  const newPlace = new Place({
    title,
    description,
    type,
    img
  })
  const savedPlace = await newPlace.save()

  res.status(201).json(savedPlace)
})

module.exports = placeRouter
