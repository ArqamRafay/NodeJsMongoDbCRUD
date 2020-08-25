const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();
const CourseModel = mongoose.model("Course")

router.get("/list", (req, res) => {
    CourseModel.find((error, docs) => {
        if (!error) {
            // console.log(docs)
            res.send(docs)
        } else {
            res.send('Error')
        }
    })
})

router.post("/add", (req, res) => {

    console.log(req.body);

    var course = new CourseModel();
    course.CourseId = req.body['CourseId']
    course.CourseName = req.body['CourseName'];
    course.CourseDuration = '2'
    course.CourseFees = '2'

    course.save((err, docs) => {
        if (!err) {
            // res.redirect("/course/list")
            res.json({ message: 'Successfull', status: 'OK' })
        } else {
            res.send("Error ")
        }
    });

})

module.exports = router;