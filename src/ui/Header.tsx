import React from 'react'
import { logo } from '../assets'

const Header = () => {
  return (
    <div className='w-full bg-light'>
      <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0'>
        <img src={logo} alt="" />
        <div className='hidden md:inline-flex max-w-3xl w-full relative '>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Header