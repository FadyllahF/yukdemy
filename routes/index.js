const express = require("express");
const Controller = require("../controllers/controllers");
const router = express.Router();
const userRouter = require("./user");
const courseRouter = require("./course");

router.use("/user", userRouter);
router.use("/course", courseRouter);

router.get("/", Controller.home);
router.get("/register", Controller.registerForm);
router.post("/register", Controller.postRegister);
router.get("/loginPage", Controller.loginForm);
router.post("/loginPage", Controller.postLogin);

module.exports = router;
