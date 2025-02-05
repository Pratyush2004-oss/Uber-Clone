import React from 'react'
import { ChevronDown, CreditCard, IndianRupee, LocateIcon, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const FinishRidePopUp = (props) => {
    return (
        <div className='flex flex-col gap-1 p-5 shadow-lg mx-3 bg-gray-50 border-2 active:border-black rounded-lg my-2'>
            <div className='text-2xl text-center flex items-center justify-center'><ChevronDown className='size-6' onClick={() => { props.setfinishRidePanel(false) }} /></div>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
            <div className='flex items-center justify-between mb-2 border-2 border-yellow-400 p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <div className="avatar ">
                        <div className="w-10 rounded-full shadow-lg">
                            <img src='/userIcon.jpg' />
                        </div>
                    </div>
                    <h2 className='text-2xl font-semibold'>Harsh Patel</h2>
                </div>
                <p className='font-medium text-lg'>2.2 km</p>
            </div>
            <div className='w-full px-3 gap-2 flex flex-col justify-between'>
                {/* Pickup point */}
                <div className='flex items-center gap-4 border-b-2 py-2 border-t-2 '>
                    <MapPin className='size-6' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-xl font-bold flex items-center'>562/11-A</h1>
                        <p className='text-sm text-gray-600 font-medium'>Karnataka</p>
                    </div>
                </div>
                {/* Destination point */}
                <div className='flex items-center gap-4 border-b-2 py-2 '>
                    <LocateIcon className='size-6' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-xl font-bold flex items-center'>Third Eave Coffee</h1>
                        <p className='text-sm text-gray-600 font-medium'>Karnataka</p>
                    </div>
                </div>
                {/* Price */}
                <div className='flex items-center gap-4 border-b-2 py-2'>
                    <CreditCard className='size-6' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-xl font-bold flex items-center'><IndianRupee className='size-5 mt-1' />{props.price}</h1>
                        <p className='text-sm text-gray-600 font-medium'>Cash / UPI</p>
                    </div>
                </div>

            </div>
            <Link to={'/dashboard'} className='btn font-semibold w-full mt-5 bg-green-500 text-white'>Finish Ride</Link>
            <p className='text-sm mt-5 '>Click on <strong>Finish Ride</strong> if you have done the payment</p>
        </div>)
}

export default FinishRidePopUp