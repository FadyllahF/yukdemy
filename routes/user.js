const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.userList);
<<<<<<< HEAD
// rouer.get("/addCourse", userController.addForm)
// router.get("/", userController.default);
// router.post("/", userController.default);
// router.get("/", userController.default);
=======
router.get("/add", userController.addCourseForm);
router.post("/add", userController.addCourse);
router.get("/:id/delete", userController.deleteUser);
>>>>>>> e769a761bef35e21ddcb829ac1ed14c7ff9781dc
// router.get("/", userController.default);
// router.post("/", userController.default);
// router.get("/", userController.default);
// router.post("/", userController.default);

module.exports = router;
