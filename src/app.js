const express = require('express')
const app = express()

const { people } = require('./db')

app.use(express.json())

const PORT = 8080

app.get('/', (req, res) => {
    res.status(200).json({success: true, data: people})
})

<<<<<<< HEAD
app.get('/api/people', (req, res) => {
    console.log("HELLO WOLRD")
    res.send({success: true, data: people})
}) 
=======
// GET method when api/insomina/people
app.get('/api/insomnia/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})
>>>>>>> 2774999c75f6c027eff29f74d1e39de761ba2661


// POST method when /api/insomnia/people
app.post('/api/insomnia/people', (req, res) => {
    const { name } = req.body

    if(!name) {
        return res.status(401).json({success: false, data: 'No input allowed'})
    }
    res.status(200).json({success: true, data: name})
})

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})