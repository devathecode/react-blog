import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {UserContext} from "../Contentcontainer/Contentcontainer";
import UserService from "../../../core/Services/UserService/UserService";
import {toast} from "react-toastify";

const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const toggleHamburger = () => {
        setShowMenu((prevState) => {
            return !prevState;
        })
    };
    const isLoggedIn = useContext(UserContext);
    console.log('isLoggedIn', isLoggedIn);
    const logout = () =>{
        UserService.logout();
        props.setNotLoggedIn();
        navigate('/');
        toast.success('Successfully logged out');
    }
    return (
        <>
            <header className="sticky top-0 z-50">
                <nav
                    className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white shadow px-2 md:px-5 lg:px-10">
                    <div>
                        <NavLink to="/">
                            {/*<img src="https://i.postimg.cc/ZKFLDsm1/Blog-logo.png" className="w-full object-cover w-12 h-12" alt=""/>*/}
                            <h1 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
                                World of Words
                            </h1>
                        </NavLink>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>

                    <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                        <ul className="pt-4 text-gray-700 md:flex md:justify-between md:pt-0">
                            <NavLink to="/">
                                <li className="cursor-pointer md:p-4 py-2 block hover:text-purple-400 font-semibold text-color-one hover:text-color-two text-md">
                                    Home
                                </li>
                            </NavLink>
                        </ul>
                        {!isLoggedIn ? (
                            <>
                                <ul className="pt-4 text-gray-700 md:flex md:justify-between md:pt-0">
                                    <NavLink to="/register">
                                        <li className="cursor-pointer md:p-4 py-2 block hover:text-purple-400 font-semibold text-color-one hover:text-color-two text-md">
                                            Register
                                        </li>
                                    </NavLink>
                                </ul>
                                <ul className="pt-4 text-gray-700 md:flex md:justify-between md:pt-0">
                                    <NavLink to="/login">
                                        <li className="cursor-pointer md:p-4 py-2 block hover:text-purple-400 font-semibold text-color-one hover:text-color-two text-md">
                                            Login
                                        </li>
                                    </NavLink>
                                </ul>
                            </>
                        ) : (
                            <>
                                <ul className="pt-4 text-gray-700 md:flex md:justify-between md:pt-0">
                                    <NavLink to="/post">
                                        <li className="cursor-pointer md:p-4 py-2 block hover:text-purple-400 font-semibold text-color-one hover:text-color-two text-md">
                                            Post
                                        </li>
                                    </NavLink>
                                </ul>
                                <ul className="pt-4 text-gray-700 md:flex md:justify-between md:pt-0">
                                    <li onClick={logout} className="cursor-pointer md:p-4 py-2 block hover:text-purple-400 font-semibold text-color-one hover:text-color-two text-md">
                                        Logout
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
