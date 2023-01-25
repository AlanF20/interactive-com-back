import mongoose from 'mongoose'

export default function dbConnect () {
  const DB_URI = process.env.DB_URI
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    return !err ? console.log('Conexion correcta 😀') : console.error(`Error de conexion ${err}😑`)
  })
}
