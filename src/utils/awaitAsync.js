const { readFile, writeFile } = require('fs')
const util = require('util')
const path = require('path')

let filePath = path.join(__dirname, 'utils', 'reading.txt')
let filePath2 = path.join(__dirname, 'utils', 'reading2.txt')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {

//         readFile(path, 'utf8', (err, result) => {
//             if(err) {
//                 reject(err)
//             } 
//             else {
//                 resolve(result)
//             }
//         })    

//     })
// }

// getText(filePath)
//  .then(result => console.log(result))
//  .catch(err => { console.log(err)})


const start = async() => {
    try {
        const first = await readFilePromise(filePath, 'utf8')
        const second = await readFilePromise(filePath2, 'utf8')
        await writeFilePromise(filePath, `This is awesome : first`, {flag: 'a'})
        console.log('first')
    }
    catch(error) {
        console.log(err)
    }
}
 start()

