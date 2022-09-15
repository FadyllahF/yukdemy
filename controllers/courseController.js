const { Course } = require("../models");
const { createQR } = require("../qrcode/qrcode");

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
  static createQR(req, res) {
    const url = req.params.url;
    createQR(`http://localhost:3000/${url}`, 400, 100)
      .then((result) => {
        res.render("qrtest", { data: result });
      })
      .catch((err) => {
        console.log(err, "huhu");
      });
  }
}
module.exports = CourseController;
