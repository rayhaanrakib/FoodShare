import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto'>
            <img className='w-fit h-fit object-cover' src="https://i.ibb.co/r0cQsXx/k-Gw-R3u-Dr-UKPI.gif" alt="" />
            <PrimaryButton text="Return to home" url="/"></PrimaryButton>
        </div>
    );
};

export default Error;