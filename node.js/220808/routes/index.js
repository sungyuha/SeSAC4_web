const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", user.get_user);
router.get("/join", user.post_user);
router.get("/login", user.post_user);
router.patch("/edit", user.edit_user);
router.delete("/delete", user.delete_user);
module.exports = router;