import mongoose from 'mongoose'

(async () => {
  await mongoose.connect('mongodb://localhost/mern-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Database is connected')
})()