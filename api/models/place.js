const mongoose = require('mongoose')
const { Schema } = mongoose

const placeSchema = new Schema({
  title: String,
  description: Array,
  img: String,
  type: String
})

placeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('places', placeSchema)
