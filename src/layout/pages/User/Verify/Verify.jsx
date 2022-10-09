import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import UserService from "../../../../core/Services/UserService/UserService";

const Verify = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const verifyTokenFromUrl = () =>{
        UserService.verifyToken(params.token).then((res) =>{
            if(res.response.status === 409){
                navigate('/login');
            }
            else{
                setShow(true)
            }
        })
    }

    useEffect(() =>{
        verifyTokenFromUrl();
    },[])
    return (
        <>
            {show ? (
                <div className="bg-gray-100 rounded-xl shadow-xl max-w-5xl mx-auto p-10 my-20">
                    <div className="flex justify-between">
                        <div className="order-first">
                            <FcNext className="text-xl font-bold"/>
                        </div>
                        <div className="order-last">
                            <FcPrevious className="text-xl font-bold"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-5xl font-bold">SUCCESS! YOU ARE SIGNED-UP.</h1>
                        <img src="https://i.postimg.cc/g2pVCsSq/check-circle.gif" className="h-32 w-32 mt-5" alt=""/>
                        <div className="my-5">
                            <p className="text-xl font-semibold text-gray-500">
                                Thank you for signing-up, it means a lot to us, just like you do! We really appreciate you giving us a moment of your time.
                            </p>
                        </div>
                        <p className="text-xl font-semibold text-gray-500">
                            Your coupon code can be found in your welcome email.
                        </p>
                        <p className="my-5 text-xl font-semibold">
                            <span className="text-gray-500">Please</span> <NavLink to={'/login'} className="text-sky-500 underline">login</NavLink> <span className="text-gray-500">to proceed.</span>
                        </p>
                    </div>
                </div>
            ) : (
                <h1>Loading....</h1>
            )}
        </>
    );
};

export default Verify;
