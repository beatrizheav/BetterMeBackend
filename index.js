const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const db = require('./db/db')
const PORT = process.env.PORT
const app = express()

/*Middlewares*/
app.use(express.json())
app.use(cors());
app.use(morgan('dev'))

const authRoutes=require('./routes/auth.routes')
app.use('/api/v1/auth', authRoutes)

/*Server and DB*/
db()
app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`)
})