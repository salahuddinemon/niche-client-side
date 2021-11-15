import React from 'react';

const ExtraFeatured = () => {
    return (
        < div className="py-20" >
            <div className="bg-blue-100 py-14">
                <h3 className="text-2xl tracking-widest text-green-600 text-center">FEATURES</h3>
                <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">Our Extra Curriculam</h1>
                <div className="md:flex md:justify-center md:space-x-8 md:px-14">
                    {/* <!-- box-1 --> */}
                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-64" src="https://image.freepik.com/free-photo/extreme-closeup-enlarged-human-eye-with-beautiful-colors_181624-37518.jpg" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">Free Eye Care</h1>
                                <p className="mt-4 text-gray-600">During an eye test, eye doctors use eye charts to measure your vision at a set distance and compare it with other human beings.</p>
                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-2 --> */}
                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-60" src="https://img.freepik.com/free-vector/modern-eyeglasses-set_98292-7191.jpg?size=338&ext=jpg" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">Weekly Bootcamp for Eye</h1>
                                <p className="mt-4 text-gray-600">Trusted brands will produce the best sunglasses for eye protection. So, they will always indicate the type of UV protection on their labels. You can come across them in two ways: you either see the 100% UV protection or the UV filter category UV 400.</p>
                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-3 --> */}
                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-60" src="https://image.freepik.com/free-photo/horizontal-shot-interested-curious-caucasian-girl-appointment-with-eye-care-specialist-wearing-phoropter-while-ophthalmologist-checking-her-vision-sitting-yellow-wall_176420-6730.jpg" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">Monthely Eye Test</h1>
                                <p className="mt-4 text-gray-600">Dark sunglasses are mainly great to filter out ambient light and glare. However, there is a problem with dark sunglasses: they make your pupils open which lets more light actually enter your eyes.</p>
                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ExtraFeatured;