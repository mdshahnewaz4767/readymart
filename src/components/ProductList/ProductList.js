import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ProductList.css';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {image, name, price, _id} = props.product;

    return (
        <div className="col-sm-12 col-md-4 p-3">
            <div className="product-item shadow-product">
                <div className="bg-gray d-flex justify-content-center align-items-center">
                    <img src={image} className="img-fluid cart-img" alt=""/>            
                </div>
                
                <div className="my-3">
                    <h5 className="mb-3">{name}</h5>
                    <div className="d-flex justify-content-between pt-3">
                        <span className="price">${price}</span>
                        <Link to={`/product/${_id}`}>
                            <button type="button" className="btn buy-btn">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="ml-2">Buy Now</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;