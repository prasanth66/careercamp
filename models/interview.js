const mongoose=require('mongoose');

//creating interview schema
const interviewSchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    results:{
        type:String,
        required:true
    }
   
   
},{timestamps:true});

//storing data collectionn in interview
const Interview=mongoose.model('interview',interviewSchema);

//exporting schema
module.exports=Interview;