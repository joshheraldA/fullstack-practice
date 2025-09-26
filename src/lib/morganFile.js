const express = require('express')
const app = express()
const { products } = require('./db')

const PORT = 8080

const morgan = require('morgan')

app.use(morgan('tiny'))


app.get('/', (req, res) => {
    res.status(200).send('This is the homepage')
})

app.get('/api/v1', (req, res) => {
    res.status(200).json(products)
})

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
})