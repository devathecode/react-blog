import React from 'react';
import Blogcard from "../../../shared/components/Blogcard/Blogcard";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Banner from "../../components/Banner/Banner";
import {ToastContainer} from "react-toastify";

const Home = () => {
    return (
        <>
            <Banner/>
            <div className="max-w-6xl mx-auto my-10 p-4 md:p-3 lg:p-2 xl:p-0">
                <h1 className="text-2xl italic text-start my-8">
                    <TrendingUpIcon className="mr-4 border border-green-500 rounded-full text-green-500"
                                    style={{height: '2rem', width: '2rem'}}/>
                    <span className="text-sky-900">Trending blogs -</span>
                </h1>
                <div className="grid grid-cols-12 gap-2 md:gap-5 lg:gap-8 xl:gap-20 place-items-center">
                    <div className="col-span-12 md:col-span-6">
                        <Blogcard/>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Blogcard/>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Blogcard/>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Blogcard/>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default Home;
