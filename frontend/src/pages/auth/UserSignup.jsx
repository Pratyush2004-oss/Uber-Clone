import React, { useState } from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import { useUserStore } from '../../store/user.store'
import { toast } from 'react-hot-toast'

const UserSignup = () => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { register } = useUserStore();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await register(input);
      if (res) {
        toast.success(res.message);
        setInput({
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        })
      }
      else {
        toast.error(res.message);
      }
    } catch (error) {

    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div className='bg-white/50 p-7 flex flex-col justify-between min-h-screen'>
      <div>
        <Header />
        <h1 className='font-bold text-2xl text-center my-5'>Create Account</h1>
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
            <input type='password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder='password' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
          </div>
          <button disabled={loading || input.password.length < 6} className='btn w-full mt-5 bg-black text-white ' type='submit'>Create Account </button>
        </form>
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