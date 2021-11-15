import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import { Loader } from 'rsuite';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            swal({
                title: "Password is wrong?",
                text: "Your password did not matched",
                icon: "warning",
                dangerMode: true,
            })
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <section className=" bg-blueGray-50">
                <div className="w-full lg:w-6/12 px-4 mx-auto pt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <p aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                                    Sign up on
                                </p>
                                <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                                    Already registered?{" "}
                                    <NavLink to='/login' aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                        {" "}
                                        Login
                                    </NavLink>
                                </p>
                            </div>
                            <button aria-label="Continue with google" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-12 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                                <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                                    <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                                    <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                                    <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                                </svg>
                                <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                            </button><hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-blueGray-400 text-center mb-3 font-bold">
                                <small>Or sign up with credentials</small>
                            </div>
                            {!isLoading && <form onSubmit={handleLoginSubmit}>
                                <div>
                                    <p className="text-sm font-medium leading-none text-gray-800">Your Name</p>
                                    <input onBlur={handleOnBlur} aria-label="your name" type="text" name="name"
                                        className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium leading-none text-gray-800 ">Email</p>
                                    <input onBlur={handleOnBlur} aria-label="enter email adress" type="email" name="email"
                                        className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                </div>
                                <div className="mt-6  w-full">
                                    <p className="text-sm font-medium leading-none text-gray-800">Password</p>
                                    <div className="relative flex items-center justify-center">
                                        <input onBlur={handleOnBlur} aria-label="enter Password" type="password" name="password" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                    </div>
                                </div>
                                <div className="mt-6  w-full">
                                    <p className="text-sm font-medium leading-none text-gray-800">Re-type Password</p>
                                    <div className="relative flex items-center justify-center">
                                        <input onBlur={handleOnBlur} aria-label="re-enter Password" type="password" name="password2" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button type="submit" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                                        Sign Up
                                    </button>
                                </div>
                            </form>}
                            {isLoading && <Loader size="lg" content="Loading..." />}
                            {user.email &&
                                <p class="px-4 py-3 leading-normal text-white-100 bg-green-200 rounded-lg" role="alert">User Created Successfully</p>
                            }
                            {authError &&
                                <p class="px-4 py-3 leading-normal text-red-100 bg-red-700 rounded-lg" role="alert">{authError}</p>
                            }

                            {/*{user?.email &&
                                swal({
                                    title: "Congrates!",
                                    text: "Your registration is successfull!",
                                    icon: "success",
                                    button: "Thanks!",
                                })}
                            {authError &&
                                swal({
                                    title: "Authentication Error",
                                    text: "User already created this email",
                                    icon: "warning",
                                    dangerMode: true,
                                })} */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;