import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';
import Loading from '../Loading';
import './Product.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
        .then(() => setLoading(false))
        .catch(error => alert("Something went wrong!! Please try again later!"))
    }, [])

    
    return (
        <div>
            <div className="container mt-5 ">
                <div className="form-inline mt-3 d-flex justify-content-center">
                    <div className="input-group col-md-6">
                        <input className="form-control" type="search" placeholder="Search Item" aria-label="Search"/>
                        <button className="btn btn-search" type="button">Search</button>
                    </div>
                </div>
            </div>
            
            <div className="container mt-4">
                <div className="text-center mt-4">
                    {loading && (
                        <Loading />
                    )}
                </div>
                <div className="row g-4">
                    {
                        products.map(product => <ProductList product={product} key={product._id}></ProductList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;