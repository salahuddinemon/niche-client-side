import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import About from '../About/About';
import DisplayReivew from '../DisplayReivew/DisplayReivew';
import Products from '../Products/Products';
import Subscribe from '../Subscribe/Subscribe';
import ExtraFeatured from './ExtraFeatured/ExtraFeatured';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <ExtraFeatured></ExtraFeatured>
            <DisplayReivew></DisplayReivew>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;