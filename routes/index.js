const express = require("express");
const Controller = require("../controllers/controllers");
const router = express.Router();
const userRouter = require("./user");
const courseRouter = require("./course");
const studentRouter = require("./students");

router.use("/user", userRouter);
router.use("/course", courseRouter);
router.use("/student", studentRouter);

router.get("/", Controller.home);
router.get("/register", Controller.registerForm);
router.post("/register", Controller.postRegister);
router.get("/loginPage", Controller.loginForm);
router.post("/loginPage", Controller.postLogin);

module.exports = router;
