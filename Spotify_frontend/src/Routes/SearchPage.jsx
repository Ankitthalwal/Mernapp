import React, { useState } from 'react'
import LoggedinContainer from '../Container/Logedinconatiner';
import { Icon } from '@iconify/react';
import { makeAuthenticatedGETRequest } from '../Utils/Serverhelper';
import Singlecard from '../Component/shared/Singlecard';
const SearchPage = () => {
    const [isfocused, setisfocused] = useState(false);
    const [searchText, setSearchtext] = useState("");

    //the data we get after enter or search will be stored in usestate
    const [songData, setSongData] = useState([]);

    const searchSong = async () => {
        const response = await makeAuthenticatedGETRequest(
            "/song/get/songname/" + searchText
        );
        setSongData(response.data);
        setSearchtext("");
    };
    return (
        <LoggedinContainer currentactivescreen={"search"}>
            <div className="w-full py-6">
                <div className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-2 ${isfocused ? "border border-white" : ""}`}>
                    <Icon icon={"iconamoon:search"} className='text-lg items-center' />
                    <input type="text" placeholder='what do you want to listen to?' className='w-full bg-gray-800 focus:outline-none'
                        onFocus={() => {
                            setisfocused(true);
                        }}
                        onBlur={() => {
                            setisfocused(false);
                        }}
                        value={searchText}
                        onChange={(e) => { setSearchtext(e.target.value) }}

                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchSong();
                            }
                        }}
                    />
                </div>
                {
                    songData.length > 0 ? (
                        <div className='pt-10 space-y-3'>
                            <div className="text-white">
                                Search result for key "<span className='font-bold'>{searchText}</span>"
                            </div>
                            {
                                songData.map(item => {
                                    return <Singlecard info={item} key={JSON.stringify(item)}
                                    PlaySound={()=>{}} />
                                })
                            }
                        </div>) : (
                        <div className='pt-10 text-white'>
                            Nothing to show please modified searches
                        </div>


                    )

                }
            </div>
        </LoggedinContainer>
    )
}

export default SearchPage;