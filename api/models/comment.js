const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema({
  name: String,
  comment: String,
  place: String
})

commentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('comments', commentSchema)
