import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const { register } = useForm();

    return (
        <div className="min-h-screen px-[3vw] flex items-center justify-center -mt-24">
            <div className='flex flex-col gap-5 w-96 bg-gray-100/30 shadow px-16 py-10 rounded-md my-40'>
                <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-[#50577A] shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#FF6C22] transition-all text-sm sm:p-4">
                    <svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                        <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                        <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                        <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                        <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                    </svg>
                    Sign up with Google
                </button>

                <form>
                    <div class="mb-4">
                        <input {...register("name", { required: true })} type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-[#FF6C22] sm:p-4" placeholder="Full Name" name='name' />
                    </div>
                    <div class="mb-4">
                        <input {...register("photo")} type="url" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-[#FF6C22] sm:p-4" placeholder="Photo URL" name='photo' />
                    </div>
                    <div class="mb-4">
                        <input {...register("email", { required: true })} type="email" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-[#FF6C22] sm:p-4" placeholder="Email address" name='email' />
                    </div>

                    <div class="mb-4">
                        <input {...register("password", { required: true, minLength: 4 })} type="password" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-[#FF6C22] sm:p-4" placeholder="Password" name='password' />
                    </div>

                    <div class="grid">
                        <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FF6C22] text-white hover:bg-[#FF6C22] focus:outline-none focus:ring-2 focus:ring-[#FF6C22] focus:ring-offset-2 transition-all text-smsm:p-4">Sign Up</button>
                    </div>
                </form>
                <p class="mt-5 text-sm text-center text-[#50577A]">
                    Already have an account? <span className='font-semibold hover:text-[#FF6C22] transition-all duration-200'><NavLink to="/login">Sign In Now</NavLink></span>
                </p>
            </div>
        </div>
    );
};

export default Register;