const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log(`Data received`)
})

customEmitter.on('response', (name) => {
    console.log(`HELLO THERE ${name}`)
})

customEmitter.emit(`response`, "josh")
