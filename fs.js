const fs = require('fs')

/**
 * write -> serialize : JSON.stringify()
 * read -> deserialize : JSON.parse()
 */

/**
 * read : readFileSync, readFile
 * write : writeFileSync, writeFile
 */

// Synchronous approach
// const file = fs.readFileSync('./data.json')
// const data = JSON.parse(file)
// console.log(data)
// data.name = 'abc'
// fs.writeFileSync('./data.json', JSON.stringify(data))

// Asynchronous approach
fs.readFile('./data.json', function(error, file) {
    const data = JSON.parse(file)
    console.log(data)
    data.name = 'xyz'
    fs.writeFile('./data.json', JSON.stringify(data), function() {
        console.log('file written successfully...')
    })
})