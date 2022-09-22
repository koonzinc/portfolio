import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    return (
        <div className='subpixel-antialiased'>
            <div className='max-w-[1080px] px-14 w-full h-screen flex flex-col  mx-auto mt-[160px]'>
                <div>
                    <h1 className='text-3xl font-medium mt-24 text-[#1B1C1E] mb-10'><span className='font-normal text-xl text-[#1c3879]'>03.&nbsp;&nbsp;</span>Projects I've Built<hr className='w-[350px] mt-2'></hr></h1>
                    <div className='relative'>
                        <img className='rounded-md grayscale hover:grayscale-0 cursor-pointer' src="https://placeimg.com/580/360/any" alt="" />
                        <p className='absolute right-0 bottom-[300px]'>Featured Project</p>
                        <h2 className='absolute right-0 bottom-[260px] text-2xl font-medium'>Halcyon Theme</h2>
                        <div className='absolute right-0 bottom-[120px] w-[500px] text-right bg-gray-300 rounded-lg items-center pt-5 pb-8 pl-12 pr-5 bg-[#1c3879] text-white '>
                            <p className='text-sm'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                        </div>
                        <ul className='absolute right-0 bottom-16 flex'>
                            <li className='p-3 text-sm'>VS Code</li>
                            <li className='p-3 text-sm'>Sublime Text</li>
                            <li className='p-3 text-sm'>Atom</li>
                            <li className='p-3 text-sm'>iTerm2</li>
                        </ul>
                        <ul className='absolute right-0 bottom-4 flex'>
                            <li className='p-3'><a href="#"><FiGithub size={30} /></a></li>
                            <li className='p-3'><a href="#"><FiExternalLink size={30} /></a></li>
                        </ul>
                    </div>
                    <div className='relative'>
                        <img className='rounded-md right-0 top-[100px] absolute grayscale hover:grayscale-0 cursor-pointer' src="https://placeimg.com/580/360/any" alt="" />
                        <p className='absolute left-0 top-[150px]'>Featured Project</p>
                        <h2 className='absolute left-0 top-[190px] text-2xl font-medium'>Halcyon Theme</h2>
                        <div className='absolute left-0 top-[300px] w-[500px] text-right bg-gray-300 rounded-lg items-center pt-5 pb-8 pl-12 pr-5 bg-[#1c3879] text-white '>
                            <p className='text-sm'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                        </div>
                        <ul className='absolute left-0  flex'>
                            <li className='p-3 text-sm'>VS Code</li>
                            <li className='p-3 text-sm'>Sublime Text</li>
                            <li className='p-3 text-sm'>Atom</li>
                            <li className='p-3 text-sm'>iTerm2</li>
                        </ul>
                        <ul className='absolute left-0  flex'>
                            <li className='p-3'><a href="#"><FiGithub size={30} /></a></li>
                            <li className='p-3'><a href="#"><FiExternalLink size={30} /></a></li>
                        </ul>

                    </div>











                </div>
            </div>
        </div>
    )
}

export default Projects