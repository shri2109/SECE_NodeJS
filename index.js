const express = require('express')

const app = express()

/**
 * 200 - ok
 * 201 - created
 * 404 - page not found
 * 500 - internal server error
 */

app.get('/', function(request, response) {
    // console.log(request)
    // response.status(200).send('hello')
    const obj = {
        "greetings" : "welcome"
    }
    response.status(200).json(obj)
})

app.get('/java', function(request, response) {
    // response.status(200).send('Java is an object oriented programming language')
    response.status(200).json({
        "about" : "java",
        "description" : "Java is an object oriented programming language"
    })
})

app.listen(8000, function() {
    console.log('Listening on port 8000...')
})
