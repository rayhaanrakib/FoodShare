import React from 'react';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useAuth from '../hooks/useAuth';

const Layout = () => {
    const { loading } = useAuth();
    return (

        <div>
            {loading ?
                (<div className='min-h-screen flex items-center justify-center justify-items-center '>
                    <img src="https://cdn.dribbble.com/users/40316/screenshots/821525/loading-gif.gif" alt="" />
                </div>)
                :
                (<div className='scroll-smooth'>
                    <Navbar></Navbar>
                    <Outlet />
                    <Footer></Footer>
                    <Toaster position="bottom-right"></Toaster>
                </div >)}
        </div >


    );
};

export default Layout;