
const express = require('express');
const router = express.Router();
const passport = require("passport");
const Song = require("../Model1/Song");
const User = require("../Model1/User")
const Playlist = require("../Model1/Playlist");
router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
        return res.status(403).json({ error: "insufffiecnt detail" })
    };
    const playlistdata = {
        name,
        thumbnail,
        songs,
        owner: currentUser._id,
        collaborartor: [],
    };
    const playlistcreate = await Playlist.create(playlistdata);
    return res.status(200).json(playlistcreate);
}
);




//Router2 get a playlsit by Id
//we will get the playlist Id as a route pararmeter and we will return the playlist have
//if we used /:(colon) its means it work as an variable ,/get/ will same but :playlistId can be anything
router.get("/get/playlist/:playlistId", passport.authenticate("jwt", { session: false }), async (req, res) => {

    const { playlistId } = req.params;
    const playlist = await Playlist.findOne({ _id: playlistId }).populate({
        path: "songs",
        populate: {
            path: "artist",
        }
    });
    if (!playlist) {
        return res.status(301).json({ error: "Invalid Id" });

    }
    return res.status(200).json(playlist);

})


//get all playlist made by me
router.get("/get/me", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const artistId = req.user._id;

        const playlists = await Playlist.find({ owner: artistId }).populate("owner");
        return res.status(200).json({ data: playlists });
    }
)



//add a song to the playlist
router.post("/add/song", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const currentUser = req.user;
        const { playlistId, songId } = req.body;
        const playlist = await Playlist.findOne({ _id: playlistId });
        if (!playlist) {
            return res.status(304).json({ err: "Playlist does not exist" });
        }
        //step1 :check currentuser own the playlist or is a collaborator
        if (!playlist.owner.equals(currentUser._id) && !playlist.collaborator.includes(currentUser._id)) {
            return res.status(400).json({ error: "Not allowed" });
        }
        //step2 check if the song is valid song
        const song = await Song.findOne({ _id: songId });
        if (!song) {
            return res.status(304).json({ err: "Song does not exist" })

        }
        //step3 now simply add the song to the playlsit
        playlist.songs.push(songId);//it goes to Playlist.js and check songs[];
        await playlist.save();//to save the data in the database
        return res.status(200).json(playlist);
    }
)














module.exports = router;