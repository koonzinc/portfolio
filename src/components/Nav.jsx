import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between items-center h-28 max-w-[15360px] mx-auto px-12'>
       <h1 className='w-full text-4xl font-bold'>LOGO</h1>
       <ul className='hidden md:flex'>
           <li className='pr-6 text-[14px] font-medium'><span className='text-blue-800'>01.&nbsp;</span>About</li>
           <li className='pr-6 text-[14px] font-medium'><span className='text-blue-800'>02.&nbsp;</span>Experience</li>
           <li className='pr-6 text-[14px] font-medium'><span className='text-blue-800'>03.&nbsp;</span>Projects</li>
           <li className='pr-6 text-[14px] font-medium'><span className='text-blue-800'>04.&nbsp;</span>Contact</li>
           <li className='pr-6 text-[14px] font-medium'><button href='#' className='text-blue-800'>Resume</button></li>
       </ul>
    </div>
  )
}

export default Nav