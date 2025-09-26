const { readFile } = require('fs');
const { join } = require('path')

console.log("Starting first task")

const filePath = join(__dirname, '..', '.gitignore')

readFile(filePath, 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(result);
}) 

console.log("Starting last tasks")