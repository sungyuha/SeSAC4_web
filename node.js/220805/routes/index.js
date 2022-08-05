const express = require("express");
const VisitorRouter = express.Router();
const visitor = require("../controller/VisitorController");

VisitorRouter.get("/", visitor.index);

module.exports = VisitorRouter;