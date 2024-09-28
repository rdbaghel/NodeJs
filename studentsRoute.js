const express = require("express");
const route = express.Router();
const StuController= require("../controllers/studentController");


route.get("/stuinfo", StuController.stuInformation);
route.post("/datasave", StuController.studatasave);



module.exports = route;
