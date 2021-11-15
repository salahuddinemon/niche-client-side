import React, { useEffect, useState } from 'react';

const DisplayReivew = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://vast-plains-22065.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className="
        					lg:text-2xl
        					text-xl
        					font-bold
        					lg:leading-6
        					leading-7
        					text-indigo-500
        					mt-4
                            pt-4
        				">Our Customers Review</h2> <hr />
            <div className="grid grid-cols-3 gap-4 mx-8 mb-20 mt-10">
                {
                    reviews.map(review =>
                        <div className="flex items-start border-2 border-indigo-600 rounded-lg">
                            <div className="ml-4">
                                <p className="flex items-baseline">
                                    <span className="text-gray-600 font-bold">{review.reviewerName}</span>
                                </p>
                                <div className="flex items-center mt-1">
                                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                </div>
                                <div className="mt-2 ">
                                    <p className="">{review.review}</p>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default DisplayReivew;