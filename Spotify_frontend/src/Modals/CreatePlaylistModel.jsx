
//for making playlist tab
import React from 'react'
import { useState } from 'react';
import Textinput from '../Component/shared/textinput';
import { makeAuthenticatedPOSTRequest } from '../Utils/Serverhelper';
const CreatePlaylistModel = ({ closeModel }) => {
    const [playlistName, setplaylistName] = useState("");
    const [playlistthumbnail, setplaythumbnail] = useState("");

    //call api
    const createPlaylist = async () => {
        const response = await makeAuthenticatedPOSTRequest("/playlist/create", { name: playlistName, thumbnail: playlistthumbnail, songs: [] });
        if(response._id){
            closeModel();
        }
     
        alert("success")
    }
    return (
        <div className='absolute bg-black w-screen h-screen bg-opacity-50   flex justify-center items-center ' onClick={closeModel}>
            <div className='bg-black w-1/3 rounded-md ' onClick={(e) => { e.stopPropagation() }}>
                <div className='text-gray-400 mb-5 font-semibold text-lg '>create playlist</div>
                <div className='space-y-3 flex flex-col justify-center items-center'>
                    <Textinput label="Name" labelClassname={"text-white "} placeholder={"Name"} value={playlistName} setValue={setplaylistName} />
                    <Textinput label="Thubmnail" labelClassname={"text-white"} placeholder={"Name"} value={playlistthumbnail} setValue={setplaythumbnail} />
                   

                    <div className='bg-white w-1/3 text-black font-semibold justify-center flex items-center py-3 mt-2' onClick={createPlaylist} > create playlist</div>
                </div>
            </div>
        </div>
    )
}

export default CreatePlaylistModel;