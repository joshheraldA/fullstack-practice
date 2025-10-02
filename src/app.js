const express = require('express')
const { join  } = require('path')

const { people } = require('./db')

const app = express()


const PORT = 8080;

app.use(express.urlencoded({extended: false}))
app.use(express.static(join(__dirname, '..', 'public')))
app.use(express.json())

app.post('/login', (req, res) => {
    const { name } = req.body
    if(name) {
        res.status(200).send(`HELLO ${name}`)
        
    }
    res.status(401).send('Please provide credentials')
})

app.get('/api/people', (req, res) => {
    console.log("HELLO WOLRD")
    res.send({success: true, data: people})
}) 

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if(!name) {
        res.status(401).send({success: false, msg: 'please provide name'})
    }

    res.status(201).json({success: true, person: name})
})



app.listen(PORT, () => {
    console.log(`Listening in PORT ${PORT}`)
})