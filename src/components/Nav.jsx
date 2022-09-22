import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const Nav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-28 max-w-[15360px] mx-auto px-8 subpixel-antialiased'>
            <h1 className='w-full text-4xl font-bold'>W</h1>
            <ul className='hidden md:flex items-center'>
                <li className='pr-8 cursor-pointer text-[18px] font-medium hover:text-main duration-500 ease-in-out'><span className='text-main font-normal'>01.&nbsp;</span>About</li>
                <li className='pr-8 cursor-pointer text-[18px] font-medium hover:text-main duration-500 ease-in-out'><span className='text-main font-normal'>02.&nbsp;</span>Experience</li>
                <li className='pr-8 cursor-pointer text-[18px] font-medium hover:text-main duration-500 ease-in-out'><span className='text-main font-normal'>03.&nbsp;</span>Projects</li>
                <li className='pr-8 cursor-pointer text-[18px] font-medium hover:text-main duration-500 ease-in-out'><span className='text-main font-normal'>04.&nbsp;</span>Contact</li>
                <li className='pr-6'><button href='#' className='font-medium hover:bg-[#607EAA] duration-500 ease-in-out'>Resume</button></li>
            </ul>
            <div onClick={handleNav} className='fixed right-5 top-5 md:hidden z-50 cursor-pointer'>
                {nav ? <GrClose size={40} /> : <HiMenuAlt3 size={40} />}
            </div>
            <ul className={nav ? 'fixed right-0 top-0 text-center pt-10 w-[75%] h-full border-l border-l-gray-900 bg-[#FFFFFF] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
                <li className='mt-[100px] text-[18px] cursor-pointer font-medium hover:text-main duration-500 ease-in-out'><span className='text-main'>01.&nbsp;</span>About</li>
                <li className='mt-10 text-[18px] cursor-pointer font-medium hover:text-main duration-500 ease-in-out'><span className='text-main'>02.&nbsp;</span>Experience</li>
                <li className='mt-10 text-[18px] cursor-pointer font-medium hover:text-main duration-500 ease-in-out'><span className='text-main'>03.&nbsp;</span>Projects</li>
                <li className='mt-10 text-[18px] cursor-pointer font-medium hover:text-main duration-500 ease-in-out'><span className='text-main'>04.&nbsp;</span>Contact</li>
                <li className='mt-10 text-[18px] cursor-pointer font-medium'><button href='#' className='font-medium py-3 px-10 hover:bg-[#607EAA] duration-500 ease-in-out'>Resume</button></li>
            </ul>
            <div id='socialbar' className='hidden lg:block'>
                <ul className='bottom-[170px] relative right-[15px]'>
                    <li className='pb-5'><a href=""><FaGithub size={35} className='hover:text-[#607EAA] duration-500 ease-in-out'/></a></li>
                    <li className='pb-5'><a href=""><FaLinkedin size={35} className='hover:text-[#607EAA] duration-500 ease-in-out'/></a></li>
                    <li className='pb-5'><a href=""><MdEmail size={35} className='hover:text-[#607EAA] duration-500 ease-in-out'/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav