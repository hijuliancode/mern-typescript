import mongoose, { ConnectionOptions } from 'mongoose'

(async () => {
  try {
    const mongooseOptions:ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  
    const db = await mongoose.connect('mongodb://localhost/mern-database', mongooseOptions)
    console.log('database is connected to: ', db.connection.name)
  } catch (error) {
    console.log(error)
  }
})()