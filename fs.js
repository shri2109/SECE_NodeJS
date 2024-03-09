const fs = require('fs')

/**
 * write -> serialize : JSON.stringify()
 * read -> deserialize : JSON.parse()
 */

/**
 * read : readFileSync, readFile
 * write : writeFileSync, writeFile
 */

const file = fs.readFileSync('./data.json')
const data = JSON.parse(file)
console.log(data)
