import React from 'react'
import { Clock, Gauge, IndianRupee, NotepadTextDashed } from 'lucide-react'

const CaptainDetails = () => {
    return (
        <div className='h-2/5 my-3 rounded-lg'>
            <div className='flex items-center justify-between gap-3 rounded-t-lg p-4 bg-gray-100'>
                <div className='flex items-center gap-4 px-2'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="CaptainLogo.png" alt='Captain' />
                        </div>
                    </div>
                    <h1 className='font-bold text-xl'>Harsh Patel <br /> <span className='text-sm text-gray-600 font-medium'>Level</span></h1>
                </div>
                <div>
                    <h4 className='flex items-center text-lg font-bold'><IndianRupee className='size-4' strokeWidth={3} />200</h4>
                    <p className='font-medium'>Earned</p>
                </div>
            </div>
            <div className='flex items-center justify-between bg-yellow-500 p-4 rounded-b-xl gap-2'>
                <div className='flex flex-col items-center justify-center p-2 gap-2 text-center'>
                    <Clock className='size-9' />
                    <h1 className='font-bold text-2xl'>10.2</h1>
                    <h1 className='font-medium'>HOURS ONLINE</h1>
                </div>
                <div className='flex flex-col items-center justify-center p-2 gap-2 text-center'>
                    <Gauge className='size-9' />
                    <h1 className='font-bold text-2xl'>100.25</h1>
                    <h1 className='font-medium'>DISTANCE TRAVELLED</h1>
                </div>
                <div className='flex flex-col items-center justify-center p-2 gap-2 text-center'>
                    <NotepadTextDashed className='size-9' />
                    <h1 className='font-bold text-2xl'>10.2</h1>
                    <h1 className='font-medium'>HOURS ONLINE</h1>
                </div>
            </div>
        </div>)
}

export default CaptainDetails