const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.userList);
router.get("/add", userController.addCourseForm);
router.post("/add", userController.addCourse);
router.get("/:id/delete", userController.deleteUser);
// router.get("/", userController.default);
// router.post("/", userController.default);
// router.get("/", userController.default);
// router.post("/", userController.default);

module.exports = router;
