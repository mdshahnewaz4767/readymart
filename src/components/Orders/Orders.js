import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Orders.css';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';
import Loading from '../Loading';
const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    
    //Orders 
    useEffect(() => {
        setLoading(true);
        fetch('https://peaceful-falls-90035.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
        .then(() => setLoading(false))
    }, [loggedInUser.email])
    console.log(orders.price);

    // total price
    const total = orders.reduce((total, order)  => total + order.product.price, 0);

    return (
        <div>
            <Header></Header>
            <div className="container mt-5 pt-4">
                <h4 className="font-600 checkout-title">My Orders</h4>
                <div className="mt-4">
                    <div className="text-center mt-5">
                        {loading && (
                                <Loading />
                        )}
                    </div>
                    {orders.length > 0 && 
                        <div className="shadow-one">
                            <table className="table orderStyle">
                                <thead>
                                    <tr>
                                        <th scope="col">Description</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Order Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => <OrderList order={order} key={order._id}></OrderList>)
                                    }
                                    <tr className="totalPrice">
                                        <td className="total-price">Total:</td>
                                        <td className="total-price"></td>
                                        <td className="total-price"></td>
                                        <td className="total-price">${total}</td>
                                        <td className="total-price"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;