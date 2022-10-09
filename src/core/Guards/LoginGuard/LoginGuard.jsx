import React, {useEffect} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {toast} from "react-toastify";

const LoginGuard = () => {
    let auth = !!localStorage.getItem('auth-token');
    useEffect(() => {
        if (!auth) {
            toast.error('Please login to view this page', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }, [auth]);


    return (
        auth ? <Outlet/> : <Navigate to='/login'/>
    )
};

export default LoginGuard;
