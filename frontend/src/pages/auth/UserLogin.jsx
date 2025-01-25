import React, { useState } from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const handleLogin = () => {
    console.log(input)

    setInput({
      email: '',
      password: ''
    })
  }
  return (
    <div className='bg-white/50 p-7 flex flex-col justify-between h-screen'>
      <div>
        <Header />
        <h1 className='font-bold text-2xl text-center my-5'>Sign in</h1>
        <div className='my-5'>
          <div className='mb-5'>
            <h3 className='font-medium text-xl'>What's your email?</h3>
            <input type='email' value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder='Email' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
          </div>
          <div className='mb-5'>
            <h3 className='font-medium text-xl'>Password</h3>
            <input type='password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder='password' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
          </div>
          <button className='btn w-full mt-5 bg-black text-white ' onClick={handleLogin}>Login </button>
        </div>
        <p className='text-center' >New Here? <Link to={'/user/signup'} className='underline text-blue-500 font-bold'>Create new account</Link></p>
        <div className="divider">X</div>
      </div>
      <div className='my-5'>
        <Link to={'/captain/login'} className='btn w-full mt-5 btn-success text-white '>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin