const express = require("express");
const Controller = require("../controllers/controllers");
const router = express.Router();
const userRouter = require("./user");

router.use("/user", userRouter);

router.get("/", Controller.home);
//GET /register
router.get("/register", Controller.registerForm);
//POST /register
router.post("/register", Controller.postRegister);
router.get("/loginPage", Controller.loginForm);
router.post("/loginPage", Controller.postLogin);

// router.use("/user", studentRouter);

module.exports = router;
