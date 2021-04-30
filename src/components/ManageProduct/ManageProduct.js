import React, { useEffect, useState } from 'react';
import './Manageproduct.css';
import SideBar from '../SideBar/SideBar';
import ManageProductList from '../ManageProductList/ManageProductList';


const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://peaceful-falls-90035.herokuapp.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    })

    return (
        <div>
            {
                <SideBar></SideBar>
            }
            <div className="title">
                <h3 className="product">Manage Product</h3>
            </div>
            
            <div className="product-info">
                <div className="pd-description mx-lg-5 mt-4 ">
                    <div>
                        <div>
                            <table className="table pdList">
                                <thead>
                                    <tr className="table-head">
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(pd => <ManageProductList pd={pd} key={pd._id}></ManageProductList>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;