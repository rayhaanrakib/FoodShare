import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", isScrollY);

        return () => {
            window.removeEventListener("scroll", isScrollY);
        };
    }, []);
    const isScrollY = () => {
        window.scrollY > 0 ? setScrollY(true) : setScrollY(false)
    }
    const navlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-primary " : "hover:text-primary transition-all duration-300"
                }
            >
                home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/available"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primary " : "hover:text-primary transition-all duration-300"
                }
            >
                available foods
            </NavLink>
        </li>
    </>


    const { user, logOut } = useAuth();
    const handleLogout = e => {
        logOut()
            .then((res) => {
                toast.success('Sign Out Successfully.', {
                    style: {
                        border: '1px solid #FF6C22',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#FF6C22',
                        secondary: '#FFFAEE',
                    },
                });
            })

    }

    return (
        <div className={scrollY ? "bg-white/80 backdrop-blur-lg shadow fixed top-0 w-full py-0 z-50 transition-all duration-1000" : "z-50 py-2 bg-white/80"}>
            <div className="navbar px-[3vw] z-50">
                <div className="navbar-start">
                    <div className="drawer z-40">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col">
                            <div className="w-full navbar">
                                <div className="flex-none lg:hidden mr-3">
                                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>

                                <a className="w-40 text-xl font-medium leading-[30px] tracking-tighter" href='/'><img src="/fav.png" className='w-8 mr-3' alt="" />FoodShare</a>

                            </div>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu flex gap-3 capitalize font-semibold text-secondary p-4 w-72 min-h-full bg-white pt-10">
                                {navlinks}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-end z-50">
                    <div className="hidden lg:flex px-5">
                        <ul className="flex gap-8 capitalize font-semibold leading-4 ">
                            {navlinks}
                        </ul>
                    </div>


                    {
                        user ?
                            <div>
                                <button className="btn btn-ghost btn-circle" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                    <svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </button>
                                <dialog id="my_modal_3" className="modal">
                                    <div data-aos="zoom-in" data-aos-duration="1000" className="relative bg-white/90 rounded-xl px-8 md:px-12 py-8">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <div className="overflow-hidden rounded flex flex-col items-center text-center text-slate-500">
                                            <figure className="p-6 pb-0">
                                                <span className="relative inline-flex h-20 w-40 items-center justify-center rounded-full text-white">
                                                    <img
                                                        src={user?.photoURL}
                                                        className="h-32 object-cover rounded-md"
                                                    />
                                                </span>
                                            </figure>
                                            <div className="p-4">
                                                <header className="mb-2">
                                                    <h3 className="text-xl font-medium text-slate-700 capitalize">
                                                        {user?.displayName}
                                                    </h3>
                                                    <p className="text-sm text-slate-400">{user?.email}</p>
                                                </header>
                                            </div>
                                            <div className="flex flex-col justify-center w-96 gap-3">
                                                <div className='gap-4 flex justify-center'>
                                                    <a href="/add">
                                                        <button className="h-10 whitespace-nowrap rounded bg-accent px-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-black hover:text-white">
                                                            <span className="">Add Food</span>
                                                        </button>
                                                    </a>
                                                    <a href="/manage">
                                                        <button className="h-10 whitespace-nowrap rounded bg-accent px-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-black hover:text-white">
                                                            <span className="">Manage Foods</span>
                                                        </button>
                                                    </a>
                                                    <a href="/request">
                                                        <button className="h-10 whitespace-nowrap rounded bg-accent px-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-black hover:text-white">
                                                            <span className="">Request Food</span>
                                                        </button>
                                                    </a>
                                                </div>
                                                <button onClick={handleLogout} className="rounded bg-primaryV px-10 py-2 text-sm font-medium tracking-wide bg-primary text-white transition duration-300 hover:bg-black focus:bg-black">
                                                    <span className="order-2">Log Out</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                            :
                            <a href="register" className="relative rounded px-8 py-[10px] overflow-hidden group bg-primary  hover:bg-gradient-to-r hover:from-primary hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative uppercase font-medium">Sign Up</span>
                            </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;