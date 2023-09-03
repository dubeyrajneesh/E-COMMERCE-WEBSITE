import mongoose from 'mongoose' ;

const userSignupSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true ,
        trim: true
    },

    lastname:{
        type: String,
        required: true ,
        trim: true

    },
    username:{
        type: String,
        required: true ,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: true ,
        trim: true,
        unique: true 
    },
    password:{
        type: String,
        required: true ,
        trim: true,
        unique:true
    },
    mobile:{
        type: String,
        required: true ,
        trim: true
    }
})

const user = mongoose.model('user' , userSignupSchema)

export default user;