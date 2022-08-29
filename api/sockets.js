const Comment = require('./models/comment')

function sockets (io) {
  io.on('connection', (socket) => {
    socket.on('client:requirecomments', async (place) => {
      const comments = await Comment.find({ place })
      io.emit('server:loadcomments', comments)
    })

    socket.on('client:newcomment', async (data) => {
      const newComment = new Comment(data)
      const savedComment = await newComment.save()
      socket.emit('server:newcomment', savedComment)
    })
  })
}

module.exports = sockets
