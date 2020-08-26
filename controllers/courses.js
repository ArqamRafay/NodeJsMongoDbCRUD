const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();
const CourseModel = mongoose.model("Course")

router.get("/list", (req, res) => {
    // select * from tblCourse
    CourseModel.find((error, docs) => {
        if (!error) {
            // console.log(docs)
            res.send(docs)
        } else {
            res.send('Error')
        }
    })

    // select * from tblCourse where CourseId
    // let query = { CourseId: "3" }
    // CourseModel.find(query, (error, docs) => {
    //     if (!error) {
    //         // console.log(docs)
    //         res.send(docs)
    //     } else {
    //         res.send('Error')
    //     }
    // })

})

router.post("/add", (req, res) => {

    // insert into tblCourse(columnname) values ('')
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

router.put("/edit", (req, res) => {
    console.log(req.body)
    // update tblCourse set column Name = '' wheer CoirseId = 1
    let query = { CourseId: "5" }
    var newvalues = { $set: { CourseName: "Mickey" } };

    CourseModel.updateOne(query, newvalues, (error, docs) => {
        if (!error) {
            res.send(docs)
        } else {
            res.send('Error')
        }
    })

})

router.delete("/delete", (req, res) => {
    // console.log(req.body['CourseId'])
    // update tblCourse set column Name = '' wheer CoirseId = 1
    let query = { CourseId: "3" }
    CourseModel.deleteOne(query, (error, docs) => {
        if (!error) {
            res.send(docs)
        } else {
            res.send('Error')
        }
    })
})
module.exports = router;