const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!')
})

app.get('/test', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from B!')
})

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

var cb2 = function (req, res) {
    res.send('Hello from C!')
}

app.get('/arrFunction', [cb0, cb1, cb2])

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})