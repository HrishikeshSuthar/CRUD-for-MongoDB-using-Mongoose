const router = require("express").Router();
const UserController = require("../controllers/userController");

router.post("/add", UserController.add);

router.get("/all", UserController.getAll);

router.get("/details/:id", UserController.getOne);

router.put("/update/:id", UserController.update);

router.delete("/delete/:id", UserController.deleteOne);

module.exports = router;
