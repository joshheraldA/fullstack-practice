const express =  require('express')
const app = express()
const PORT = 8080;

const { products } = require('./db')

app.get('/', (req, res) => {
    res.send(`<h1>this is the homepage</h1><a href="/api/product">PRODUCT</a>`)
})

app.get('/api/product/:productID', (req, res) => {
    const { productID } = req.params

    const singleProduct = products.find((product) => 
        product.id === Number(productID)
    )

    if(!singleProduct) {
        return res.status(404).send('The product or resource does not exists')
    }
        
    res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    const { id } = req.query
    
    const productTarget = products.find((product) => Number(id) === product.id)
    if(!productTarget) {
        res.status(404).send('The resource is not found')
    }

    res.send(productTarget)
})

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
}) 