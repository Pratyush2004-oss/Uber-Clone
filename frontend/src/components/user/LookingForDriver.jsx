import React from 'react'
import { ChevronDown, CreditCard, IndianRupee, LocateIcon, MapPin } from 'lucide-react'

const LookingForDriver = (props) => {
    return (
        <div className='flex flex-col items-center justify-between gap-1 p-2 shadow-lg mx-3 bg-white border-2 active:border-black rounded-lg my-3'>
            <h3 className='text-2xl'><ChevronDown className='size-6' onClick={() => props.setvehicleFound(false)} /></h3>
            <h3 className='text-xl font-semibold mb-5'>Looking for Driver</h3>
            <img src='/car.png' alt='car' className='h-48' />
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
                        <h1 className='text-xl font-bold flex items-center'><IndianRupee className='size-5 mt-1' /></h1>
                        <p className='text-sm text-gray-600 font-medium'>Cash / UPI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookingForDriver