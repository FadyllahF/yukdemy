const sequelize = require("sequelize");

class Controller {
  static home(req, res) {
    res.render("homePage");
  }
}

module.exports = Controller;
