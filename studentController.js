const StuModel= require("../models/studentModel")

const stuInformation=(req,res)=>{
    res.send("This is Students Information Page");


}
const studatasave=(req, res)=>{
  const {rollno, name, city}= req.body;

  const student= new StuModel({
    rollno:rollno,
    name:name,
    city:city
  })
  student.save();
  res.send("Data successfully save!!");
}


module.exports={
  stuInformation,
  studatasave
 

}