const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json())

/**
 * 200 - ok
 * 201 - created
 * 401 - unauthorized
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

/**
 * request body
 * params
 * queries
 */
app.post('/validate-user', function(request, response) {
    if(request.body.username === 'abcd' && request.body.password === '1234') {
        response.status(200).json({
            "status" : "success",
            "message" : "valid user"
        })
    } else {
        response.status(401).json({
            "status" : "failure",
            "message" : "invalid user"
        })
    }
})

app.listen(8000, function() {
    console.log('Listening on port 8000...')
})
