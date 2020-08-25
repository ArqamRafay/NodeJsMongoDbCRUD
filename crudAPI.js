var express = require('express');
var app = express();
const mongoose = require('mongoose');

// Insert Documents
app.get('/insertData', async (req, res) => {

    mongoose.connect('mongodb://localhost:27017/Edurika', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
        if (!error) {
            console.log('success connected')
        } else {
            console.log('Error in connection database')
        }
    })



    res.end('Data not inserted yet');
})


module.exports = app;