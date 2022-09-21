import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';

const Nav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-28 max-w-[15360px] mx-auto px-8'>
            <h1 className='w-full text-4xl font-bold'>W</h1>
            <ul className='hidden md:flex items-center'>
                <li className='pr-8 cursor-pointer text-[14px] font-medium hover:text-main duration-500 ease-in-out'><span className='text-main'>01.&nbsp;</span>About</li>
                <li className='pr-8 cursor-pointer text-[14px] font-medium hover:text-main duration-500 ease-in-out'><span className='text-main'>02.&nbsp;</span>Experience</li>
                <li className='pr-8 cursor-pointer text-[14px] font-medium hover:text-main duration-500 ease-in-out'><span className='text-main'>03.&nbsp;</span>Projects</li>
                <li className='pr-8 cursor-pointer text-[14px] font-medium hover:text-main duration-500 ease-in-out'><span className='text-main'>04.&nbsp;</span>Contact</li>
                <li className='pr-6'><button href='#' className='font-medium hover:bg-[#607EAA] duration-500 ease-in-out'>Resume</button></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden z-50 cursor-pointer'>
                {nav ? <GrClose size={40} /> : <HiMenuAlt3 size={40} />}
            </div>
            <ul className={nav ? 'fixed right-0 top-0 text-center pt-10 w-[75%] h-full border-l border-l-gray-900 bg-[#FFFFFF] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <li className='mt-[100px]'><span className='text-main'>01.&nbsp;</span>About</li>
                <li className='mt-10'><span className='text-main'>02.&nbsp;</span>Experience</li>
                <li className='mt-10'><span className='text-main'>03.&nbsp;</span>Projects</li>
                <li className='mt-10'><span className='text-main'>04.&nbsp;</span>Contact</li>
                <li className='mt-10'><button href='#' className='font-medium py-3 px-10 hover:bg-[#607EAA] duration-500 ease-in-out'>Resume</button></li>
            </ul>
        </div>
    )
}

export default Nav