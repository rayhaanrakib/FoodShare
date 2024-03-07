import React from 'react';

const Articles = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row gap-8 px-12 mt-20'>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 group">

                <figure className='w-96 h-56 overflow-hidden'>
                    <img
                        src="https://centralretail.com/storage/newsroom/sustainability-news/2022/09/20220908-0626-1.jpg"
                        alt="card image"
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                </figure>

                <div className="p-6 h-60 w-96">
                    <header className="mb-4 flex gap-4">
                        <a
                            href="#"
                            className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            <img
                                src="https://i.pravatar.cc/48?img=25"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                        </a>
                        <div>
                            <h3 className="font-medium text-slate-700">
                                Transforming Surplus into Sustenance
                            </h3>
                            <p className="text-sm text-slate-400"> By FoodConnect, Feb 19, 2024</p>
                        </div>
                    </header>
                    <p>
                        Discover how FoodShare Hub is revolutionizing surplus food redistribution, connecting donors with recipients to ensure that no edible food goes to waste.
                    </p>
                </div>

                <div className="flex justify-end gap-2 p-2 pt-0">
                    <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-accent transition duration-300 hover:bg-accent/60 hover:text-white focus:bg-emerald-200 focus:text-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span>Read more</span>
                    </button>
                </div>
            </div>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 group">

                <figure className='w-96 h-56 overflow-hidden'>
                    <img
                        src="https://www.ceo-review.com/wp-content/uploads/2021/05/The-power-of-community-engagement.jpg"
                        alt="card image"
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                </figure>

                <div className="p-6 h-60 w-96">
                    <header className="mb-4 flex gap-4">
                        <a
                            href="#"
                            className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            <img
                                src="https://i.pravatar.cc/48?img=25"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                        </a>
                        <div>
                            <h3 className="font-medium text-slate-700">
                                Building Stronger Connections Through FoodConnect
                            </h3>
                            <p className="text-sm text-slate-400"> By FoodConnect, Feb 19, 2024</p>
                        </div>
                    </header>
                    <p>
                        Learn about the inspiring stories of individuals and discover how you can join our community-driven efforts to create a more sustainable food system.
                    </p>
                </div>

                <div className="flex justify-end gap-2 p-2 pt-0">
                    <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-accent transition duration-300 hover:bg-accent/60 hover:text-white focus:bg-emerald-200 focus:text-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span>Read more</span>
                    </button>
                </div>
            </div>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 group">

                <figure className='w-96 h-56 overflow-hidden'>
                    <img
                        src="https://imageio.forbes.com/specials-images/imageserve/6016aaa3f744a032840bf660/Zero-waste-shopping-concept/960x0.jpg?format=jpg&width=960"
                        alt="card image"
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                </figure>

                <div className="p-6 h-60 w-96">
                    <header className="mb-4 flex gap-4">
                        <a
                            href="#"
                            className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            <img
                                src="https://i.pravatar.cc/48?img=25"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                        </a>
                        <div>
                            <h3 className="font-medium text-slate-700">
                                Reducing Food Waste With FoodConnect
                            </h3>
                            <p className="text-sm text-slate-400"> By FoodConnect, Feb 19, 2024</p>
                        </div>
                    </header>
                    <p>
                        Get insights into sustainable food solutions and learn practical tips for reducing food waste in your daily life with FoodShare Hub. From meal planning to composting.
                    </p>
                </div>

                <div className="flex justify-end gap-2 p-2 pt-0">
                    <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-accent transition duration-300 hover:bg-accent/60 hover:text-white focus:bg-emerald-200 focus:text-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span>Read more</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Articles;
