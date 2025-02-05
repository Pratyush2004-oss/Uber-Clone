import React, { useState } from 'react'
import { ChevronDown, CreditCard, IndianRupee, LocateIcon, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [code, setcode] = useState("")
    const navigate = useNavigate();

    const handleChange = (element, index) => {
        // get the input value 
        const value = element.value;
        if (!value) return;

        const newOTP = [...otp];

        newOTP[index] = value;
        setOtp(newOTP);
        // moves focus to next input field if value is entered
        if (index < 5 && value) {
            element.nextSibling.focus();
        }

        setcode(newOTP.join(''));
    }

    // handle function by clicking the backspace button
    const handleBackSpace = (element, index) => {
        // clear the current input field
        const newOTP = [...otp];
        newOTP[index] = '';
        setOtp(newOTP);

        // move focus to previous input
        if (index > 0) {
            element.previousSibling.focus();
        }
    }

    const handleSubmit = () => {
        console.log(code);
        navigate('/dashboard/riding-captain');
    }
    return (
        <div className='flex flex-col gap-1 p-5 shadow-lg mx-3 bg-gray-50 border-2 active:border-black rounded-lg my-2'>
            <div className='text-2xl text-center flex items-center justify-center'><ChevronDown className='size-6' onClick={() => { props.setconfirmRide(false) }} /></div>
            <h3 className='text-2xl font-semibold  mb-5'>Confirm this ride to start</h3>
            <div className='flex items-center justify-between mb-2 border-yellow-300 p-3 rounded-lg border-2'>
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

                {/* OTP */}
                <h1 className='text-xl font-semibold'>Enter OTP</h1>
                <div className='grid grid-cols-6 gap-2'>
                    {
                        otp.map((data, index) => {
                            return (
                                <input key={index} type='text' value={data} className='input bg-gray-200 text-xl font-semibold input-bordered border-2 border-gray-400 w-full focus:input-warning' maxLength={1} onChange={(e) => handleChange(e.target, index)} onKeyDown={(e) => {
                                    if (e.key === 'Backspace') {
                                        handleBackSpace(e.target, index)
                                    }
                                }} />
                            )
                        })
                    }
                </div>
            </div>
            <button className='btn font-semibold w-full mt-5 bg-green-500 text-white text-lg' onClick={handleSubmit}>Confirm</button>
            <button className='btn w-full mt-2 bg-red-600 text-white font-semibold text-lg' onClick={() => {
                props.setconfirmRide(false)
            }}>Cancel</button>
        </div>
    )
}

export default ConfirmRidePopUp