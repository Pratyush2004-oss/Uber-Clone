import { IndianRupee, User } from 'lucide-react'
import React from 'react'

const ChooseVehicle = ({ image, price, capacity, name, setconfirmRide, setvehiclePanel }) => {
    return (
        <div className='flex items-center justify-between gap-1 p-2 shadow-lg mx-3 bg-white border-2 active:border-black rounded-lg my-3' onClick={() => {
            setvehiclePanel(false)
            setconfirmRide(true)
        }}>
            <img src={image} alt='car' className='h-16 w-1/4' />
            <div className='w-1/2'>
                <h1 className='text-lg font-bold'>{name} <span className='flex items-center gap-3'><User className='size-5' /> {capacity}</span></h1>
                <h2 className='text-sm'>2 min away</h2>
                <p className='text-xs text-gray-600 font-medium'>Affordable compact rides</p>
            </div>
            <h2 className='text-xl flex items-center font-semibold '><IndianRupee className='size-4' /> {price}</h2>
        </div>
    )
}

export default ChooseVehicle