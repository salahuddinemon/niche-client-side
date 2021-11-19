import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const OrderPlace = () => {
    const { productId } = useParams();
    const [orderedProduct, setOrderedProduct] = useState({});
    const { user } = useAuth();
    const [orderSuccess, setOrderSuccess] = useState(false);
    const initialInfo = { customerName: user.displayName, customerEmail: user.email, phoneNumber: '', address: '', city: '', state: '', zip: '', country: '' };
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        //collect data 
        const completedOrder = {
            ...orderInfo,
            productImg: orderedProduct.img,
            productName: orderedProduct.ProductName,
            price: orderedProduct.price
        }

        //send to the server
        fetch('https://vast-plains-22065.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(completedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId === true) {
                    setOrderSuccess(true)
                    orderSuccess && alert('order Completed Succesfully')
                    // orderSuccess && swal("Thank you!", "Your order successfully done!");

                }

            })

        e.preventDefault();
    }

    useEffect(() => {
        fetch(`https://vast-plains-22065.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setOrderedProduct(data))
    }, [])
    return (
        <div>
            <form onSubmit={handleOrderSubmit} id="payment-form" method="POST" action="">
                <div>
                    <div className="grid grid-cols-3 mb-28 mx-2">

                        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
                            <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md mt-24">
                                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                                    <div className="text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-sm font-medium ml-3">Checkout</div>
                                </div>
                                <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </div>
                            </div>
                            <div className="rounded-md">
                                {/* <form onClick={handleOrderSubmit} id="payment-form" method="POST" action=""> */}
                                <section>
                                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                                    <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600 ">
                                        <label className="flex border-b border-gray-200 h-12 py-3 items-center ml-6">
                                            <span className="text-right px-2">Name</span>
                                            <input onBlur={handleOnBlur} name="customerName" className="focus:outline-none px-3" defaultValue={user.displayName} required="" />
                                        </label>
                                        <label className="flex border-b border-gray-200 h-12 py-3 items-center ml-6">
                                            <span className="text-right px-2">Email</span>
                                            <input onBlur={handleOnBlur} name="customerEmail" type="email" className="focus:outline-none px-3" defaultValue={user.email} required="" />
                                        </label>
                                        <label className="flex border-b border-gray-200 h-12 py-3 items-center ml-6">
                                            <span className="text-right px-2">Phone Number</span>
                                            <input onBlur={handleOnBlur} name="phoneNumber" type="number" className="focus:outline-none px-3" defaultValue="phone number" required="" />
                                        </label>
                                        <label className="flex border-b border-gray-200 h-12 py-3 items-center ml-6">
                                            <span className="text-right px-2">Address</span>
                                            <input onBlur={handleOnBlur} name="address" className="focus:outline-none px-3" placeholder="10 Street XYZ 654" />
                                        </label>
                                        <label className="flex border-b border-gray-200 h-12 py-3 items-center ml-6">
                                            <span className="text-right px-2">City</span>
                                            <input onBlur={handleOnBlur} name="city" className="focus:outline-none px-3" placeholder="San Francisco" />
                                        </label>
                                        <label className="flex border-b border-gray-200 h-12 py-3 items-center ml-6">
                                            <span className="text-right px-2">State</span>
                                            <input onBlur={handleOnBlur} name="state" className="focus:outline-none px-3" placeholder="CA" />
                                        </label>
                                        <label className="flex border-b border-gray-200 h-12 py-3 items-center ml-6">
                                            <span className="text-right px-2">ZIP</span>
                                            <input onBlur={handleOnBlur} name="zip" className="focus:outline-none px-3" placeholder="98603" />
                                        </label>
                                        <label className="flex border-t border-gray-200 h-12 py-3 items-center ml-6 select relative">
                                            <span className="text-right px-2">Country</span>
                                            <div id="country" className="focus:outline-none px-3 w-full flex items-center">
                                                <select onBlur={handleOnBlur} name="country" className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none">
                                                    <option value="Australia">Australia</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="China">China</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="United States" defaultValue="selected">United States</option>
                                                </select>
                                            </div>
                                        </label>
                                    </fieldset>
                                </section>
                                {/* </form> */}
                            </div>
                            <div className="rounded-md">
                                <section>
                                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                                    <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                            <span className="text-right px-2">Card</span>
                                            <input name="card" className="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" required="" />
                                        </label>
                                    </fieldset>
                                </section>
                            </div>
                            <button className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                                Complete Order
                            </button>
                        </div>
                        <div className="lg:col-span-1 col-span-4 bg-white lg:block  mt-20">
                            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
                            <ul className="py-6 border-b space-y-6 px-8">
                                <li className="grid grid-cols-6 gap-2 border-b-1">
                                    <div className="col-span-1 self-center">
                                        <img src={orderedProduct.img} alt="" className="rounded w-full" />
                                    </div>
                                    <div className="flex flex-col col-span-3 pt-2">
                                        <span className="text-gray-600 text-md font-semi-bold">{orderedProduct.ProductName}</span>
                                        <span className="text-gray-400 text-sm inline-block pt-2">{orderedProduct.category}</span>
                                    </div>
                                    <div className="col-span-2 pt-3">
                                        <div className="flex items-center space-x-2 text-sm justify-between">
                                            <span className="text-gray-400"> -------</span>
                                            <span className="text-pink-400 font-semibold inline-block">${orderedProduct.price}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="px-8 border-b">
                                <div className="flex justify-between py-4 text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-pink-500">${orderedProduct.price}</span>
                                </div>
                                <div className="flex justify-between py-4 text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-pink-500">Free</span>
                                </div>
                            </div>
                            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                                <span>Total</span>
                                <span>${orderedProduct.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default OrderPlace;