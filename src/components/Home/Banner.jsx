
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <div className="select-none">
            <div className="container mx-auto my-2">
                <div className="grid items-center justify-between lg:justify-items-end grid-cols-6 lg:grid-cols-12 gap-10 px-8 h-[650px] rounded-md">
                    <div className="col-span-6">
                        <h2 className="text-lg lg:text-xl font-medium my-3 text-accent"><Fade cascade damping={0.1}>Join the FoodConnect Movement</Fade></h2>
                        <h3 className="text-3xl lg:text-6xl leading-[60px] capitalize font-medium mt-5 text-black">Connecting <span className="text-primary">Communities,</span> Reducing Waste</h3>
                        <h3 className="text-base capitalize mt-8 text-secondary">Discover how FoodConnect Hub is transforming surplus into sustenance, fostering community connections, and combating food waste.</h3>
                        <a href="login" class="relative mt-8 inline-flex items-center justify-start px-8 py-4 overflow-hidden font-medium transition-all bg-accent rounded-md hover:bg-primary group">
                            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-primary rounded-md"></span>
                            <span class="relative w-full text-left uppercase text-white font-sans transition-colors duration-400 ease-in-out group-hover:text-white">join now</span>
                        </a>
                    </div>
                    <div className="col-span-6 lg:items-end relative hidden lg:block">
                        <img
                            src="https://optimise2.assets-servd.host/hubbub-uk/production/assets/images/Food-Connect_Hubbub-Website-Image-Template_1440x900px.jpg?w=1440&h=600&auto=compress%2Cformat&fit=crop&dm=1690190866&s=e740c09b91af535c3c50a04c639663bf"
                            className="rounded-2xl z-20 h-[500px] object-cover w-[550px]"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
