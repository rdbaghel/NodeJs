const express = require("express");
const app = express();
const mongoose= require("mongoose");
const StuRoute= require("./routes/studentsRoute");
const bodyParser = require('body-parser');


mongoose.connect("mongodb://127.0.0.1:27017/Dev").then(()=>{
    console.log("DB Successfully connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.use("/student", StuRoute);






app.listen(8000,()=>{
    console.log("server running on 8000");

})