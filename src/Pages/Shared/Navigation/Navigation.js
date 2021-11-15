import React, { useState } from 'react';
import logo from '../../../image/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBell,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons"
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user } = useAuth();
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <div>
            <div className="flex items-center h-20 px-6 justify-between border-b border-gray-300 bg-blue-800 text-white relative z-50">
                <Link to='/home'>
                    <div className="h-8">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className="flex-1 ml-10 items-center hidden lg:flex">
                    <NavLink to="/home" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                    >Home</NavLink>
                    <NavLink to="/products" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                    >Products</NavLink>
                    <NavLink to="/about" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                    >About Us</NavLink>
                    <NavLink to="/contact" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                    >Contact Us</NavLink>
                </div>
                <div className="items-center hidden lg:flex">
                    <NavLink to="/explore" className="no-underline px-2 text-gray-200 font-medium hover:text-blue-400"
                    >Explore More</NavLink>
                    <FontAwesomeIcon
                        icon={faBell}
                        className="ml-6 mr-3 text-2xl cursor-pointer"
                    />
                    <div>
                        {
                            user?.email ?
                                <NavLink to="/admindashboard" className="no-underline text-gray-200 font-medium hover:text-blue-400"
                                >User Panel</NavLink>
                                :
                                <NavLink to="/login" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                                >Login/Register</NavLink>
                        }
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={mobileOpen ? faTimes : faBars}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="text-white text-3xl cursor-pointer lg:hidden"
                />
                {mobileOpen && (
                    <div className="bg-blue-800 absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
                        <div className="flex-1 flex flex-col items-center text-xl">
                            <NavLink to="/home" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                            >Home</NavLink>
                            <NavLink to="/products" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                            >Products</NavLink>
                            <NavLink to="/about" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                            >About Us</NavLink>
                            <NavLink to="/contact" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                            >Contact Us</NavLink>
                            {/* <button text="Add Food" size="sm" className="my-2" /> */}
                            <div className="my-2 flex justify-center">
                                <NavLink to="/explore" className="no-underline px-2 text-gray-200 font-medium hover:text-blue-400"
                                >Explore More</NavLink>
                                <FontAwesomeIcon
                                    icon={faBell}
                                    className="text-2xl mx-2 cursor-pointer"
                                />

                            </div>
                            <div>
                                {
                                    user?.email ?
                                        <NavLink to="/admindashboard" className="no-underline text-gray-200 font-medium hover:text-blue-400"
                                        >User Panel</NavLink>
                                        :
                                        <NavLink to="/login" className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
                                        >Login/Register</NavLink>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Display Banner  */}

        </div>

    );
};

export default Navigation;