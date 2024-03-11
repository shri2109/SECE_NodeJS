const express = require('express')

const app = express()

app.get('/', function(request, response) {
    response.send('hello')
})

app.get('/java', function(request, response) {
    response.send('Java is an object oriented programming language')
})

app.listen(8000, function() {
    console.log('Listening on port 8000...')
})
