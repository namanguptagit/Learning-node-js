//Core Module
const path = require('path');

const rootDir = require("../utils/pathUtil");
//External Module
const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home",(req, res, next) => {
    res.sendFile(path.join(rootDir,  "views", "addHome.html"));
});

hostRouter.post("/add-home",(req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

module.exports = hostRouter;