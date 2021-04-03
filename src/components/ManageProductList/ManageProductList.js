import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ManageProductList = (props) => {
    const {name, price, weight, _id} = props.pd;

    const deleteProduct = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log('Delete successfully', result);
        })
    }
    return (
        
        <tr>
            <td>{name}</td>
            <td>{weight}</td>
            <td>${price}</td>
            <td className="display-style">
                <Link to={`/editProduct/${_id}`}><span className="edit-icon"><FontAwesomeIcon icon={faEdit} /></span></Link>
                <span onClick={() => deleteProduct(_id)} className="delete-icon"><FontAwesomeIcon icon={faTrash}  /> </span>
            </td>
        </tr>
    );
};

export default ManageProductList;