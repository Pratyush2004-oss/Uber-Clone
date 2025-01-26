import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { useCaptainStore } from '../../store/captain.store'
import toast from 'react-hot-toast'

const CaptainSignup = () => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    vehicle: {
      color: '',
      plate: '',
      capacity: '',
      vehicleType: ''
    }
  })

  const { signup } = useCaptainStore();

  const [loading, setloading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const res = signup(input);
      if (res) {
        toast.success(res.message);
        setInput({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          vehicle: {
            color: '',
            plate: '',
            capacity: '',
            vehicleType: ''
          }
        })
      }
    } catch (error) {
      console.log(error)

    }
    finally {
      setloading(false);
    }

  }
  return (
    <div className='bg-white/50 p-7 flex flex-col justify-between min-h-screen'>
      <div>
        <Header />
        <h1 className='font-bold text-2xl text-center my-5'>Sign Up as Captain</h1>
        <form className='my-5' onSubmit={(e) => handleSignup(e)}>
          <div className='grid grid-cols-2 gap-3'>
            <div className='mb-5'>
              <h3 className='font-medium text-xl'>First Name</h3>
              <input type='text' value={input.firstName} onChange={(e) => setInput({ ...input, firstName: e.target.value })} placeholder='First Name' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
            </div>
            <div className='mb-5'>
              <h3 className='font-medium text-xl'>Last Name</h3>
              <input type='text' value={input.lastName} onChange={(e) => setInput({ ...input, lastName: e.target.value })} placeholder='Last Name' className='input w-full my-2 input-bordered bg-[#eeeeee]' />
            </div>
          </div>
          <div className='mb-5'>
            <h3 className='font-medium text-xl'>What's your email?</h3>
            <input type='email' value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder='Email' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
          </div>
          <div className='mb-5'>
            <h3 className='font-medium text-xl'>Password</h3>
            <input type='password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder='password' required className='input w-full input-bordered bg-[#eeeeee]' />
          </div>
          <h1 className='font-bold text-xl my-5 border-b-2 border-black'>Enter Vehicle Details</h1>
          <div className='grid grid-cols-2 gap-3'>
            <div className=''>
              <h3 className='font-medium'>Color</h3>
              <input type='text' value={input.vehicle.color} onChange={(e) => setInput({ ...input, vehicle: { ...input.vehicle, color: e.target.value } })} placeholder='Color' required className='input w-full  input-bordered bg-[#eeeeee]' />
            </div>
            <div className='mb-5'>
              <h3 className='font-medium'>Plate Number</h3>
              <input type='text' value={input.vehicle.plate} onChange={(e) => setInput({ ...input, vehicle: { ...input.vehicle, plate: e.target.value } })} placeholder='Plate Number' required className='input w-full input-bordered bg-[#eeeeee]' />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div className=''>
              <h3 className='font-medium '>Capacity</h3>
              <input type='number' value={input.vehicle.capacity} onChange={(e) => setInput({ ...input, vehicle: { ...input.vehicle, capacity: e.target.value } })} placeholder='Capacity' required className='input w-full  input-bordered bg-[#eeeeee] ' />
            </div>
            <div className='mb-5'>
              <h3 className='font-medium '>Vehicle Type</h3>
              <select defaultValue={input.vehicle.vehicleType} onChange={(e) => setInput({ ...input, vehicle: { ...input.vehicle, vehicleType: e.target.value } })} className="select select-bordered  w-full bg-[#eeeeee]">
                <option disabled value={''}>Select Vehicle</option>
                <option value={'car'}>Car</option>
                <option value={'motorcycle'}>MotorCycle</option>
                <option value={'auto'}>Auto</option>
              </select>
            </div>
          </div>
          <button disabled={loading || input.password.length < 6} className='btn w-full bg-black text-white ' type='submit'>Create Account </button>
        </form>
        <p className='text-center' >Already have an account? <Link to={'/user/login'} className='underline text-blue-500 font-bold'>Sign in</Link></p>
        <div className="divider">X</div>
      </div>
      <div className='my-5'>
        <Link to={'/user/signup'} className='btn w-full mt-5 btn-success text-white '>Register as User</Link>
      </div>
    </div>
  )
}

export default CaptainSignup