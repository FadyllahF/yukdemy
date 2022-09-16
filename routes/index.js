const express = require("express");
const Controller = require("../controllers/controllers");
const router = express.Router();
const studentRouter = require("./students");
const teacherRouter = require("./teacher");

router.get("/", Controller.home);
// router.use("/students", studentRouter);
// router.use("/teachers", teacherRouter);

module.exports = router;
