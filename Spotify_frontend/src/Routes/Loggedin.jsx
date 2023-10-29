






import React, { useState, useEffect } from 'react';

import Singlecard from '../Component/shared/Singlecard';
import { makeAuthenticatedGETRequest } from '../Utils/Serverhelper';

import LoggedinContainer from '../Container/Logedinconatiner';


const Loggedincomp = () => {
    const [songAllData, SetAllSongData] = useState([]);



    useEffect(() => {//fetch data one by one
        const getdata = async () => {
            const response = await makeAuthenticatedGETRequest("/song/get/allsong");
            SetAllSongData(response.data);
        };
        getdata();
    }, []);//we give dependency null because after getting one song page will not reload 



    return (
        <LoggedinContainer currentactivescreen={"myMusic"}>

            <div className='text-white text-xl font-semibold pb-4 pl-2 pt-8'>All Songs</div>
            <div className='space-y-3 overflow-auto'>

                {songAllData.map((item,i) => {
                   
                    return <Singlecard info={item} key={i} PlaySound={() => { }} />
                })
                }

            </div>

        </LoggedinContainer>
    );

}

export default Loggedincomp;
