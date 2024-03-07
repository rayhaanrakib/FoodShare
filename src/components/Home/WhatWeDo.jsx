import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='relative container mx-auto flex justify-between gap-8 px-12'>
            <img className='absolute -top-20 z-10' src="https://i.ibb.co/w6TLLVk/h14-f1.png" alt="" />
            <div data-aos="fade-up" className='w-[380px] h-[800px] rounded-md text-center group z-20'>
                <img className='w-full object-cover rounded-t-md' src="https://i.ibb.co/X5yQc3B/1.png" alt="" />
                <div className='bg-white rounded-b-xl shadow-md group-hover:shadow-xl transition-all duration-300 w-full h-[220px]'>
                    <h2 className='text-2xl pt-5 font-semibold'>Food Redistribution</h2>
                    <p className='capitalize text-gray-500 p-6 h-28'>we strive to minimize food waste and ensure that food reaches.</p>
                    <a href="#" className=' text-black group-hover:text-accent transition-colors duration-300 font-semibold'>Read More</a>
                </div>
            </div>
            <div data-aos="fade-up" className='w-[380px] h-[800px] mt-16 rounded-md text-center group z-20'>
                <img className='w-full object-cover rounded-t-md' src="https://i.ibb.co/rcczTpS/2.png" alt="" />
                <div className='bg-white rounded-b-xl shadow-md group-hover:shadow-xl transition-all duration-300 w-full h-[220px]'>
                    <h2 className='text-2xl pt-5 font-semibold'>Technology Solutions</h2>
                    <p className='capitalize text-gray-500 p-6 h-28'>we provide tools and resources to streamline the food sharing process.</p>
                    <a href="#" className=' text-black group-hover:text-accent transition-colors duration-300 font-semibold'>Read More</a>
                </div>
            </div>
            <div data-aos="fade-up" className='w-[380px] h-[800px] rounded-md text-center group z-20'>
                <img className='w-full object-cover rounded-t-md' src="https://i.ibb.co/cDqDMX0/3.png" alt="" />
                <div className='bg-white rounded-b-xl shadow-md group-hover:shadow-xl transition-all duration-300 w-full h-[220px]'>
                    <h2 className='text-2xl pt-5 font-semibold'>Community Programs</h2>
                    <p className='capitalize text-gray-500 p-6 h-28'>we empower organizations to actively participate in the fight against food waste.</p>
                    <a href="#" className='text-black group-hover:text-accent transition-colors duration-300 font-semibold'>Read More</a>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;