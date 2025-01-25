import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link to={'/'} className='text-4xl font-extrabold font-stretch-125% text-black/75 mb-4'>Uber</Link>
    )
}

export default Header