const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGO_DB_URI, {})
  .then((db) => console.log('Database is connected'))
  .catch((err) => console.error(err))
