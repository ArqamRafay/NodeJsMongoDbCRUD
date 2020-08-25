const mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
    CourseName: { type: String, required: 'required' },
    CourseId: { type: String },
    CourseDuration: { type: String },
    CourseFees: { type: String }
})
mongoose.model("Course", CourseSchema)