const express = require("express");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.get("/", studentController.landingPage);
// router.get("/", studentController.default);
// router.post("/", studentController.default);
// router.get("/", studentController.default);
// router.get("/", studentController.default);
// router.post("/", studentController.default);
// router.get("/", studentController.default);
// router.post("/", studentController.default);

module.exports = router;
