import React from 'react'
import { CreditCard, Home, IndianRupee, LocateIcon, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='bg-white/50 p-4 flex flex-col h-screen gap-2'>
      <Link to={'/dashboard'} className='fixed h-12 w-12 bg-white flex items-center justify-center rounded-full right-5 top-4'>
        <Home className='size-6' strokeWidth={2.5} />
      </Link>

      <div className='h-1/2 rounded-lg'>
        <img src='/Home.jpg' alt='Home' className='h-full w-full rounded-lg' />
      </div>
      <div>
        <h1 className='text-2xl font-bold text-center my-5'>Make a Payment</h1>
        <div className='flex items-center w-full justify-evenly'>
          <img src='/car.png' alt='car' className='h-24' />
          <div className='text-right'>
            <h1 className='text-lg font-semibold'>Driver Name</h1>
            <h1 className='text-xl font-semibold -my-1'>Plate Number</h1>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className='w-full px-3 gap-2 flex flex-col justify-between'>
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
          <button className='btn btn-success w-full text-white text-lg my-5'>Make Payment</button>
        </div>
      </div>
    </div>
  )
}

export default Riding