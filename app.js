const express = require('express');
const app = express();
const connection = require("./model")
const path = require("path")
const expressHandlerBars = require("express-handlebars")
const bodyParser = require("body-parser")

const CourseController = require('./controllers/courses')

app.use(bodyParser.urlencoded({ extended: true }))

// app.get("/", (req, res) => {
//     // res.send('<h1>Hello world</h1>')
//     res.render("index",{})
// })

app.use("/course", CourseController)

var server = app.listen(4300, "192.168.1.190", function () {

    var host = server.address().address
    var port = server.address().port
    console.log('Listing server address: ' + host + ':' + port)
})