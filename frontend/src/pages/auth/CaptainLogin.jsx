import React, { useState } from 'react'
import Header from '../../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useCaptainStore } from '../../store/captain.store';
import toast from 'react-hot-toast';

const CaptainLogin = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false);
  const { login } = useCaptainStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await login(input);
      if (res) {
        toast.success(res.message);
        navigate('/dashboard');
        setInput({
          email: '',
          password: ''
        })
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }

  }
  return (
    <div className='bg-white/50 p-7 flex flex-col justify-between h-screen'>
      <div>
        <Header />
        <h1 className='font-bold text-2xl text-center my-5'>Sign in as Captain</h1>
        <form className='my-5' onSubmit={(e) => handleLogin(e)}>
          <div className='mb-5'>
            <h3 className='font-medium text-xl'>What's your email?</h3>
            <input type='email' value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder='Email' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
          </div>
          <div className='mb-5'>
            <h3 className='font-medium text-xl'>Password</h3>
            <input type='password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder='password' required className='input w-full my-2 input-bordered bg-[#eeeeee]' />
          </div>
          <button disabled={loading} className='btn w-full mt-5 bg-black text-white ' type='submit'>{loading ? <span className='loading'></span> : 'Login'} </button>
        </form>
        <p className='text-center' >New Here? <Link to={'/captain/signup'} className='underline text-blue-500 font-bold'>Create new account</Link></p>
        <div className="divider">X</div>
      </div>
      <div className='my-5'>
        <Link to={'/user/login'} className='btn w-full mt-5 btn-success text-white '>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin