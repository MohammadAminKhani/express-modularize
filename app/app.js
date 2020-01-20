var express = require('express')
var app = express()

app.use(require('./index'))

var server = app.listen(3000)
