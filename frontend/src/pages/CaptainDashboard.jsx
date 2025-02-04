import React, { useState } from 'react'
import Header from '../components/Header'
import CaptainDetails from '../components/captain/CaptainDetails'
import RidePopUp from '../components/captain/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/captain/ConfirmRidePopUp'

const CaptainDashboard = () => {
    const [ridePopUp, setridePopUp] = useState(true);
    const [confirmRide, setconfirmRide] = useState(false);

    // RidepopUp
    useGSAP(function () {
        if (ridePopUp) {
            gsap.to('.RidePopUp', { transform: 'translateY(0)', duration: 1 })
        }
        else {
            gsap.to('.RidePopUp', { transform: 'translateY(100%)', duration: 1 })
        }
    }, [ridePopUp])

    // confirmRidePopUp
    useGSAP(function () {
        if (confirmRide) {
            gsap.to('.confirmRidePopUp', { transform: 'translateY(0)', duration: 1 })
        }
        else {
            gsap.to('.confirmRidePopUp', { transform: 'translateY(100%)', duration: 1 })
        }
    }, [confirmRide])
    return (
        <div className='bg-white/50 p-4 flex flex-col h-screen gap-2'>
            <div className='fixed top-4 right-4 left-4'>
                <Header />
            </div>
            <div className='h-3/5 rounded-lg'>
                <img src='/Home.jpg' alt='Home' className='h-full w-full rounded-lg' />
            </div>
            <CaptainDetails />

            <div className='fixed w-full z-10 bottom-0 left-0 bg-gray-100 p-2 translate-y-full RidePopUp'>
                <RidePopUp image={"/car.png"} capacity={4} price={150.25} name={"Uber Go"} setridePopUp={setridePopUp} setconfirmRide={setconfirmRide} />
            </div>
            <div className='fixed w-full z-10 bottom-0 left-0 bg-gray-100 p-2 translate-y-full confirmRidePopUp'>
                <ConfirmRidePopUp image={"/car.png"} capacity={4} price={150.25} name={"Uber Go"} setconfirmRide={setconfirmRide} />
            </div>
        </div>
    )
}

export default CaptainDashboard