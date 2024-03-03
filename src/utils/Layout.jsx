import React from 'react';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='scroll-smooth'>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Layout;