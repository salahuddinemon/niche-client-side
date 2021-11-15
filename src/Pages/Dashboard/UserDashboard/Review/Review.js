import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://vast-plains-22065.herokuapp.com/reviews', data)
            .then(res => {
                console.log(data);
                if (res.data.insertedId) {
                    swal("Good job!", "The product upload is done!", "success");
                    reset();
                }
            })
    }

    return (
        <div className="flex justify-center items-center w-full bg-gray-100">
            <div className="w-1/2 my-36 bg-white rounded shadow-2xl p-8 m-4">
                <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add New Product</h1>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="reviewerName">Your Name</label>
                        <input className="border py-2 px-3 text-grey-800" defaultValue={user.displayName} type="text"  {...register("reviewerName")} />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="reviewerName">Your Email</label>
                        <input className="border py-2 px-3 text-grey-800" defaultValue={user.email} type="email"  {...register("email")} />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="review">Write A Review</label>
                        <textarea className="border py-8 px-3 text-grey-800" {...register("review")} ></textarea>
                    </div>
                    {/* <div className="text-right">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold">Submit</button>
                    </div> */}
                    <hr />
                    <input type="Submit" defaultValue="Review Us" className="bg-blue-600 py-4 px-4 text-white w-full rounded-lg font-semibold text-center focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in" />
                </form>
            </div>
        </div>
    );
};

export default Review;