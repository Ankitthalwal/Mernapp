import { createContext } from "react";
//in this context we store the current song detail
const songContext = createContext({
    currentSong:null,//currentSong is a key which null means,initially it does not have any song
    setCurrentSong:(currentSong)=>{//change the current song
        //this below four comes from loggedinContainer as a usestate
    soundPlayed:null,
     setSoundPlayed ; () =>{};
        ispaused:null,
         setispaused;()=>{}; 
    }
})

export default songContext;