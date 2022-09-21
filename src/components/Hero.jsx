import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-[#1c3879] subpixel-antialiased'>
        <div className='max-w-[1364px] px-14 mt-[-112px] w-full h-screen flex flex-col justify-center mx-auto'>
            <p className='text-[18px]'>Hi, my name is</p>
            <h1 className='transition-text duration-700 text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold lg:mb-[-10px] mt-4'>William Koonz.</h1>
            <h2 className='transition-text duration-700 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-secondary'>
                I build things for the web with&nbsp; 
                <Typed className='transition-text duration-700 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-secondary z-0' strings={['HTML', 'CSS', 'JavaScript', 'React' ]} typeSpeed={120} backSpeed={140} loop />.
            </h2>
            <p className='text-gray-500 mt-4 text-[18px] max-w-[470px] md:max-w-[620px]'>
                I'm a full stack developer specializing in front-end development
                with an evolving skillset in User Interface Design. Currently, I'm focused
                on building <a href='#' className='text-[#1c3879] font-medium hover:text-[#607EAA] duration-500 ease-in-out cursor-pointer'>projects</a> in preparation for my first full-time position.
            </p>
            <button className='w-[260px] py-5 mt-12 font-medium hover:bg-[#607EAA] duration-500 ease-in-out'>Check out my resume!</button>
        </div>
    </div>
  )
}

export default Hero