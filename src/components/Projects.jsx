import React from 'react'

const Projects = () => {
  return (
    <div className='subpixel-antialiased'>
        <div className='max-w-[1080px] px-14 w-full h-screen flex flex-col  mx-auto'>
            <div>
                <h1 className='text-3xl font-medium mt-24 text-[#1B1C1E] mb-10'><span className='font-normal text-xl text-[#1c3879]'>03.&nbsp;&nbsp;</span>Projects I've Built<hr className='w-[350px] mt-2'></hr></h1>
                <div className='relative'>
                    <img src="https://placeimg.com/580/360/any" alt="" />
                    <p className='absolute right-0 bottom-[300px]'>Featured Project</p>
                    <h2 className='absolute right-0 bottom-[260px] text-2xl font-medium'>Halcyon Theme</h2>
                    <div className='absolute right-0 bottom-[120px] w-[500px] text-right bg-gray-300 rounded-lg items-center py-8 pl-12 pr-4 '>
                        <p className='text-sm'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects