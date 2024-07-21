
require('dotenv').config()
const express = require('express')
const initDbConnect = require('./config/mongo')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


const port = process.env.PORT || 3018

app.get('/', (request, response) => {
    response.send("<h1>Hello World</h1>")
})

const fruitsRoutes = require('./routes/fruits') 
app.use('/api/fruits', fruitsRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

initDbConnect()