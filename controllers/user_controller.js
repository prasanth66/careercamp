const User=require('../models/register');



//event to register

module.exports.register=async function(req,res){
    try {
        
        //checking whether email alredy registered
    let user=await User.find({email:req.body.email});

    //if email doesnt exist exists
    if( user.length==0){
      User.create({
          name:req.body.name,
          email:req.body.email,
          password:req.body.password
      })
      
      //TODO generate success notification saying successfully registered
      console.log("Registered Successfully");
    }
    //if email exists
    else{
       // TODO generate notification saying email already exists
       console.log("email already registered");
      
    }
        
    res.redirect('back');

    } catch (error) {
        console.log("error in registering",error);
        res.redirect('back');
    }
}



//event to login

module.exports.login=async function(req,res){
    try {
      //verifyig the credentials from database
        let user=await User.find({
            email:req.body.email,
            password:req.body.password
        })

        //if credentials are invalid
        if(user.length==0){
             //TODO notify username/password failed
             console.log("invalid username/password");
             res.redirect('back');
        }

        //if credentials are valid
        else{
           //TODO notify saying logged in sucessfully
           console.log("logged in successfully");
           res.render('base');
        }
        
    } catch (error) {
        console.log("error in logging in",error);
        res.redirect('back');
    }
}