import React, { useState } from 'react'
import Header from '../components/Header'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react'
import LocationSearchPanel from '../components/user/LocationSearchPanel';
import ChooseVehicle from '../components/user/ChooseVehicle';
import ConfirmRide from '../components/user/ConfirmRide';
import LookingForDriver from '../components/user/LookingForDriver';
import WaitingForDriver from '../components/user/WaitingForDriver';
const Dashboard = () => {
  const [input, setinput] = useState({
    source: '',
    destination: ''
  })
  const [panelOpen, setpanelOpen] = useState(false);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const [confirmRide, setconfirmRide] = useState(false);
  const [vehicleFound, setvehicleFound] = useState(false);
  const [waitForDriver, setwaitForDriver] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(input);
  }

  // animation for location panel
  useGSAP(function () {
    if (panelOpen) {
      gsap.to('.line', { top: "5%", duration: 1 })
      gsap.to('.arrow', { opacity: 1, duration: 1 })
      gsap.to('.panel', { height: '60vh', opacity: 1, padding: '1rem', duration: 1 })
    }
    else {
      gsap.to('.arrow', { opacity: 0, duration: 1 })
      gsap.to('.line', { top: "67%", duration: 1 })
      gsap.to('.panel', { height: 0, opacity: 0, duration: 1 })
    }
  }, [panelOpen])

  // animation for vehicle panel
  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to('.vehiclePanel', { transform: 'translateY(0)', duration: 1 })
    }
    else {
      gsap.to('.vehiclePanel', { transform: 'translateY(100%)', duration: 1 })
    }
  }, [vehiclePanel])

  // animation for confirm Ride panel
  useGSAP(function () {
    if (confirmRide) {
      gsap.to('.confirmRide', { transform: 'translateY(0)', duration: 1 })
    }
    else {
      gsap.to('.confirmRide', { transform: 'translateY(100%)', duration: 1 })
    }
  }, [confirmRide])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to('.vehicleFound', { transform: 'translateY(0)', duration: 1 })
    }
    else {
      gsap.to('.vehicleFound', { transform: 'translateY(100%)', duration: 1 })
    }
  }, [vehicleFound])

  // animation for wait for Driver Page
  useGSAP(function () {
    if (waitForDriver) {
      gsap.to('.waitForDriver', { transform: 'translateY(0)', duration: 1 })
    }
    else {
      gsap.to('.waitForDriver', { transform: 'translateY(100%)', duration: 1 })
    }
  }, [waitForDriver])


  return (
    <div className='relative h-screen bg-gray-100 overflow-hidden'>
      <div className='absolute top-5 left-5 right-5'>
        <Header />
      </div>
      <div className='h-screen w-screen' onClick={() => setvehiclePanel(false)}>
        <img src='/Home.jpg' alt='Home' className='object-cover h-full w-full' />
      </div>
      <div className={`bg-gray-100 absolute left-4 right-4 rounded-lg shadow-lg line h-[30%]`}>
        <h2 className='text-xl font-bold my-2'>Find a Trip</h2>
        <h2 onClick={() => setpanelOpen(false)} className='text-xl font-bold my-2 absolute top-6 right-2 opacity-0 arrow'><ChevronDown /> </h2>
        <form className='flex flex-col space-y-4 p-5' onSubmit={handleSearch}>
          <div className='absolute h-16 w-1 left-10 top-25 bg-gray-800 rounded-full'></div>
          <input onClick={() => setpanelOpen(true)} onChange={(e) => setinput({ ...input, source: e.target.value })} value={input.source} type='text' placeholder='Enter Source Location' className='input w-full bg-gray-100 input-bordered text-center  ' />
          <input onClick={() => setpanelOpen(true)} onChange={(e) => setinput({ ...input, destination: e.target.value })} value={input.destination} type='text' placeholder='Enter destination Location' className='input w-full bg-gray-100 input-bordered text-center' />
          <button type='submit' className='btn w-full bg-black text-white '>Search</button>
        </form>
        <div>
          <div className='pb-7 h-0 opacity-0 panel bg-gray-100 p-4'>
            <LocationSearchPanel setvehiclePanel={setvehiclePanel} setpanelOpen={setpanelOpen} />
          </div>
          <div className='fixed w-full z-10 bottom-0 left-0 bg-gray-100 p-2 translate-y-full vehiclePanel'>
            <h1 className='text-2xl font-semibold flex items-center justify-between mx-3 '>Choose a vehicle <ChevronDown onClick={() => setvehiclePanel(false)} className='size-5' /></h1>
            <ChooseVehicle image={"/car.png"} capacity={4} price={150.25} name={"Uber Go"} setconfirmRide={setconfirmRide} setvehiclePanel={setvehiclePanel} />
            <ChooseVehicle image={"/bike.png"} capacity={1} price={65.47} name={"Uber Bike"} setconfirmRide={setconfirmRide} setvehiclePanel={setvehiclePanel} />
            <ChooseVehicle image={"/auto.png"} capacity={3} price={110.1} name={"Uber Auto"} setconfirmRide={setconfirmRide} setvehiclePanel={setvehiclePanel} />
          </div>
          <div className='fixed w-full z-10 bottom-0 left-0 bg-gray-100 p-2 translate-y-full confirmRide'>
            <ConfirmRide image={"/car.png"} capacity={4} price={150.25} name={"Uber Go"} setconfirmRide={setconfirmRide} setvehicleFound={setvehicleFound} />
          </div>
          <div className='fixed w-full z-10 bottom-0 left-0 bg-gray-100 p-2 translate-y-full vehicleFound'>
            <LookingForDriver setvehicleFound={setvehicleFound} />
          </div>
          <div className='fixed w-full bottom-0 left-0 bg-gray-100 p-2 translate-y-full waitForDriver z-50'>
          <WaitingForDriver />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard