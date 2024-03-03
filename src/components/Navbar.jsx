import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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


    return (
        <div className={scrollY ? "bg-white/20 backdrop-blur-lg shadow fixed top-0 w-full py-0 z-50 transition-all duration-1000" : "z-50 py-2 bg-transparent"}>
            <div className="navbar px-[3vw]">
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

                                <a className="w-40 text-2xl font-medium leading-[30px] tracking-tighter" href='/'><img src="/fav.png" className='w-10 mr-3' alt="" />FoodShare</a>

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
                <div className="navbar-end">
                    <div className="hidden lg:flex px-5">
                        <ul className="flex gap-8 capitalize font-semibold leading-4 text-secondary">
                            {navlinks}
                        </ul>
                    </div>
                    <a href="register" className="relative rounded px-8 py-[10px] overflow-hidden group bg-primary  hover:bg-gradient-to-r hover:from-primary hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
                        <span className="relative uppercase font-medium">Sign Up</span>
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;