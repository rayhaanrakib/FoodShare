import React from 'react';

const PrimaryButton = ({ text, url }) => {
    return (
        <a href={url} className="relative rounded px-10 py-[10px] overflow-hidden group bg-accent  hover:bg-gradient-to-r hover:from-accent hover:to-accent text-white hover:ring-2 hover:ring-offset-2 hover:ring-accent transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative uppercase font-medium text-xl">{text}</span>
        </a>
    );
};

export default PrimaryButton;