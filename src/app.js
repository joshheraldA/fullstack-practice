const express = require('express')
const app = express()
const path = require('path')

const PORT = 8080
const pathFile = path.join(__dirname, '..', 'public')

app.use(express.static(pathFile))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.use((req, res) => {
    res.status(404).send('Not found')
})

app.listen(PORT, (req, res) => {
    console.log(`Listening to PORT ${PORT}`)
})

