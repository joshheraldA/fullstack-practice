const express = require('express')
const app = express()

const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')

const PORT = 8080

app.use([authorize, logger])

app.get('/', (req, res) => {
    res.status(200).send('This is the homepage')
})

app.get('/about', (req, res) => {
    console.log(req.user)
    res.status(200).send('This is the about page')
})

app.listen(PORT, () => {
    console.log(`Listening to PORT  ${PORT}`)
})