import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-yellow-300 via-red-400 to-pink-200">
                <div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
                    <div className=" m-0  p-0  text-3xl  text-white  antialiased  text-center">Get Our Updates</div>
                    <div className=" m-0  p-0  text-xl  text-white  antialiased  text-center">Find out about events and other news</div>
                    <div className=" mt-3  flex  flex-row  flex-wrap">
                        <input type="text" className=" text-gray-600  w-2/3  p-2  rounded-l-lg" placeholder="john@mail.com" />
                        <button className=" p-2  w-1/3  bg-indigo-400  rounded-r-lg  text-white hover: bg-indigo-300" type="button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;