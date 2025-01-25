import React, { useState } from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleSignup = () => {
    console.log(input);
  }
  return (
    <div className='bg-white/50 p-7 flex flex-col justify-between min-h-screen'>
      <div>
        <Header />
        <div className='my-5'>
          <h1 className='font-bold text-2xl text-center my-5'>Create Account</h1>
          <div className='grid grid-cols-2 gap-3'>
            <div className='mb-5'>
              <h3 className='font-medium text-xl'>First Name</h3>
              <input type='text' value={input.firstName} onChange={(e) => setInput({ ...input, firstName: e.target.value })} placeholder='First Name' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
            </div>
            <div className='mb-5'>
              <h3 className='font-medium text-xl'>Last Name</h3>
              <input type='text' value={input.lastName} onChange={(e) => setInput({ ...input, lastName: e.target.value })} placeholder='Email' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
            </div>
          </div>
          <div className='mb-5'>
            <h3 className='font-medium text-xl'>What's your email?</h3>
            <input type='email' value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder='Email' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
          </div>
          <div className='mb-5'>
            <h3 className='font-medium text-xl'>Password</h3>
            <input type='password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder='password' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
          </div>
          <button className='btn w-full mt-5 bg-black text-white ' onClick={handleSignup}>Create Account </button>
        </div>
        <p className='text-center' >Already have an account? <Link to={'/user/login'} className='underline text-blue-500 font-bold'>Sign in</Link></p>
        <div className="divider">X</div>
      </div>
      <div className='my-5'>
        <Link to={'/captain/signup'} className='btn w-full mt-5 btn-success text-white '>Register as Captain</Link>
      </div>
    </div>
  )
}

export default UserSignup