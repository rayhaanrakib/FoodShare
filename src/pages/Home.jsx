import React from 'react';
import Banner from './../components/Home/Banner';
import Title from './../shared/Title';
import WhatWeDo from './../components/Home/WhatWeDo';
import AboutUs from './../components/Home/AboutUs';
import AvailableFoods from './../components/Home/AvailableFoods';
import LogoCarousel from '../components/Home/LogoCarousel';
import Faq from '../components/Home/Faq';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-10'>
                <LogoCarousel></LogoCarousel>
            </div>
            <div className='mt-24'>
                <Title align="center" heading="what we do" para="Our Thriving Community: A Shared Vision for Change"></Title>
                <WhatWeDo></WhatWeDo>
            </div>
            {/* <div className='mt-10 bg-gray-50'>
                <AboutUs></AboutUs>
            </div> */}
            <div className='mt-10'>
                <Title align="center" heading="Available Foods" para="Discover Fresh Flavors and Sustainable Solutions"></Title>
                <AvailableFoods></AvailableFoods>
            </div>
            <div className='mt-10'>
                <Title align="center" heading="Voices of Impact" para="Stories of Inspiration from Our Community"></Title>
                <Testimonials></Testimonials>
            </div>
            <div className='my-20'>
                <Title align="center" heading="Frequently Asked Questions" para="Answers to Common Inquiries About FoodConnect"></Title>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;