
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Song = require('../Model1/Song');
const User = require('../Model1/User');

//for creating a song..........
router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const { name, thumbnail, track } = req.body;


  if (!name || !thumbnail || !track) {
    return res.status(301).json({ err: "insuffient details to create a song" });
  }
  const artist = req.user._id;

  const songDetails = {
     name,
      thumbnail, 
      track,
      artist 
     };
  const createsong = await Song.create(songDetails);
  return res.status(200).json(createsong);
})

//getting my song which we created recently(owner)...

router.get('/get/mysong', passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const songs = await Song.find({ artist: req.user._id }).populate("artist");//by using.populate we get full info of artist
    //by using above line we get song list
    return res.status(200).json({ data: songs });
  }
)



//get all song in the database....  form homescreen
router.get('/get/allsong', passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const songs = await Song.find().populate("artist");//by using.populate we get full info of artist
    //by using above line we get song list
    return res.status(200).json({ data: songs });
  }
)


//all song made by us or by artistid
router.get('/get/artist/:artistId', passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const {artistId} = req.params;
    const artist =await User.findOne({_id:artistId});
    if(!artist){
    return res.status(200).json({ err:"Artist does not find" });
     
    }
    const songs = await Song.find({artist:artistId});
    return res.status(200).json({ data: songs });
    
  }
)




//Get route to get a single song by name
router.get("/get/songname/:songName", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { songName } = req.params;

    const songs = await Song.find({ name: songName }).populate("artist");//name==songname


    return res.status(200).json({ data: songs });
  }
);
module.exports = router;


