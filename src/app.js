const express = require('express')
const app = express()

const { people } = require('./db')

app.use(express.json())

const PORT = 8080

app.get('/', (req, res) => {
    res.status(200).json({success: true, data: people})
})

// GET method when api/insomina/people
app.get('/api/insomnia/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})


// POST method when /api/insomnia/people
app.post('/api/insomnia/people', (req, res) => {
    const { name } = req.body

    if(!name) {ter
        return res.status(401).json({success: false, data: 'No input allowed'})
    }
    res.status(200).json({success: true, data: name})
})

app.put('/api/insomnia/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const newPerson = people.find((person) => person.id === Number(id))
    if(!newPerson) {
        return res
        .status(404)
        .json({success: false, data: `${id} could not be found`})
    }

    const changeName = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name
        }
    })
    res.status(200).json({success: true, data: people})
})

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})