import React from 'react'
import { Icon } from '@iconify/react';
import Icontxt from '../Component/shared/Icontxt';
import Texthover from '../Component/shared/Textwithhover';

const Homecomp = () => {
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



    return (
        <div className='h-full w-full flex  '>
            <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10'>


                <div>
                    <div className="logo p-6">
                        <Icon icon="logos:spotify" width="125" />

                    </div>
                    <div className='py-5'>
                        <Icontxt iconName={"carbon:home"} displayText={"Home"} targetLink={"/signup"}  active/>
                        <Icontxt iconName={"iconamoon:search"} displayText={"Search"} targetLink={"/signup"}  />
                        <Icontxt iconName={"clarity:library-line"} displayText={"Your Library"} targetLink={"/signup"}/>
                    </div>
                    <div className='pt-5'>
                        <Icontxt iconName={"icon-park-outline:add"} displayText={"Create Playlist"}  targetLink={"/signup"}/>
                        <Icontxt iconName={"solar:chat-square-like-linear"} displayText={"Liked Songs"}  targetLink={"/signup"}/>
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
                        <div className='w-3/5 flex justify-around items-center'>
                            <Texthover displayText={"Premium"} targetLink={"/signup"}/>
                            <Texthover displayText={"Support"} targetLink={"/signup"}/>
                            <Texthover displayText={"Download"} targetLink={"/signup"} />
                            <div className="   border-r  border-white h-1/2"></div>
                        </div>
                        <div className="w-2/5 justify-around h-full items-center flex">
                            <Texthover  displayText={"Sign up"}  targetLink={"/signup"} />
                            <Texthover displayText={"log in"}  targetLink={"/login"} />
                          
                        </div>
                    </div>
                </div>
                <div className="content p-8 ">
                    <Playlistview titletext="Focus" cardsdata={focusdata} />
                    <Playlistview titletext="Spotify Playlist" cardsdata={SpotifyPlaylistdata} />
                    <Playlistview titletext="Top on india" cardsdata={Indiaplaylistdata} />
                </div>
            </div>

        </div>

    )
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


export default Homecomp;
