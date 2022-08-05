const express = require("express");
const VisitorRouter = express.Router();
const visitor = require("../controller/VisitorController");

VisitorRouter.get("/", visitor.index);
VisitorRouter.get("/index", visitor.register);
VisitorRouter.post("/index", visitor.post_register);

module.exports = VisitorRouter;