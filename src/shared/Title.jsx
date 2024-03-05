import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Title = ({ align, heading, para }) => {
    return (
        <div className={`text-${align} relative container mx-auto w-[500px]`}>
            <h2 className='uppercase text-xl text-center w-full text-primary tracking-wide select-none'><Fade cascade damping={0.1}>{heading}</Fade></h2>
            <p className='text-secondary my-6 font-semibold  text-center text-3xl'>{para}</p>
        </div>

    );
};

export default Title;