//now our second step is that make a user model


const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true,
        private:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    username: {
        type: String,
        required: true,
    },
    likeSongs: {
        //it contains array
        type: String,
        default: "",
    },
    likedPlaylist: {
        //it contains array
        type: String,
        default: "",
    },
})

const UserModel = mongoose.model('User',User);
module.exports = UserModel;


