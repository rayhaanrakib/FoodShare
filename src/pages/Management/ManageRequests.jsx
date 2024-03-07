import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ManageRequestsList from './ManageRequestsList';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const ManageRequests = () => {
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.slice(pathname.lastIndexOf('/') + 1);
    const url = `/requested?food=${id}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                console.log(res.data);
                setData(res.data)
                setIsLoading(false)
            })
    }, [id, url, axiosSecure])
    return (
        <div className='container mx-auto px-5 md:px-0'>
            {
                isLoading ?
                    (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/TqhV9yt/loading.gif" alt="" /></div>)
                    :
                    (<div class="relative min-h-screen my-10 overflow-x-auto shadow-lg sm:rounded-lg">
                        <h1 className='text-center text-2xl md:text-4xl font-bold mb-10'>Requests</h1>
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-3 py-2">
                                        Requester
                                    </th>
                                    <th scope="col" class="px-3 py-2">
                                        Status
                                    </th>
                                    <th scope="col" class="px-3 py-2">
                                        Requester Name
                                    </th>
                                    <th scope="col" class="px-3 py-2">
                                        Expire Day
                                    </th>
                                    <th scope="col" class="px-3 py-2 ">
                                        Requester Email
                                    </th>
                                    <th scope="col" class="px-3 py-2 ">
                                        Donation
                                    </th>
                                    <th scope="col" class="px-3 py-2 ">
                                        Request Date
                                    </th>
                                    <th scope="col" class="px-3 py-2">
                                        Confirm
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(details => <ManageRequestsList key={details._id} details={details}></ManageRequestsList>)
                                }
                            </tbody>
                        </table>
                    </div>)
            }
        </div>
    );
};

export default ManageRequests;