import React, { useContext } from 'react'
import songContext from '../../Context/songContext'

const Singlecard = ({info,PlaySound}) => {
    //one line to get the context value
   //by using this the data in the app.jsx is run on anywhere where this below syntax is used
    const {currentSong,setCurrentSong}= useContext(songContext);

   
    
  return (
    <div  className='flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm  ' onClick={()=>{setCurrentSong(info)}}>{ /* it set the current song  and info give us song data from database

        {/* image url */}
        <div  className='w-12 h-12 bg-white bg-cover bg-center'
            style={{
                    //   background:url("")
            }}
            > </div>
        {/* song name and artist name */}
        <div  className='flex w-full'>
        <div  className='text-white flex justify-center   pl-4 w-5/6 flex-col'>
            <div className='cursor-pointer hover:underline'>
                {info.name}
                </div>
            <div  className='text-xs cursor-pointer hover:underline text-gray-400'>
               {info.artist.firstName + " "+ info.artist.lastName}
                </div>
        </div>
        <div  className='w-1/6 flex items-center justify-center  text-gray-400 text-sm'>
            <div>3:44</div>
            {/* <div className='text-gray-400 text-lg flex items-center justify-center pl-3'>...</div> */}
        </div>
        </div>
    </div>
  )
}

export default Singlecard