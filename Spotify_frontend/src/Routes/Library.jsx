import React from 'react'
import LoggedinContainer from '../Container/Logedinconatiner'
import { useState,useEffect } from 'react';
import { makeAuthenticatedGETRequest } from '../Utils/Serverhelper';
import { useNavigate } from 'react-router-dom';
const Library = () => {
    const [myPlayLists, setMyPlayLists] = useState([]);
    useEffect(()=>{
      const getData=async()=>{
        const response = await makeAuthenticatedGETRequest("/playlist/get/me");
      setMyPlayLists(response.data);

      };
      getData();

    },[])
  return (
    <LoggedinContainer currentactivescreen={"library"}>
      <div className='text-white text-xl pt-8'>My PlayList</div>
      <div className='py-5 grid gap-5 grid-cols-5'>
        {
          myPlayLists.map(item=>{
            return <Card key={JSON.stringify(item)} title={item.name} description="" imgUrl={item.thumbnail}  playlistId={item._id} />
          })
        }
        
        
        </div>
    </LoggedinContainer>
  )
};

const Card = ({ title, description,imgUrl,playlistId }) => {
  const navigate = useNavigate();
  return (
      <div className='bg-black bg-opacity-60 w-full p-4 rounded-lg ' onClick={()=>{navigate("/playlist/"+playlistId)}}>
          <div className='pb-4 pt-2'>
              <img className='w-full rounded-md' src={imgUrl} alt="label" />
          </div>
          <div className="text-white font-semibold py-3">{title}</div>
          <div className="text-gray-500 text-sm ">{description}</div>
      </div>
  )
}


export default Library