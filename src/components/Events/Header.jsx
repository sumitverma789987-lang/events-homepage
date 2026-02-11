import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <div className='flex flex-col text-white items-start justify-center  min-[1440px]:pl-60 min-[500px]:pl-6 pl-0'>
            <div className='flex flex-row items-start justify-center font-normal gap-3 text-sm md:text-[16px]'>
                <Link to="/"><h4>Home </h4> </Link>&gt;<h4>Events</h4>
            </div>
            <h1 className='font-semibold text-[64px]'>Events</h1>
        </div>
    )
}

export default Header