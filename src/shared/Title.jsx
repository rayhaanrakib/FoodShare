import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Title = ({ align, heading, para }) => {
    return (
        <div className={`text-${align} relative container mx-auto lg:w-[500px]`}>
            <h2 className='uppercase lg:text-xl w-full text-primary font-medium tracking-wide select-none'><Fade cascade damping={0.1}>{heading}</Fade></h2>
            <p className='text-secondary my-6 font-semibold px-20 lg:px-0 text-xl lg:text-3xl'>{para}</p>
        </div>

    );
};

export default Title;