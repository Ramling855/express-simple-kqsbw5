const express=require('express');
const app=express();
const port=4000;
app.get('/',(req,res)=>{
    res.send('lalalalal')
})
app.listen(port,(req,res)=>{
  res.send(`check port ${port}`)
})