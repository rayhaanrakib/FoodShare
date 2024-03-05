import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='container mx-auto flex justify-between gap-8 p-12'>
            <div data-aos="fade-up" data-aos-duration="500" className='w-[380px] h-[600px] rounded-md text-center group'>
                <img className='w-full object-cover rounded-t-md' src="https://foodtank.com/wp-content/uploads/2020/12/Food-Tank-restaurants-donate-waste-hunger.jpg" alt="" />
                <div className='bg-white shadow-md group-hover:shadow-xl transition-all duration-300 w-full h-[200px]'>
                    <h2 className='text-xl pt-5 font-semibold'>Food Redistribution</h2>
                    <p className='capitalize text-gray-500 px-3 py-6'>we strive to minimize food waste and ensure that edible food reaches people facing hunger.</p>
                    <a href="#" className=' text-black hover:text-accent font-semibold'>Read More</a>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-[380px] h-[600px] mt-16 rounded-md text-center group'>
                <img className='w-full object-cover rounded-t-md' src="https://www.getopensocial.com/wp-content/uploads/2022/05/Blogpost-may-2-768x432.jpg" alt="" />
                <div className='bg-white shadow-md group-hover:shadow-xl transition-all duration-300 w-full h-[200px]'>
                    <h2 className='text-xl pt-5 font-semibold'>Community Engagement Programs</h2>
                    <p className='capitalize text-gray-500 px-3 py-6'>we empower organizations to actively participate in the fight against food waste.</p>
                    <a href="#" className=' text-black hover:text-accent font-semibold'>Read More</a>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" className='w-[380px] h-[600px] rounded-md text-center group'>
                <img className='w-full object-cover rounded-t-md' src="https://news.microsoft.com/wp-content/uploads/prod/sites/93/2022/11/Image_4-1024x576.jpg" alt="" />
                <div className='bg-white shadow-md group-hover:shadow-xl transition-all duration-300 w-full h-[200px]'>
                    <h2 className='text-xl pt-5 font-semibold'>Technology Solutions</h2>
                    <p className='capitalize text-gray-500 px-3 py-6'>we provide user-friendly tools and resources to streamline the food sharing process.</p>
                    <a href="#" className='text-black hover:text-accent font-semibold'>Read More</a>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;