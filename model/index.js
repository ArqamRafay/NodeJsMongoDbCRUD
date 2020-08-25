const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Edurika', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log('success connected')
    } else {
        console.log('Error in connection database')
    }
})

const Course = require("./course.model")
