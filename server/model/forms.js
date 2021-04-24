var mongoose=require('mongoose');
var FormSchema=new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true,

    },
    areaCode:{
        type:Number,
        required:true
    },

    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    street:{
        type:String,
        required:true,
    },
    street2:{
        type:String,
        required:true
    },
    ch1:{
        type:String
    },
    ch2:{
        type:String
    },
    ch3:{
        type:String
    },
    ch4:{
        type:String
    },
    ch5:{
        type:String
    },
    ch6:{
        type:String
    },
    m1:{
        type:String
    },
    m2:{
        type:String
    },
    m3:{
        type:String
    },
    m4:{
        type:String
    },
    m5:{
        type:String
    },
    m6:{
        type:String
    },
    comment:{
        type:String
    },
    
    l1:{
        type:String
    },
    l2:{
        type:String
    },
    l3:{
        type:String
    },
    l4:{
        type:String
    },
    l5:{
        type:String
    },
    l6:{
        type:String
    },
    h1:{
        type:String
    },
    h2:{
        type:String
    },
    
    h3:{
        type:String
    },
    
    h4:{
        type:String
    },
    
    h5:{
        type:String
    },
    
    h6:{
        type:String
    },
    
    h7:{
        type:String
    },
    
    h8:{
        type:String
    },
    
    h9:{
        type:String
    },
    h10:{
        type:String
    },
    h11:{
        type:String
    },
    h12:{
        type:String
    }
    
    
    
    


})

const Form=mongoose.model('form',FormSchema);
module.exports=Form;