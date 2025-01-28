import React from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../store/user.store'
import { useCaptainStore } from '../store/captain.store';

const Header = () => {
    const { user } = useUserStore();
    const { captain } = useCaptainStore();
    return (
        <div className='flex justify-between items-center'>
            <Link to={'/'} className='text-4xl font-extrabold font-stretch-125% text-black/75 mb-4'>Uber</Link>
            {
                user && (
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src='userIcon.jpg' />
                        </div>
                    </div>
                )
            } {captain && (
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="CaptainLogo.png" alt='Captain' />
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Header