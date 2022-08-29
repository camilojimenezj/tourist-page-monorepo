require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const http = require('http')
require('./database')
const sockets = require('./sockets')
const morgan = require('morgan')

// settings
app.use(express.static('../app/dist'))

// middlewares
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', require('./routes/index'))

// websockets and start server
const PORT = process.env.PORT || 3000
const server = http.createServer(app)
const httpServer = server.listen(PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', `\nConnected http://localhost:${PORT}/\n`)
})
const io = require('socket.io')(httpServer, {
  transports: ['websocket', 'polling']
})
sockets(io)
