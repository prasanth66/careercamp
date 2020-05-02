const mongoose=require('mongoose');

//creating register schema
const courseSchema=new mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    }
   
},{timestamps:true});

//storing data collectionn in courses
const Course=mongoose.model('course',courseSchema);

//exporting schema
module.exports=Course;