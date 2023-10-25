import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoggedinContainer from '../Container/Logedinconatiner';
import { makeAuthenticatedGETRequest } from '../Utils/Serverhelper';
import Singlecard from '../Component/shared/Singlecard';
const SinglePlaylistview = () => {
    const [playListdetails, setPlayListdetails] = useState({});
    const {playlistId} = useParams();

    useEffect(()=>{
        const getData = async()=>{
            const response =await  makeAuthenticatedGETRequest("/playlist/get/playlist/"+playlistId);
         setPlayListdetails(response);
        }
        getData();
    },[])
  return (
    <LoggedinContainer currentactivescreen={"library"}>
   {
      playListdetails._id && <div>
            <div className='text-white text-xl pt-8'>{playListdetails.name}</div>
      {/* taken from Searchpage.jsx */}
      <div className='pt-10 space-y-3'>
                           
                             {
                                playListdetails.songs.map(item => {
                                    return <Singlecard info={item} key={JSON.stringify(item)}
                                    PlaySound={()=>{}} />
                                })
                            }
                        </div>
      </div>
   }
     
                       


    </LoggedinContainer>
  )
};

export default SinglePlaylistview;