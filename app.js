const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())


const personRouter = require('./src/routes/person')


app.use('/person', personRouter)



app.listen(3000, async() => {
    console.log("App is running")
})