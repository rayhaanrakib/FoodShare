import React from 'react';
import Banner from './../components/Home/Banner';
import Title from './../shared/Title';
import WhatWeDo from './../components/Home/WhatWeDo';
import AboutUs from './../components/Home/AboutUs';
import AvailableFoods from './../components/Home/AvailableFoods';
import LogoCarousel from '../components/Home/LogoCarousel';
import Faq from '../components/Home/Faq';
import Testimonials from '../components/Home/Testimonials';
import Articles from '../components/Home/Articles';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='pt-10'>
                <LogoCarousel></LogoCarousel>
            </div>
            <div className='pt-24 my-6 bg-[#fcf8f4]'>
                <Title align="center" heading="what we do" para="Our Thriving Community: A Shared Vision for Change"></Title>
                <WhatWeDo></WhatWeDo>
            </div>
            {/* <div className='pt-10 bg-gray-50'>
                <AboutUs></AboutUs>
            </div> */}
            <div className='pt-10'>
                <Title align="center" heading="Available Foods" para="Discover Fresh Flavors and Sustainable Solutions"></Title>
                <AvailableFoods></AvailableFoods>
            </div>
            <div className='pt-20'>
                <Title align="center" heading="Voices of Impact" para="Stories of Inspiration from Our Community"></Title>
                <Testimonials></Testimonials>
            </div>
            <div className='pt-20'>
                <Title align="center" heading="Explore Our Blog" para="Stay Updated, Stay Informed, Stay Inspired"></Title>
                <Articles></Articles>
            </div>
            <div className='py-20'>
                <Title align="center" heading="Frequently Asked Questions" para="Answers to Common Inquiries About FoodConnect"></Title>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;