import React from 'react'
import { Icon } from '@iconify/react';
import Icontxt from '../Component/shared/Icontxt';
import Texthover from '../Component/shared/Textwithhover';
import { Howl, Howler } from 'howler';
import { useState } from 'react';
import LoggedinContainer from '../Container/Logedinconatiner';
const focusdata = [
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",

    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
];

const SpotifyPlaylistdata = [
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",

    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
];
const Indiaplaylistdata = [
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",

    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
    {
        title: "peacefull piano",
        description: "Relaxand indulge with beautiful plano pano",
    },
];


  const Loggedincomp =()=>{
        return  (
            <LoggedinContainer currentactivescreen="home" >
                <Playlistview titletext="Focus" cardsdata={focusdata} />
                        <Playlistview titletext="Spotify Playlist" cardsdata={SpotifyPlaylistdata} />
                        <Playlistview titletext="Top on india" cardsdata={Indiaplaylistdata} />
             </LoggedinContainer>
        );
  };
const Playlistview = ({ titletext, cardsdata, }) => {
    return (
        <div className='text-white'>
            <div className='text-2xl font-semibold mb-5'>
                {titletext}
            </div>
            <div className="w-full flex justify-between space-x-4">
                {
                    cardsdata.map((item) => {
                        return <Card title={item.title} description={item.description} />
                    })
                }

            </div>

        </div>
    )
}
const Card = ({ title, description }) => {
    return (
        <div className='bg-black bg-opacity-60 w-1/5 p-4 rounded-lg'>
            <div className='pb-4 pt-2'>
                <img className='w-full rounded-md' src="1.png" alt="label" />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm ">{description}</div>
        </div>
    )
}


export default Loggedincomp;
