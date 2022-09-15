const express = require("express");
const Controller = require("../controllers/controllers");
const router = express.Router();
const studentRouter = require("./students");
const teacherRouter = require("./teacher");

router.get("/", Controller.home);
//GET /register
router.get("/register", Controller.registerForm);
//POST /register
router.post("/register", Controller.postRegister);
router.get("/loginPage", Controller.loginForm);
router.post("/loginPage", Controller.postLogin);

// router.use("/students", studentRouter);
// router.use("/teachers", teacherRouter);

module.exports = router;
