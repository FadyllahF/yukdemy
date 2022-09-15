const { Course } = require("../models");

class CourseController {
  static courseList(req, res) {
    Course.findAll({})
      .then((result) => {
        res.render("courseList", { result });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static addCourseForm(req, res) {
    res.render("addFormCourse");
  }
  static addCourse(req, res) {
    const { courseName, description, videoUrl, imageUrl, UserId } = req.body;
    console.log(req.body);
    Course.create({ courseName, description, videoUrl, imageUrl, UserId })
      .then((result) => {
        res.redirect("/course");
      })
      .catch((err) => {
        res.send(err);
      });
  }
}
module.exports = CourseController;
