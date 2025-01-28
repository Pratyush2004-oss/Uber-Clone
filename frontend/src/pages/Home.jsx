import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className={`bg-[url(/landing.png)] bg-cover bg-no-repeat bg-bottom h-screen pt-8 flex w-full justify-between flex-col`}>
      <div className='mx-8'>
        <Header />
      </div>
      <div className='bg-white/50 p-4 pb-7'>
        <h2 className='font-bold text-2xl'>Get Started with Uber</h2>
        <Link to={'/user/login'} className='btn w-full mt-5 bg-black text-white '>Continue <ArrowRight /></Link>
      </div>
    </div>
  )
}

export default Home