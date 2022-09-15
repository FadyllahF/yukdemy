"use strict";
const fs = require("fs");
module.exports = {
  up(queryInterface, Sequelize) {
    const dataUser = JSON.parse(fs.readFileSync("./data/users.json")).map(
      (e) => {
        e.createdAt = new Date();
        e.updatedAt = new Date();
        return e;
      }
    );
    return queryInterface.bulkInsert("Users", dataUser);
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
