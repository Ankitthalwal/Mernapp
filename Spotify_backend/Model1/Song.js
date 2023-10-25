//step 3 make song module 

const mongoose = require('mongoose');

const Song = new mongoose.Schema({
    name: {
        type: String,
        required: true,//true means mandatory whereas false means not compulsary
    },

    thumbnail: {
        type: String,
        required: true,
    },
   track: {
        type: String,
        required: true,
    },
   artist: {
         type:mongoose.Types.ObjectId,
         ref:"User",
    },
  
})

const SongModel = mongoose.model("Song",Song);//first argu is db colleection name and second argu is Schema name
module.exports = SongModel;