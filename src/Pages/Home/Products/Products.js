import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const homeProduct = [products.slice(0, 6)];


    useEffect(() => {
        fetch('https://vast-plains-22065.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div className="mx-2">

            {
                homeProduct[0].map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default Products;
