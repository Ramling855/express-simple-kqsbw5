const express=require('express')
const app=express();
const port=4000;
const path=require('path')
app.get('/',(req,res)=>{
  res.sendFile(path.resolve('./pages/data.html'))

})
app.listen(port,()=>{
  console.log(`port is ${port}`)
})