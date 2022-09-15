const { User } = require("../models");

class UserController {
  static userList(req, res) {
    User.findAll({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}
module.exports = UserController;
