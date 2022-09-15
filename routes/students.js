const express = require("express");
const Controller = require("../controllers/controllers");
const UserController = require("../controllers/userController");
const router = express.Router();

router.get("/detail", UserController.studentDetail);
// router.get("/", studentController.default);
// router.post("/", studentController.default);
// router.get("/", studentController.default);
// router.get("/", studentController.default);
// router.post("/", studentController.default);
// router.get("/", studentController.default);
// router.post("/", studentController.default);

module.exports = router;
