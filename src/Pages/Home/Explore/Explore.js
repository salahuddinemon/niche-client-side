import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://vast-plains-22065.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="mx-2">

            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default Explore;