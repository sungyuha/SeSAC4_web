// 경로를 정의

const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");

router.get("/a", function(req,res){
    res.send("Index");
});

router.get("/register", user.get_user);

module.exports = router;