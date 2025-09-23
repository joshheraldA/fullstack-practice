const http = require('http')
const path = require('path')
const { readFileSync } = require('fs')
const util = require('util')
const PORT = 8080

const pathFolder = path.join(__dirname, '..', 'public')
const fileContent = readFileSync(path.join(pathFolder, 'index.html'), 'utf8')
const styleContent = readFileSync(path.join(pathFolder, 'style.css'), 'utf8')


const server = http.createServer((req, res) => {
    let url = req.url

    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(fileContent)
        res.end(res)
    }
    else {
        thereError()
    }
    if(url === '/style.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(styleContent)
        res.end()
        
    }

    else { 
        thereError(res)
    }

})

server.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})