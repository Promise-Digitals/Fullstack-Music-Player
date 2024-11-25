import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='bg-[#003a10] min-h-screen pl-[4vw]'>
            <img src={assets.logo} alt="" className='mt-5 w-[100px] mr-5 hidden sm:block'/>
            <img src={assets.logo_small} alt="" className='mt-5 w-[40px] mr-5 sm:hidden block' />

            <div className='flex flex-col gap-5 mt-10'>
                <NavLink to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[10px] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
                    <img src={assets.add_song} alt="" className='w-5' />
                    <p className='hidden sm:block'>Add Song</p>
                </NavLink>

                <NavLink to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[10px] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
                    <img src={assets.song_icon} alt="" className='w-5' />
                    <p className='hidden sm:block'>List Song</p>
                </NavLink>

                <NavLink to='/add-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[10px] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
                    <img src={assets.add_album} alt="" className='w-5' />
                    <p className='hidden sm:block'>Add Album</p>
                </NavLink>

                <NavLink to='/list-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[10px] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
                    <img src={assets.album_icon} alt="" className='w-5' />
                    <p className='hidden sm:block'>List Album</p>
                </NavLink>

            </div>

        </div>
    )
}

export default Sidebar
