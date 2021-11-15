import React from 'react';
import Banner from '../../Shared/Banner/Banner'; import About from '../About/About';
import Contact from '../Contact/Contact';
import DisplayReivew from '../DisplayReivew/DisplayReivew';
import Products from '../Products/Products';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Contact></Contact>
            <DisplayReivew></DisplayReivew>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;