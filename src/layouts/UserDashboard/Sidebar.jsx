import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import LocalStorageServices from '../../services/localstorageService'
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../features/Auth/authSlice';

function Sidebar() {

    const [activeSidebar, setActiveSidebar] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleOnClick = () => {
        dispatch(setLoggedIn(false))
        LocalStorageServices.clearAuthData()
        navigate('/')
    }

    const sidemenu = [
        {
            name: <span className='flex items-center gap-2 px-10'><MdDashboard className='text-3xl' /> {activeSidebar == true ? 'Dashboard' : ''}</span>,
            index: 0,
            link: '/dashboard',
        },
        {
            name: <span className='flex items-center gap-2 px-10 '><FaUser className='text-3xl' /> {activeSidebar == true ? 'My Profle' : ''}</span>,
            index: 0,
            link: '/dashboard/profile',
        },
        {
            name: <span className='flex items-center gap-2 px-10 '><FaShoppingBag className='text-3xl' /> {activeSidebar == true ? 'Orders' : ''}</span>,
            index: 0,
            link: '/dashboard/orders',
        },
        {
            name: <span className='flex items-center gap-2 px-10 '><IoSettings className='text-3xl' /> {activeSidebar == true ? 'Settings' : ''}</span>,
            index: 0,
            link: '/dashboard/settings',
        },
    ];
    const onClickHandle = (item) => {
        if (!item.submenu) {
            navigate(item.link);
            onHide();  // Hide the sidemenu after navigating for items without submenu
        } else {
            setActiveIndex(activeIndex === item.index ? null : item.index);
        }
    };

    return (
        <div className={`relative flex justify-center  ${activeSidebar == true ? 'w-[250px] rounded-tr-[50px] rounded-br-[50px]' : 'w-28 rounded-tr-xl rounded-br-xl'} min-h-screen  transition-all`}>
            <button onClick={() => setActiveSidebar(prevState => !prevState)}
                className='absolute top-10 text-4xl text-white'
            >
                {activeSidebar == true ? <TbLayoutSidebarLeftCollapseFilled /> : <TbLayoutSidebarRightCollapseFilled />}
            </button>
            <div className='pt-32 text-left text-white text-xl mx-2'>
                <ul className='flex flex-col space-y-2'>
                    {sidemenu.map((item) => (
                        <li
                            key={item.index}
                            className={`relative  py-2 ${item.submenu ? 'dropdown-icon' : ''} rounded-lg cursor-pointer ${location.pathname === item.link ? ' bg-white text-black' : ''}`}
                            onClick={() => onClickHandle(item)}
                        >
                            {item.name}
                            {item.submenu && item.submenu.length > 0 && activeIndex === item.index && (
                                <ul className="pl-5">
                                    {item.submenu.map((menuItem) => (
                                        <li
                                            key={menuItem.index}
                                            className={`px-3 py-2 rounded-lg cursor-pointer ${location.pathname === menuItem.link ? 'bg-orange-500 text-white' : ''}`}
                                            onClick={() => {
                                                navigate(menuItem.link);
                                                onHide();  // Hide the sidemenu after navigating submenu items
                                            }}
                                        >
                                            {menuItem.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <button
                className={`flex items-center gap-2 absolute bottom-5 text-black ${activeSidebar == true ? 'bg-white p-2 px-10 rounded-lg' : 'rounded-full bg-white p-2'}  text-lg`}
                onClick={handleOnClick}
            >
                <RiLogoutBoxRLine />
                {activeSidebar == true ? 'Logout' : ''}
            </button>
        </div>
    )
}

export default Sidebar
