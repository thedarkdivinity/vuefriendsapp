const mongoose=require('mongoose')
const validator=require('validator')
const friendSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        
        required:true,
        unique:[true, "Phone is  already present"]
    },
    address:{
        type:String,
        required:true,
        
    }
})
const Friend= new mongoose.model('Friend',friendSchema)
module.exports=Friend