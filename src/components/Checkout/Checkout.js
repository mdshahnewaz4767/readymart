import React, { useContext, useEffect, useState } from 'react';
import './Checkout.css';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { UserContext } from '../../App';
import Loading from '../Loading';


const Checkout = () => {
    const {productId} = useParams();
    const [singleProduct, setSingleProduct] = useState([]);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    useEffect(() => {
        fetch("https://peaceful-falls-90035.herokuapp.com/product/"+ productId)
        .then(res => res.json())
        .then(data => {
            setSingleProduct(data);
        })
    }, [productId])

    console.log(singleProduct);

    const handleOrder = () => {
        const orderDetails = {...loggedInUser, product: singleProduct, orderTime: new Date()};

        fetch("https://peaceful-falls-90035.herokuapp.com/addOrder", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                setOrderSuccess(true);
                console.log(data);
            }
        })
    }

    return (
        <div>
            <Header></Header>
            <div className="container mt-5 pt-4">
                <h4 className="font-600 checkout-title">Checkout</h4>
                {orderSuccess &&
                    <div className="alert alert-success alert-dismissible fade show orderSuccess" role="alert">
                        <strong>Well done!</strong> Your order placed successfully. Also, you will see your order list by clicking on the order option.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                <div className="mt-4">
                    <div className="shadow-one">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{singleProduct.name}</td>
                                    <td className="quantity">1</td>
                                    <td>${singleProduct.price}</td>
                                </tr>
                                <tr className="totalPrice">
                                    <td className="total-price">Total</td>
                                    <td className="total-price"></td>
                                    <td className="total-price">${singleProduct.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    { !orderSuccess &&
                        <button  onClick={handleOrder} className="btn checkout-btn mt-5">Checkout</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Checkout;