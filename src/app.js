const express = require('express')
const app = express()
const path = require('path')

const { people } = require('./db')

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

const PORT = 8080

app.get('/', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

// GET method when api/insomina/people
app.get('/api/insomnia/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})


// POST method when /api/insomnia/people
app.post('/api/insomnia/people', (req, res) => {
    const { name } = req.body

    if(!name) {
        return res.status(401).json({success: false, data: 'No input allowed    '})
    }
    res.status(200).json({success: true, data: name})
})

app.post('/api/people', (req, res) => {
    res.status(200).send('Success')

})

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})