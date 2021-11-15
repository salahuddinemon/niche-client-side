import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://vast-plains-22065.herokuapp.com/products', data)
            .then(res => {
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
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="ProductName">Product Name</label>
                        <input className="border py-2 px-3 text-grey-800" type="text"  {...register("ProductName")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="category">Category</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" {...register("category")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="img">Image Link</label>
                        <input className="border py-2 px-3 text-grey-800" {...register("img")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="productPrice">Product Price</label>
                        <input className="border py-2 px-3 text-grey-800" type="number"{...register("price")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="size">Size</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" {...register("size")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="lensColor">Lens Color</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" {...register("lensColor")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="frameStyle">Frame style</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" {...register("frameStyle")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="frameMaterial">Frame material</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" {...register("frameMaterial")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="lensFeature">Lens feature</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" {...register("lensFeature")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="BestSuitedFor">Best suited for</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" {...register("BestSuitedFor")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="productDescription">Product Description</label>
                        <textarea className="border py-2 px-3 text-grey-800" {...register("description")} ></textarea>
                    </div>
                    {/* <div className="text-right">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold">Submit</button>
                    </div> */}
                    <hr />
                    <input type="Submit" defaultValue="Submit" className="bg-blue-600 py-4 px-4 text-white w-full rounded-lg font-semibold text-center focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;