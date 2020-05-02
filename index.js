const express=require('express');
const port=8000;
const app=express();










//setting up the server
app.listen(port,(err)=>{
  if(err){console.log("err in setting up the server",err);return;}
  console.log("server is up and runing on port",port);
})