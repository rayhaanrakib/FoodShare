import { useEffect, useState } from 'react'
import useAuth from './../hooks/useAuth';
import useAxiosSecure from './../hooks/useAxiosSecure';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';


const FoodDetails = () => {
    const { user } = useAuth();
    const requesterEmail = user?.email;
    const requesterName = user?.displayName;
    const requesterImage = user?.photoURL;

    const [foods, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/all/services')
            .then(res => {
                setData(res.data)
                setIsLoading(false);
            })
    }, [])
    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.slice(pathname.lastIndexOf('/') + 1);
    const food = foods.find(item => item._id == id);
    const { _id, DonorName, DonorEmail, Location, FoodImage, FoodName, FoodQuantity, ExpiredDay, Status, DonorImage, Description, Details } = food || {};
    const food_id = _id;
    const now = new Date();
    const date = now.toLocaleDateString('en-GB');
    const requestDate = date.split(',')[0];


    const handleRequest = e => {
        e.preventDefault();
        const form = e.target;
        const Notes = form.notes.value;
        const Donate = parseInt(form.donate.value);
        const food = { food_id, DonorName, DonorEmail, DonorImage, requesterEmail, requesterName, Location, Notes, Donate, FoodImage, FoodName, FoodQuantity, ExpiredDay, Status, requesterImage, Description, requestDate };
        fetch('https://foodshare-server-mu.vercel.app/requested', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(food)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success('Successfully Requested!')
                    window.location.href = '/requests';
                } else {
                    console.log('Already Requested');
                }
            })

    }





    return (
        <div className='container mx-auto px-10 lg:px-0 py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between'>
                <div className="relative group overflow-hidden w-full lg:w-[600px] h-[600px]">
                    <img className='w-full lg:w-[600px] h-[600px] object-cover group-hover:scale-125 transition-all duration-700 rounded' src={FoodImage} alt="" />
                </div>
                <div className="py-10 lg:py-0 h-[600px]">
                    <h2 className='font-medium text-lg tracking-wide'>Status :<span className='text-accent'>{Status ? (<span> Available</span>) : (<span className='text-primary'> Not Available</span>)}</span></h2>
                    <h1 className='text-2xl md:text-4xl font-medium my-4'>{FoodName}</h1>
                    <p className='text-gray-500 text-sm'>{Description}</p>
                    <h3 className='my-3 font-medium'>Pickup Location : <span className='text-accent'>{Location}</span></h3>
                    <h3 className='my-3 font-medium'>Quantity : <span className='text-accent'>{FoodQuantity} Items</span></h3>
                    <h3 className='my-3 font-medium'>Expired Day : <span className='text-accent'>{ExpiredDay} Days</span></h3>
                    {Status ?
                        (<a onClick={() => document.getElementById('request_modal').showModal()} class="relative cursor-pointer inline-block px-5 py-3 rounded-sm font-medium group my-2">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-sm"></span>
                            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-sm"></span>
                            <span class="relative text-black group-hover:text-white capitalize text-lg">Request</span>
                        </a>)
                        :
                        ('')}
                    <dialog id="request_modal" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <div className="">
                                <form onSubmit={handleRequest} method="dialog">
                                    <p className="  font-semibold">Donor info</p>
                                    <p className=" text-sm">Email: {DonorEmail}</p>
                                    <p className=" mb-4 text-sm">Name: {DonorName}</p>
                                    <p className="  font-semibold">Your info</p>
                                    <p className=" text-sm">Name: {requesterName}</p>
                                    <p className=" text-sm">Email: {requesterEmail}</p>
                                    <p className=" mb-4 text-sm">Request Date: {requestDate}</p>
                                    <input name='notes' className='border my-2 p-2 rounded outline-none mr-2' type="text" placeholder='Additional Notes' />
                                    <input name='donate' className='border my-2 p-2 rounded outline-none mr-2' type="number" placeholder='Donate Money' />
                                    <input className='relative rounded px-8 py-[10px] overflow-hidden group bg-primary cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300' type="submit" value="Request" />
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <h3 className='mt-6 text-xl font-medium'>Details :</h3>
                    <p className='text-gray-500 my-2 pr-5'>{Details}</p>
                    <div data-tip={DonorEmail} className='tooltip mt-6 flex items-center gap-4 w-1/2'>
                        <div className='w-16 h-16 overflow-hidden rounded-md select-none'>
                            <img className='w-16 h-16 object-cover scale-150 rounded-md' src={DonorImage} alt="" />
                        </div>

                        <h2 className="font-medium text-lg">{DonorName}</h2>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default FoodDetails;





