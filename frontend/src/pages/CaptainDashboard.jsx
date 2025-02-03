import React from 'react'
import Header from '../components/Header'
import CaptainDetails from '../components/captain/CaptainDetails'

const CaptainDashboard = () => {
    return (
        <div className='bg-white/50 p-4 flex flex-col h-screen gap-2'>
            <div className='fixed top-4 right-4 left-4'>
                <Header />
            </div>
            <div className='h-3/5 rounded-lg'>
                <img src='/Home.jpg' alt='Home' className='h-full w-full rounded-lg' />
            </div>
            <CaptainDetails/>
        </div>
    )
}

export default CaptainDashboard