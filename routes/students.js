const express = require("express");
const Controller = require("../controllers/controllers");
const UserController = require("../controllers/userController");
const router = express.Router();

router.get("/detail", UserController.studentDetail);
// router.get("/", userController.default);
// router.post("/", userController.default);
// router.get("/", userController.default);
// router.get("/", userController.default);
// router.post("/", userController.default);
// router.get("/", userController.default);
// router.post("/", userController.default);

module.exports = router;
