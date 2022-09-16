const express = require("express");
const CourseController = require("../controllers/courseController");
const router = express.Router();

router.get("/", CourseController.courseList);
router.get("/:url", CourseController.createQR);
router.get("/:id/delete", CourseController.deleteCourse);

module.exports = router;
