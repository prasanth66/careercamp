const mongoose=require('mongoose');

//creating student schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    courses:{
        type:Schema.Types.ObjectId,
        ref:"course"
    },
    interviews:{
        type:Schema.Types.ObjectId,
        ref:"interview"
    }
   
},{timestamps:true});

//storing data collectionn in student
const Student=mongoose.model('student',studentSchema);

//exporting schema
module.exports=Student;