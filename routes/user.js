const express = require("express");
const Controller = require("../controllers/controllers");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.userList);
router.get("/add", userController.addCourseForm);
router.post("/add", userController.addCourse);
router.get("/:id/edit", userController.editProfileForm);
router.post("/:id/edit", userController.editProfile);
router.get("/:id/delete", userController.deleteUser);

module.exports = router;
