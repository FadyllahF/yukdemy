const { User, Course, Profile } = require("../models");

class UserController {
  static userList(req, res) {
    User.findAll({})
      .then((result) => {
        res.render("userList", { result });
      })
      .catch((err) => {
        res.send(err);
      });
  }
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
  static deleteUser(request, response) {
    let id = request.params.id;
    User.destroy({
      where: { id: id },
    })
      .then((result) => {
        response.redirect("/user");
      })
      .catch((err) => {
        response.send(err);
      });
  }
  static studentDetail(req, res) {
    User.findAll({
      include: Course,
      where: {
        role: "student",
      },
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static editProfileForm(req, res) {
    const id = req.params.id;
    console.log(+id);
    Profile.findOne({
      where: {
        UserId: +id,
      },
    })
      .then((result) => {
        res.render("editProfilForm", { result });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static editProfile(req, res) {
    const { ...profile } = req.body;
    profile
      .Update(
        { ...profile },
        {
          where: { id: id },
        }
      )
      .then((result) => {
        res.redirect("/user");
      });
  }
}
module.exports = UserController;
