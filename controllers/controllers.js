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
    const { userName, email, password, role } = req.body;
    User.create({ userName, email, password, role })
      .then((newUser) => {
        res.redirect("/loginPage");
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
  static loginForm(req, res) {
    const { error } = req.query;
    res.render("loginPage", { error });
  }
  static postLogin(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email } })
      .then((user) => {
        //console.log(user);
        if (user) {
          const isValidPassword = bcrypt.compareSync(password, user.password);
          if (isValidPassword) {
            return res.redirect("/");
          } else {
            const error = "invalid email or password ";
            return res.redirect(`/loginPage?error=${error}`);
          }
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
