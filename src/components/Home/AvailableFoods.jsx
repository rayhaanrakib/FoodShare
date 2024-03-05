import React, { useEffect, useState } from 'react';
import FoodCard from '../../shared/FoodCard';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { NavLink } from 'react-router-dom';

const AvailableFoods = () => {
    const [available, setAvailable] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const url = `/featured/services?sort=desc&status=1`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setAvailable(res.data)
                setIsLoading(false)
            })
    }, [url, axiosSecure])
    return (
        <div className='my-20 container mx-auto'>
            {
                isLoading ? (<div className='flex justify-center items-center justify-items-center'><img className='w-60' src="https://i.ibb.co/TqhV9yt/loading.gif" alt="" /></div>)
                    :
                    (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                            {
                                available?.map(food => <FoodCard align="end" key={food._id} food={food}></FoodCard>)
                            }
                        </div>)

            }
            <div className='container mx-auto text-center py-10'>
                <NavLink to="/available">
                    <button className="relative rounded px-8 py-[10px] overflow-hidden group bg-primary  hover:bg-gradient-to-r hover:from-primary hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative uppercase font-medium">Show All</span>
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default AvailableFoods;