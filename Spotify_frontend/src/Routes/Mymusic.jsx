import React, { useState, useEffect } from 'react';

import Singlecard from '../Component/shared/Singlecard';
import { makeAuthenticatedGETRequest } from '../Utils/Serverhelper';

import LoggedinContainer from '../Container/Logedinconatiner';


const MyMusic = () => {
    const [songData, SetSongData] = useState([]);



    useEffect(() => {//fetch data one by one
        const getdata = async () => {
            const response = await makeAuthenticatedGETRequest("/song/get/mysong");
            SetSongData(response.data);
        };
        getdata();
    }, []);//we give dependency null because after getting one song page will not reload 



    return (
        <LoggedinContainer currentactivescreen={"myMusic"}>

            <div className='text-white text-xl font-semibold pb-4 pl-2 pt-8'>My Song</div>
            <div className='space-y-3 overflow-auto'>

                {songData.map((item,i) => {
                   
                    return <Singlecard info={item} key={i} PlaySound={() => { }} />
                    //we send Playsound is inside singlcard beacuse we want that only play one song at a time intead of playing multiple song at a time,in single card their is only one song so it played one
                })
                }

            </div>

        </LoggedinContainer>
    );

}






export default MyMusic;
