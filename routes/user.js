const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.userList);
// rouer.get("/addCourse", userController.addForm)
// router.get("/", userController.default);
// router.post("/", userController.default);
// router.get("/", userController.default);
// router.get("/", userController.default);
// router.post("/", userController.default);
// router.get("/", userController.default);
// router.post("/", userController.default);

module.exports = router;
