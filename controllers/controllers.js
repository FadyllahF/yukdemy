const sequelize = require("sequelize");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

class Controller {
  static home(req, res) {
    res.render("homePage");
  }
  static registerForm(req, res) {
    res.render("registerForm");
  }
  static postRegister(req, res) {
    const { userName, password, role } = req.body;
    User.create({ userName, password, role })
      .then((newUser) => {
        res.redirect("/loginPage");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static loginForm(req, res) {
    res.render("loginPage");
  }
  static postLogin(req, res) {
    const { userName, password } = req.body;
    User.findOne({ where: { userName } })
      .then((user) => {
        //console.log(user);
        if (user) {
          const isValidPassword = bcrypt.compareSync(password, user.password);
          if (isValidPassword) {
            return res.redirect("/");
          } else {
            const error = "invalid username or password ";
            return res.redirect(`loginPage?error=${error}`);
          }
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
