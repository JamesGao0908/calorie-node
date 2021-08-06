const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 5,
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minlength : 6,
    },
    firstname : {
        type : String,
        required : true,
        minlength : 3,
    },
    lastname : {
        type : String,
        required : false,
        minlength : 2,
    },
    profileURL : {
        type : String,
        required : false,
        minlength : 1,
    },
},{
    timestamps : true,
});

const User = mongoose.model( 'User', userSchema );

module.exports = User;