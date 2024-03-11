const fs = require('fs')
const http = require('http')
/**
 * NodeJS
 * run time environment for JS
 * server-side language
 * 
 * npm and yarn
 * npm : node package manager
 */
/**
 * Commands
 * node <filename>.<extension>
 * npx nodemon <filename>.<extension>
 * 
 * npm install <package_name> / npm i <package_name>
 * npm i <package_name> --save-dev
 * npm uninstall <package_name>
 * 
 * npm init
 * npm init -y
 */
/**
 * git config --global user.name '<user_name>'
 * git config --global user.email <emailID>
 * 
 * git clone <link>
 * 
 * git add .
 * git commit -m ""
 * git push 
 */

/**
 * 200 - ok
 * 201 - created
 * 404 - page not found
 * 500 - internal server error
 */

// console.log('hii')
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type' : 'text/html'
        // 'Content-Type' : 'text/plain'
    })
    // const file = readFileSync('./index.html')
    // response.write(file)
    // response.end()

    // fs.readFile('./index.html', function(error, file) {
    //     response.write(file)
    //     response.end()
    // })

    response.write('hello')
    response.end()
}).listen(8000, function() {
    console.log('Listening on port 8000...')
})
