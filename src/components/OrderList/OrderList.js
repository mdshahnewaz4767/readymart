import React from 'react';

const OrderList = (props) => {
    const {orderTime, product} = props.order;
    // console.log(product);
    return (
        <tr>
            <td>{product.name}</td>
            <td>1 item</td>
            <td>{product.weight}</td>
            <td>${product.price}</td>
            <td>{new Date(orderTime).toDateString('dd/MM/yy')}</td>
        </tr>
    );
};

export default OrderList;