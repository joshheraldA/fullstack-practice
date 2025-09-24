const express = require('express');
const server = express();

const PORT = 8080;

server.get('/', (req, res) => {
    res.status(200)
    res.send('THIS is the hhomepage');
});

server.get('/id', (req, res) => {
    res.status(200)
    res.send(`User ID: ${req.params.id}`);
});

server.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});

server.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});