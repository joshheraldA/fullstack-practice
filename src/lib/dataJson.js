const express = require('express')
const app = express()

const { products } = require('./db.js')

const PORT = 8080;


app.get('/', (req, res) => {
    res.send('<h1>This is the homepage</h1><a href="/api/products">products</a>"')
})

app.get('/api/products/:productID', (req, res) => {

    
    const shownProduct = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(shownProduct)
})

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
})