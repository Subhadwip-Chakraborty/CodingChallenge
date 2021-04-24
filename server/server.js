const express=require('express')
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const routes=require('./routes/app');
const Form=require('./model/forms');

const PORT=3000;
const app=express();

mongoose.connect("mongodb://127.0.0.1:27017/deep",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(par=>{
    console.log("Connect Successfull");
})
.catch(err=>{
    console.log("Error Cannot Connect")
})

app.use(bodyParser.json());
app.use(cors());


app.use("/app",routes)
app.use((err,req,res,next)=>{
    res.status(422).send({error:error.message});
})

app.listen(PORT,function(){
    console.log("Server is running  on localhost"+PORT)
})