import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Icontxt from '../Component/shared/Icontxt';
import Texthover from '../Component/shared/Textwithhover';
import Textinput from '../Component/shared/textinput';
import CloudinaryUpload from '../Component/shared/CloudinaryUpload'
import {makeAuthenticatedPOSTRequest} from "../Utils/Serverhelper";
import { useNavigate } from 'react-router-dom';
import LoggedinContainer from '../Container/Logedinconatiner';
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
        


        <LoggedinContainer currentactivescreen={"myMusic"}>
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

       </LoggedinContainer>

    )
};



export default Uploadingcomp;
