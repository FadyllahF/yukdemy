const { Course } = require("../models");
const { createQR } = require("../qrcode/qrcode");
const { Op } = require("sequelize");

class CourseController {
  static courseList(req, res) {
    const { search } = req.query;
    let option = {
      where: {},
    };
    if (search) {
      option.where = {
        ...option.where,
        courseName: { [Op.iLike]: `%${search}%` },
      };
    }
    Course.findAll(option)
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
      .catch((err) => {});
  }
  static deleteCourse(req, res) {
    let id = req.params.id;
    Course.destroy({
      where: { id: id },
    })
      .then((result) => {
        res.redirect("/course");
      })
      .catch((err) => {
        res.send(err);
      });
  }
}
module.exports = CourseController;
