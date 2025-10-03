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

    if(!name) {ter
        return res.status(401).json({success: false, data: 'No input allowed'})
    }
    res.status(200).json({success: true, data: name})
})

app.post('/api/people', (req, res) => {
    res.status(200).send('Success')

})

app.put('/api/insomnia/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const targetPerson = people.find((person) => person.id === Number(id))
    if(!targetPerson) {
        return res
        .status(404)
        .json({success: false, data: `${id} could not be found`})
    }
    targetPerson.name = name
    res.status(200).json({success: true, data: people})
})

app.delete('/api/insomnia/:id', (req, res) => {
    // access the id directly instead of creating a variable
    const findPerson = people.find((person) => person.id === Number(req.params.id))
    if(!findPerson) {
        return res
        .status(404)
        .json({success: false, data: `Cannot find ${req.params.id}`})
    }
    const filteredData = people.filter((person) => person.id > Number(req.params.id))
    return res.status(200).json({success: true, data: filteredData})
})

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})