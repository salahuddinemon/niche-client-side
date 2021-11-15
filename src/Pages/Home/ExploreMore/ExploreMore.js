import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ExploreMore = ({ product }) => {
    const { _id, img, ProductName
        , category, price, description, lensColor, size, lensFeature, frameMaterial, frameStyle, BestSuitedFor } = product;

    const [show, setShow] = useState(false);
    // const [show2, setShow2] = useState(false);
    return (
        <>
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                    <img className="w-full" alt="" src={img} />
                </div>
                <div className="md:hidden">
                    <img className="w-full" alt="" src={img} />
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-4 bg-gray-100">
                        <h1
                            className="
        					lg:text-2xl
        					text-xl
        					font-bold
        					lg:leading-6
        					leading-7
        					text-indigo-500
        					mt-4
                            pt-4
        				"
                        >
                            {ProductName
                            }
                        </h1>
                        <p className="text-base mt-2 leading-none text-gray-600">{category}</p>
                    </div>
                    <br />
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Colours</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600">{lensColor}</p>

                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Size</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600 mr-3">{size}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Price</p>
                        <div className="flex items-center justify-center">
                            <p className="text-indigo-500 text-xl font-medium">
                                ${price}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                        <Link to={`/orderPlace/${_id}`} className="w-full px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                            Add to cart
                        </Link>
                    </div>
                    <div>
                        <p className="font-bold text-gray-600 mt-6 text-2xl">Product Details</p> <hr />
                        <p className=" text-base lg:leading-tight leading-normal text-gray-600 mt-7">{description}</p>
                        <p className="text-base leading-4 mt-4 text-gray-600 font-semibold">Lens colour: {lensColor}</p>
                        <p className="text-base leading-4 mt-4 text-gray-600 font-semibold">Lens feature: {lensFeature}</p>
                        <p className="text-base leading-4 mt-4 text-gray-600 font-semibold">Frame material: {frameMaterial}</p>
                        <p className="text-base leading-4 mt-4 text-gray-600 font-semibold">Frame style: {frameStyle}</p>
                        <p className="md:w-96 text-base leading-normal text-gray-600 mt-4 font-semibold">Best suited for: {BestSuitedFor}</p>
                    </div>
                    <div>
                        <div className="border-t border-b py-4 mt-7 border-gray-200">
                            <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                                <p className="text-base font-bold leading-4 text-gray-600">Shipping and returns</p>
                                <button
                                    className="
        							cursor-pointer
        							focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
        							rounded
        						"
                                    aria-label="show or hide"
                                >
                                    <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                                <p>100% Original Products</p>
                                <p>Pay on delivery might be available</p>
                                <p>Easy 30 days returns and exchanges</p>
                                <p>Try & Buy might be available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="flex items-center justify-center ml-20 w-4/5 flex-wrap lg:px-12 shadow border-solid border-t-1 border-blue-600" />
        </>
    );
};

export default ExploreMore;