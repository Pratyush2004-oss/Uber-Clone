import React, { useState } from 'react'
import Header from '../components/Header'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, ChevronDown } from 'lucide-react'
const Dashboard = () => {
  const [input, setinput] = useState({
    source: '',
    destination: ''
  })
  const [panelOpen, setpanelOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(input);
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to('.line', { top: 5, duration: 1 })
      gsap.to('.arrow', { opacity: 1, duration: 1 })
    }
    else {
      gsap.to('.arrow', { opacity: 0, duration: 1 })
      gsap.to('.line', { bottom: 5, duration: 1 })
    }
  }, [panelOpen])

  return (
    <div className='relative h-screen bg-gray-100'>
      <div className='absolute top-5 left-5 right-5'>
        <Header />
      </div>
      <div className='h-screen w-screen'>
        <img src='/Home.jpg' alt='Home' className='object-cover h-full w-full' />
      </div>
      <div className={`bg-gray-100 absolute left-4 right-4 p-5 rounded-lg shadow-lg line h-[30%]`}>
        <h2 className='text-xl font-bold my-2'>Find a Trip</h2>
        <h2 onClick={() => setpanelOpen(false)} className='text-xl font-bold my-2 absolute top-6 right-2 opacity-0 arrow'><ChevronDown /> </h2>
        <form className='flex flex-col space-y-4' onSubmit={handleSearch}>
          <div className='absolute h-16 w-1 left-10 top-25 bg-gray-800 rounded-full'></div>
          <input onClick={() => setpanelOpen(true)} onChange={(e) => setinput({ ...input, source: e.target.value })} value={input.source} type='text' placeholder='Enter Source Location' className='input w-full bg-gray-100 input-bordered text-center  ' />
          <input onClick={() => setpanelOpen(true)} onChange={(e) => setinput({ ...input, destination: e.target.value })} value={input.destination} type='text' placeholder='Enter destination Location' className='input w-full bg-gray-100 input-bordered text-center' />
          <button type='submit' className='btn w-full mt-5 bg-black text-white '>Search</button>
        </form>
        </div>
    </div>
  )
}

export default Dashboard