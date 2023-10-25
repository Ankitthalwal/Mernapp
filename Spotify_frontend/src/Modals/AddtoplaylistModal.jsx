//copy data from createplaylistmodal
import React from 'react'
import { useState,useEffect } from 'react';
import { makeAuthenticatedGETRequest } from '../Utils/Serverhelper';
const AddtoplaylistModal = ({ closeModel,AddsongtoPlaylist }) => {
   //taken from library.jsx to get all the playlists....
    const [myPlayLists, setMyPlayLists] = useState([]);
    useEffect(()=>{
      const getData=async()=>{
        const response = await makeAuthenticatedGETRequest("/playlist/get/me");
      setMyPlayLists(response.data);

      };
      getData();

    },[])
   
    return (
        <div className='absolute bg-black w-screen h-screen bg-opacity-50   flex justify-center items-center ' onClick={closeModel} >
            <div className='bg-black w-1/3 rounded-md ' onClick={(e) => { e.stopPropagation() }}>
                <div className='text-gray-400 mb-5 font-semibold text-lg '>Select PlayList</div>
              <div className='space-y-4 flex flex-col justify-center items-center'>
                  {
                    myPlayLists.map(item=>{
                        return  <PlayListComponent  AddsongtoPlaylist={AddsongtoPlaylist} info={item}/>
                    })
                  }
              </div>
            </div>
        </div>
    )
};
//make a component which is about to describe about single playlist
const PlayListComponent = ({info,AddsongtoPlaylist})=>{
   return(
     <div className='bg-app-black w-full flex items-center justify-center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 cursor-pointer p-3 '  onClick={()=>{AddsongtoPlaylist(info._id)}}>
       <div>
        <img src={info.thumbnail} alt="thumbnail" />
       </div>
       <div className='text-white font-semibold text-sm'>{info.name}</div>

     </div>
   )
}

export default AddtoplaylistModal;
//render this inside loggedin Container
//now make the function who add the song to playlist by clicking on it in Loggedinconatiner