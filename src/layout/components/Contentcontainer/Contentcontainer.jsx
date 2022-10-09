import React, {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "layout/pages/Home/Home";
import Header from "layout/components/Header/Header";
import Footer from "layout/components/Footer/Footer";
import Login from "../../pages/User/Login/Login";
import Register from "../../pages/User/Register/Register";
import Postblog from "../../pages/Post/Postblog/Postblog";
import Verify from "../../pages/User/Verify/Verify";
import LoginGuard from "../../../core/Guards/LoginGuard/LoginGuard";
import NonLoggedGuard from "../../../core/Guards/NonLoggedGuard/NonLoggedGuard";

export const UserContext = React.createContext(false);
const Contentcontainer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth-token') !== null);
    const handleIsLoggedIn = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () =>{
        localStorage.removeItem('auth-token');
        setIsLoggedIn(false);
    }
    return (
        <UserContext.Provider value={isLoggedIn}>
            <Header setNotLoggedIn={handleLogout}/>
            <div className="z-10">
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route element={<LoginGuard/>}>
                        <Route path="/post" element={<Postblog/>}/>
                    </Route>
                    <Route element={<NonLoggedGuard/>}>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/verify/:token" element={<Verify/>}/>
                        <Route path="/login" element={<Login setLogIn={handleIsLoggedIn}/>}/>
                    </Route>
                    <Route path="" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </div>
        </UserContext.Provider>
    );
};

export default Contentcontainer;
