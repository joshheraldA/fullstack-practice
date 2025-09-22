const http = require('http')
const PORT = 8080

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('HOMEPAGE')
    }
    else if(req.url === '/about') {
        res.end('THIS IS THE ABOUT PAGE')
    }
    else {
        res.end('ERROR')

    }
})

server.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})

// const http = require('http');
// const PORT = 8080;

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end(`Welcome to Homepage`)
//     }
//     if(req.url === '/about') {
//         res.end("This is about page")
//     }
//     if(req.url === '/contact') {
//         res.end("This is the contact page")
//     }
//     else {
//         // not found
//         res.end(
//             `<h1>OOPS!</h1>
//             <p> We can't seem to find the page that you are looking for</p>
//             <a href="/">WTF LINK</a>
//             `
//         );
//     }
// })

// server.listen(8080, () => {
//     console.log(`Listening to PORT $`)
// });
