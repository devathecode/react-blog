import React, {useEffect} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {toast} from "react-toastify";

const LoginGuard = () => {
    let auth = !!localStorage.getItem('auth-token');
    const location = useLocation();
    let message = '';
    console.log('location', location);
    useEffect(() => {
        if (auth) {
            switch (location.pathname) {
                case '/login':
                    message = 'Welcome back';
                    break;
                case '/register':
                    message = 'You are already logged. Cannot view registration page.';
                    break;
                default :
                    message = 'You are already logged. Please logout to verify your email.'
                    break
            }
            toast.info(message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }, [auth]);


    return (
        auth ? <Navigate to='/'/>: <Outlet/>
    )
};

export default LoginGuard;
