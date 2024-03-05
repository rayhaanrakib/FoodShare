import React from 'react';

const Faq = () => {
    return (
        <div className='container mx-auto px-10'>
            <section className="w-full divide-y divide-slate-200 rounded bg-white shadow-md shadow-slate-200">
                <details className="group p-4" open>
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-500 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        How does FoodConnect work?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-500 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac13 desc-ac13"
                        >
                            <title id="title-ac13">Open icon</title>
                            <desc id="desc-ac13">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        FoodConnect is a platform that connects food donors with community organizations in need of surplus food. Donors list available surplus food on the platform, and community organizations can browse and request the food they need. FoodConnect facilitates the logistics of food pickup and delivery, making it easy for surplus food to reach those in need.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-500 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        Who can donate food through FoodConnect?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-500 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac14 desc-ac14"
                        >
                            <title id="title-ac14">Open icon</title>
                            <desc id="desc-ac14">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        FoodConnect welcomes donations from a variety of sources, including restaurants, grocery stores, farms, caterers, and individuals. Whether you have excess inventory, unsold produce, or surplus meals, we can help you find a recipient for your food donation.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-500 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        How can my organization benefit from using FoodConnect?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-500 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac15 desc-ac15"
                        >
                            <title id="title-ac15">Open icon</title>
                            <desc id="desc-ac15">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Community organizations can benefit from using FoodConnect by gaining access to a reliable supply of nutritious food at no cost. By receiving surplus food donations through our platform, organizations can redirect their resources toward other vital services, such as housing, healthcare, and education, while ensuring that their clients have access to fresh and wholesome meals.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-500 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden ">
                        Is FoodConnect available in my area?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-500 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac16 desc-ac16"
                        >
                            <title id="title-ac16">Open icon</title>
                            <desc id="desc-ac16">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        FoodConnect currently operates in select regions, but we are continually expanding our reach to serve more communities. To find out if FoodConnect is available in your area, please contact us or check our website for the latest updates on our service locations. If FoodConnect is not yet available in your area, we encourage you to reach out to local food banks and organizations to explore alternative food donation options.
                    </p>
                </details>
            </section>
        </div>
    );
};

export default Faq;