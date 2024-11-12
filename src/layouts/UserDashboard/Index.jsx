import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function DashboardLayout() {

    return (
        <div className='flex bg-gradient-to-r from-rose-500 to-red-500'>
            <div>
                <Sidebar />
            </div>
            <div className='flex-1 bg-white  px-5'>
                <Header />
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardLayout
