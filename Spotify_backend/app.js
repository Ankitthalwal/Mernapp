const express = require('express')();
const app = express;
const mongoose = require('mongoose');

const JwtStrategy =require("passport-jwt").Strategy,
ExtractJwt=require("passport-jwt").ExtractJwt;
const passport = require('passport');
const User = require('./Model1/User');
const Authroutes = require('./Routes1/Auth');
const Songroutes =  require("./Routes1/Song");
const Playlistroutes = require("./Routes1/Playlist");
const bodyparser= require('body-parser');
const cors = require("cors");
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
const cookieParser = require('cookie-parser');
const dotenv =require('dotenv');
dotenv.config({path:'./.env'});
const BASE_URL = process.env.BASE_URL;

//now make a Api url

mongoose.connect("mongodb+srv://ankitthalwal:5EwSLt1H6CQhsUhk@cluster0.dwgkmh5.mongodb.net/?retryWrites=true&w=majority"
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    //it takes 2 argu 1 is (which db connect to db url)
    //2.is(connection option)
    .then(() => {
        console.log("Connected to Mongo!  ")
    })
    .catch((error) => {
        console.log("not connected");
    })

    //use password Uthentication method...
    let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisisbad";

passport.use(new JwtStrategy(opts,  function(jwt_payload, done) {
  let a = User.findOne({_id: jwt_payload.identifier}, function(err, user){
    
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));



app.get('/', (req, res) => { 
    res.send("hellow worldddddd");
});

app.use("/auth",Authroutes);
app.use("/song",Songroutes);
app.use('/playlist',Playlistroutes);

// app.use('/playlist',Playlistroutes);

app.listen(BASE_URL, () => {
    console.log("port is running on 8080");
}) 



