import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food, align }) => {
    const { _id, DonorName, DonorImage, FoodImage, FoodName, FoodQuantity, ExpiredDay, Location } = food || {};
    return (
        <div data-aos="fade-up">
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 group">
                <Link to={`/food_details/${_id}`}>
                    <figure className='w-full overflow-hidden'>
                        <img
                            src={FoodImage}
                            alt="card image"
                            className="aspect-video w-full group-hover:scale-110 transition-all duration-500 object-cover"
                        />
                    </figure>
                </Link>

                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                            {FoodName}
                        </h3>
                        <p className=" text-slate-400">From {DonorName}</p>
                    </header>
                    <span className='text-sm font-medium text-gray-400'>
                        Location : {Location}
                    </span>
                    <br />
                    <span className='text-sm font-medium text-gray-400'>
                        Food Quantity : {FoodQuantity}
                    </span>
                </div>
                <div className={`flex justify-${align} p-6 pt-0`}>
                    <Link to={`/food_details/${_id}`}>
                        <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-accent px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none">
                            <span>See Details</span>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default FoodCard;