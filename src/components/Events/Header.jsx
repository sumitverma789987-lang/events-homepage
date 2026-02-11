import React from 'react'
import { Link } from 'react-router'


const Header = () => {
  return (
      <div className='flex flex-col text-white absolute top-45 left-60 items-start justify-center'>
          <div className='flex flex-row items-start justify-center font-normal gap-3 text-sm md:text-[16px] '>
              <Link to="/"><h4>Home </h4> </Link>&gt;<h4>Events</h4>
          </div>
          <h1 className='font-semibold text-[64px]'>Events</h1>
          
  </div>
  )
}

export default Header