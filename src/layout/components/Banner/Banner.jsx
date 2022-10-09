import React from 'react';
import {TypeAnimation} from "react-type-animation";
import classes from './Banner.module.css';
import {useNavigate} from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-12 gap-2 md:gap-5 lg:gap-8 xl:gap-24 p-5 bg-sky-900">
            <div className="col-span-12 md:col-span-6 my-auto">
                <h1 className="text-5xl font-bold text-white">Stop thinking, Just dive in...</h1>
                <p className="text-2xl text-color-two font-semibold my-8">
                    <TypeAnimation
                        sequence={[
                            'Discover all you want', // Types 'One'
                            2000, // Waits 1s
                            'Discover all you want thinking', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'Discover all you want expertise', // Types 'Three' without deleting 'Two'
                            2000,
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                    />
                </p>
                <button className="bg-sky-400 text-lg rounded-md px-4 py-1 text-white font-bold shadow-xl hover:shadow-none hover:bg-sky-500" onClick={() => {navigate('/register')}}>
                    Get Started
                </button>
            </div>
            <div className="hidden md:block col-span-6 my-auto relative">
                {/*<img src="https://i.postimg.cc/k4fdYBvB/pages.png" className="invert h-20 w-20" alt=""/>*/}
                <img src="https://i.postimg.cc/ydhJrXDs/mainImg.webp" className="max-w-full h-auto" alt=""/>
            </div>
        </div>
    );
};

export default Banner;
