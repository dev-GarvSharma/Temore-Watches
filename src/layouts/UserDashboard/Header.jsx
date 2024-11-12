import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import LocalStorageService from '../../services/localstorageService';

function Header() {
    const userData = LocalStorageService.getUserData() || ''
    const appUrl = import.meta.env.VITE_API_URL;
    return (
        <div>
            <div className='w-full mt-10 h-20 rounded-lg flex items-center justify-between px-5 shadow-lg sticky top-5'>
                <div className='text-xl'>
                    <h1>Welcome , <span className='font-bold text-2xl'>{userData.name || 'user'}</span></h1>
                </div>
                <div className='flex gap-2'>
                    <IoMdSettings className='p-2 bg-[#f2f5ff] rounded-full text-2xl h-12 w-12' />
                    <div className='relative'>
                        <FaBell className='p-2 bg-[#f2f5ff] rounded-full text-2xl h-12 w-12' />
                        <span className='absolute top-0 right-0 bg-red-500 h-4 w-4 rounded-full text-xs text-white flex items-center justify-center'>5</span>
                    </div>
                    <img src={`${appUrl}${userData.profile_pic}` || <FaUserCircle />} className='p-2 bg-[#f2f5ff] rounded-full text-2xl h-12 w-12' />
                </div>

            </div>
        </div>
    )
}

export default Header
