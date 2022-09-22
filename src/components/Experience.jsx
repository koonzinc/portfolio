import React from 'react'

const Experience = () => {
    return (
        <div className='text-[#1C3879] subpixel-antialiased'>
            <div className='flex flex-col h-screen w-[360px] md:w-full max-w-[700px] mx-auto mt-[300px] md:mt-[-240px]'>
                <h1 className='text-2xl font-bold text-[#1B1C1E] mb-10'><span className='font-normal text-xl text-[#1c3879]'>02.&nbsp;&nbsp;</span>Technologies I Use<hr className='w-[320px] mt-2'></hr></h1>
                <p className='text-gray-500 mb-10'>
                    I have spent the majority of my time coding focused on frontend languages surrounding various projects and algorithm problems.
                    Once I felt as though I had a good grasp on the frontend I began honing my skills related to backend as well as more advanced frontend tools.<br /><br />
                    Here is an overview of the technologies I work with:
                </p>
                <div className='flex md:flex-row w-full md:justify-center flex-col items-center'>
                    <div className='flex flex-col rounded-xl bg-white w-[200px] h-[366px] p-8 shadow-xl'>
                        <h1 className='font-bold mb-6 text-[18px]'>Programming Languages</h1>
                        <ul>
                            <li className='text-gray-500 text-[16px] mb-2'>HTML</li>
                            <li className='text-gray-500 text-[16px] mb-2'>CSS</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Tailwind (CSS)</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Bootstrap (CSS)</li>
                            <li className='text-gray-500 text-[16px] mb-2'>JavaScript</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Python</li>
                            <li className='text-gray-500 text-[16px] mb-2'>SQL</li>
                        </ul>
                    </div>
                    <div className='flex flex-col  rounded-xl bg-white w-[200px] h-[366px] my-10  md:mx-10 p-8 shadow-xl'>
                        <h1 className='font-bold mb-6 text-[18px]'>Libraries and Frameworks</h1>
                        <ul>
                            <li className='text-gray-500 text-[16px] mb-2'>React</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Next.js</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Flask</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Node.js</li>
                        </ul>
                    </div>
                    <div className='flex flex-col  rounded-xl bg-white w-[200px] h-[366px] p-8 shadow-xl'>
                        <h1 className='font-bold mb-6 text-[18px]'>Tools and Platforms</h1>
                        <ul>
                            <li className='text-gray-500 text-[16px] mb-2'>Git</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Github</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Netlify</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Firebase</li>
                            <li className='text-gray-500 text-[16px] mb-2'>VSCode</li>
                            <li className='text-gray-500 text-[16px] mb-2'>Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience