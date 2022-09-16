"use strict";
const fs = require("fs");
module.exports = {
  up(queryInterface, Sequelize) {
    const dataCourse = JSON.parse(fs.readFileSync("./data/courses.json")).map(
      (e) => {
        e.createdAt = new Date();
        e.updatedAt = new Date();
        return e;
      }
    );
    return queryInterface.bulkInsert("Courses", dataCourse);
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Courses", null, {});
  },
};
