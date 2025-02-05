import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronUp, LogOut } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRidePopUp from '../components/captain/FinishRidePopUp'

const CaptainRiding = () => {
    const [finishRidePanel, setfinishRidePanel] = useState(false)
    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to('.finishRidePanel', { transform: 'translateY(0)', duration: 0.75 })
        }
        else {
            gsap.to('.finishRidePanel', { transform: 'translateY(100%)', duration: 0.75 })
        }
    }, [finishRidePanel]);
    return (
        <div className='bg-white/50 flex flex-col h-screen gap-2'>
            <Link to={'/dashboard'} className='fixed h-12 w-12 bg-white flex items-center justify-center rounded-full right-5 top-4'>
                <LogOut className='size-6' strokeWidth={2.5} />
            </Link>
            <div className='h-4/5 rounded-t-lg'>
                <img src='/Home.jpg' alt='Home' className='h-full w-full rounded-t-lg object-cover' />
            </div>
            <div className='h-1/5 p-6 bg-yellow-400 gap-5 text-center rounded-b-lg' onClick={()=>setfinishRidePanel(true)}>
                <div className='text-2xl font-bold flex justify-center'><ChevronUp className='size-6' /></div>
                <h4 className='text-2xl font-bold'>4 km away</h4>
                <button className='btn font-semibold mt-5 bg-green-500 w-full text-white'>Complete Ride</button>
            </div>

            <div className='fixed w-full z-10 bottom-0 left-0 bg-gray-100 p-2 translate-y-full finishRidePanel'>
                <FinishRidePopUp setfinishRidePanel={setfinishRidePanel} />
            </div>
        </div>
    )
}

export default CaptainRiding