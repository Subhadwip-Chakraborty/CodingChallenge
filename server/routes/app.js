const express=require('express');
const router=express.Router();
var Form=require('../model/forms');
router.post('/forms',async(req,res)=>{
    var formObj=new Form(req.body);
    console.log(formObj);
    const user=new Form(formObj);
    result=await user.save();
    res.send(result)

})

module.exports=router;