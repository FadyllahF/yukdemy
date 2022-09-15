const express = require("express");
const Controller = require("../controllers/controllers");
const UserController = require("../controllers/userController");
const router = express.Router();

<<<<<<< HEAD
router.get("/students", studentController.landingPage);
=======
router.get("/detail", UserController.studentDetail);
>>>>>>> e769a761bef35e21ddcb829ac1ed14c7ff9781dc
// router.get("/", studentController.default);
// router.post("/", studentController.default);
// router.get("/", studentController.default);
// router.get("/", studentController.default);
// router.post("/", studentController.default);
// router.get("/", studentController.default);
// router.post("/", studentController.default);

module.exports = router;
