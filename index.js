import server from './app.js'
import * as dotenv from 'dotenv'
import dbConnect from './config/mongo.js'

dotenv.config()
dbConnect()

server.listen(process.env.PORT)

console.log(`servidor escuchando desde ${process.env.PORT}`)
