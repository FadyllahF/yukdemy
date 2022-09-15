const express = require("express");
const CourseController = require("../controllers/courseController");
const router = express.Router();

router.get("/", CourseController.courseList);
router.get("/:url", CourseController.createQR);

module.exports = router;
