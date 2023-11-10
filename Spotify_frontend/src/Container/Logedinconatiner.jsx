import React, { useContext,  useLayoutEffect, useRef } from 'react'
import { Icon } from '@iconify/react';
import Icontxt from '../Component/shared/Icontxt';
import Texthover from '../Component/shared/Textwithhover';
import { Howl, Howler } from 'howler';
import { useState } from 'react';
import songContext from '../Context/songContext';
import CreatePlaylistModel from '../Modals/CreatePlaylistModel';
import AddtoplaylistModal from '../Modals/AddtoplaylistModal';
import { makeAuthenticatedPOSTRequest } from '../Utils/Serverhelper';
import { useNavigate } from 'react-router-dom';



const LoggedinContainer = ({ children ,currentactivescreen}) => {
    //from mymusic component
  
    const {currentSong, setCurrentsong,soundPlayed,setSoundPlayed,ispaused,setispaused} = useContext(songContext);//when the valued of context is changed it call or trigger -> the useLayout---->
    //----> function and then it calls the---> changedsound function  usecontext-->uselayout-->changeSong
        //for playlistmodel
        const[createPlaylistModalopen,setPlaylistModelopen]=useState(false)//initially the value is false
          //for addsongtoplaylist
        const[AddtoPlaylistModalopen,setAddtoPlaylistModelopen]=useState(false)//initially the value is false


    const firstupdate= useRef(true);
const Nav = useNavigate();

  useLayoutEffect (()=>{ //useLayout effect is call after alll changes done
       if(firstupdate.current){
          firstupdate.current=false;
          return;
       }
        if(!currentSong){
            return;
        }
        changedSong(currentSong.track);
    },[currentSong && currentSong.track]);//in any case our song is changed then we call cuurentSong.track



////add Song to the playlist by clicking he playlists
 const AddsongtoPlaylist= async(playlistId) => {
      const songId = currentSong._id;
      const payload = {playlistId,songId};
      const  response = await makeAuthenticatedPOSTRequest("/playlist/add/song",payload);
      if(response){
        setAddtoPlaylistModelopen(false);
      }
      
 }




    //for playing song....
const PlaySound =()=>{
      if(!soundPlayed){
        return;
      }
      soundPlayed.play();
}

    const changedSong = (songSrc) => { //changedSong called when someone trigger the uselayouteoefect
        if (soundPlayed) {
            soundPlayed.stop();
        }
        
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
        setispaused(false);
    };

    const pauseSound = () => {
        soundPlayed.pause();

        
    }


    const togglePause = () => {
        if (ispaused) {
            PlaySound();
            setispaused(false);
        }
        else {
            pauseSound();
            setispaused(true); 
        }

    }
 
     
    const logout=()=>{
        document.cookie.split(";").forEach((c)=>{
            document.cookie =c
            .replace(/^ +/, "")
            .replace(/=.*/,"=;expires=" +new Date().toUTCString() +";path=/"); 
         });
         Nav("/")
    }

    return (
        <div className='h-full w-full bg-app-black'>
         {
                createPlaylistModalopen &&     <CreatePlaylistModel  closeModel={()=>{setPlaylistModelopen(false)}}/>//createPlaylistModel is only show if createplaylistnodalopen state is True

         }
           {
                 AddtoPlaylistModalopen && <AddtoplaylistModal  closeModel={()=>{setAddtoPlaylistModelopen(false)}}  AddsongtoPlaylist={AddsongtoPlaylist}/>//createPlaylistModel is only show if createplaylistnodalopen state is True

         }
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
                <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10'>

                    <div>
                        <div className="logo p-6">
                            <Icon icon="logos:spotify" width="125" />

                        </div>
                        <div className='py-5'>
                            <Icontxt iconName={"carbon:home"} displayText={"Home"} active={currentactivescreen==="home"} targetLink={"/home"}/>
                            <Icontxt iconName={"iconamoon:search"} displayText={"Search"}  active={currentactivescreen==="search"} targetLink={"/searchpage"}/>
                            <Icontxt iconName={"clarity:library-line"} displayText={"Your Library"} active={currentactivescreen==="library"} targetLink={"/library"} />
                            <Icontxt iconName={"mingcute:music-fill"} displayText={"My Music"} targetLink={"/myMusic" }  active={currentactivescreen==="myMusic"}/>
                        </div>
                        <div className='pt-5'>
                            <Icontxt iconName={"icon-park-outline:add"} displayText={"Create Playlist"} onClick={()=>{setPlaylistModelopen(true)}} />
                          
                        </div>
                    </div>



                    <div className='px-3' >
                        <div className="border border-gray-100 hover:border-white cursor-pointer  text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center">
                            <Icon icon="mingcute:earth-line" />
                            <div className="ml-2 text-sm font-semibold">
                                English
                            </div>
                        </div>

                    </div>
                </div>


                <div className='h-full  w-4/5  bg-app-black overflow-auto'>
                    <div className="navbar  w-fulll h-1/10 bg-black bg-opacity-30  items-center justify-end flex">
                        <div className="flex w-1/2 h-full">
                            <div className='w-3/5 flex justify-around items-center'>
                             
                                <div className="   border-r  border-white h-1/2"></div>
                            </div>
                            <div className="w-2/5 justify-around h-full items-center flex">
                                <Texthover displayText={"Upload Song"}  targetLink={"/upload"} />
                                <div onClick={(e)=>{e.preventDefault();logout()}} className='bg-red-400 h-2/3 w-1/5 px-8  flex  justify-center items-center rounded-full cursor-pointer'>
                                    Logout
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content p-8 pt-8 ">
                        {children}
                    </div>
                </div>


            </div> 
            {/* footer for song playing */}
            {
                currentSong &&
                <div className=" h-1/10 w-full bg-black bg-opacity-30  text-white flex items-center px-4 ">
                    <div className='w-1/4 justify-start flex'>
                        <img src={currentSong.thumbnail} alt="" />
                        <div className='pl-4'>
                            <div className='text-sm'>{currentSong.name}</div>
                            <div className='text-xs text-gray-500 hover:underline cursor-pointer'>{currentSong.artist.firstName + " " +currentSong.artist.lastName}</div>
                        </div>

                    </div>
                    <div className='w-1/2 h-full flex justify-center  flex-col items-center'>
                        <div className='flex w-1/3 justify-between items-center'>
                            <Icon icon="ph:shuffle" fontSize={27} className='cursor-pointer  text-gray-400 hover:text-white' />
                            <Icon icon={ispaused ? "carbon:play-filled" : "carbon:pause-filled"} fontSize={40} className='cursor-pointer  text-gray-400 hover:text-white  ' onClick={togglePause} />

                            <Icon icon="ic:outline-repeat" fontSize={27} className='cursor-pointer  text-gray-400 hover:text-white' />


                        </div>
                    </div>
                    <div className='w-1/4 flex justify-end pr-4 space-x-4 items-center'>
                        {/* for add song to the playlist */}
                      <Icon icon="icon-park-outline:add" fontSize={30} className='cursor-pointer text-gray-500 hover:text-white' onClick={()=>{setAddtoPlaylistModelopen(true)}}/>
                      <Icon icon="ph:heart" fontSize={25} className='cursor-pointer text-gray-500 hover:text-white'/>

                    </div>
                </div>

            }

        </div>

    )

};




export default LoggedinContainer;
