
const mongoose = require('mongoose');

const Playlist = new mongoose.Schema({
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
        required: false,
    },
    owner: {
        type:mongoose.Types.ObjectId,
        ref:"User",
   },
 
   songs:[
       {
           type:mongoose.Types.ObjectId,//any type:mongose required a capital letter ref
          ref:"Song",
       },
   ],
   collaborator:[
       {
           type:mongoose.Types.ObjectId,
           ref:"User",
       },
   ],
})

const PlaylistModel = mongoose.model("Playlist",Playlist);
module.exports = PlaylistModel;