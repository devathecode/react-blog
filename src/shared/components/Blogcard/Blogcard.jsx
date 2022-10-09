import React from 'react';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const Blogcard = () => {
    return (
        <div className="bg-white rounded-lg border border-gray-500 shadow hover:shadow-none sm:flex cursor-pointer transition ease-in-out delay-400 relative">
            <div className="absolute -top-2 right-4 h-10 w-6 shadow-2xl shadow-gray-400">
                <div className="relative">
                    <TurnedInIcon className="text-green-600" style={{height: '2.5rem', width: '2.5rem'}}/>
                    <div className="absolute top-0.5 right-0 text-white text-lg font-bold">
                        1
                    </div>
                </div>
            </div>
            <img src="https://i.postimg.cc/d1BM8pWg/map.png" alt="Laptop on Desk"
                 className="sm:w-1/3 w-full object-fill rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg"/>
            <div className="md:flex flex-col p-6">
                <h2 className="font-bold text-xs text-sky-900 mb-1 tracking-widest">Devanshu verma</h2>
                <h2 className="font-bold text-xl md:text-2xl text-sky-900 mb-2">Horizontal Card</h2>
                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque debitis harum in modi
                    non repellendus...
                </p>
                <div className="mt-2 flex justify-between">
                    <div className="order-first flex flex-row">
                        <span className="text-xs text-gray-400">Sept 2022 . 2min read</span>
                    </div>
                    <div className="order-last">
                        Read more
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogcard;
