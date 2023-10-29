import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Icontxt from '../Component/shared/Icontxt';
import Texthover from '../Component/shared/Textwithhover';
import Textinput from '../Component/shared/textinput';
import CloudinaryUpload from '../Component/shared/CloudinaryUpload'
import {makeAuthenticatedPOSTRequest} from "../Utils/Serverhelper";
import { useNavigate } from 'react-router-dom';
const Uploadingcomp = () => {
    const [name, setName] = useState("");
    const [thumbnail, setthumbnail] = useState("");
    const [playlisturl, setplaylisturl] = useState("");
    const [ulpoadedfilename, setuploadfilename] = useState();
    const Navigate = useNavigate();
    const SubmitSong= async ()=>{
       
        const data ={name,thumbnail,track:playlisturl};
        const response = await makeAuthenticatedPOSTRequest(
            "/song/create",
            data
        );
       if(response.error){
        alert("could not create song")
       }
       alert("Success");
       Navigate("/home");
    }

    return (
        <div className='h-full w-full flex  '>
            <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10'>


                <div>
                    <div className="logo p-6">
                        <Icon icon="logos:spotify" width="125" />

                    </div>
                    <div className='py-5'>
                        <Icontxt iconName={"carbon:home"} displayText={"Home"} />
                        <Icontxt iconName={"iconamoon:search"} displayText={"Search"} active />
                        <Icontxt iconName={"clarity:library-line"} displayText={"Your Library"} />
                        <Icontxt iconName={""} displayText={"My Music"} />
                    </div>
                    <div className='pt-5'>
                        <Icontxt iconName={"icon-park-outline:add"} displayText={"Create Playlist"} />
                        <Icontxt iconName={"solar:chat-square-like-linear"} displayText={"Liked Songs"} />
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
                <div className="navbar  w-fulll h-1/10 bg-black bg-opacity-30 items-center justify-end flex">
                    <div className="flex w-1/2 h-full">
                        <div className='w-2/3 flex justify-around items-center'>
                            <Texthover displayText={"Premium"} />
                            <Texthover displayText={"Support"} />
                            <Texthover displayText={"Download"} />
                            <div className="   border-r  border-white h-1/2"></div>
                        </div>
                        <div className="w-1/3 justify-around h-full items-center flex">
                            <Texthover displayText={"Upload Song"} />
                            <div className='bg-white h-2/3 px-8 flex  justify-center items-center rounded-full cursor-pointer'>
                                AC
                            </div>
                        </div>
                    </div>

                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <div className="text-2xl font-semiold mb-5  text-white mt-8">
                        Upload your Music
                    </div>
                    <div className='w-2/3 flex  space-x-3'>
                        <div className="w-1/2">
                            <Textinput label="Name" value={name} setValue={setName} labelClassname={"text-white"} placeholder={"Name"} />
                        </div>
                        <div className="w-1/2">
                            <Textinput label="Thumbnail" value={thumbnail} setValue={setthumbnail} labelClassname={"text-white"} placeholder={"Thumbnail"} />
                        </div>

                    </div>
                    {/* for if song uploaded or not */}
                    <div className='py-5'>
       
                        {
                            // if uploaded then this
                           ulpoadedfilename? (
                                <div className="bg-white  rounded-full p-3  w-1/3">
                                    {ulpoadedfilename.substring(0,35)}...
                                </div>


                            ) 
                            // if not uploadded give him uploading button
                            : (
                                <CloudinaryUpload seturl={setplaylisturl} setName={setuploadfilename} />
                            )
                        }
                    </div>

                    <div className='bg-white w-40  flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold ' onClick={SubmitSong}>
                       Submit Song
                    </div>

                </div>

            </div>

        </div>

    )
};



export default Uploadingcomp;
