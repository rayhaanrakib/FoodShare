import React from 'react';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div className='scroll-smooth'>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            <Toaster position="bottom-right"></Toaster>
        </div>
    );
};

export default Layout;