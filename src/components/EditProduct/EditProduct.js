import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import SideBar from '../SideBar/SideBar';
import './EditProduct.css';
const EditProduct = () => {
    const {editId} = useParams();
    // console.log(editId);
    const { register, handleSubmit, errors } = useForm();
    const [orderSuccess, setOrderSuccess] = useState(false);

    const onSubmit = data => {
        const name = data.name;
        const weight = data.weight;
        const price = data.price;
        const product = {editId, name, weight, price}
        // const eventData = {
        //     name: data.name,
        //     weight: data.weight,
        //     price: data.price
        // }
        // console.log(eventData);
        fetch(`http://localhost:5000/update/${editId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then( data => {
            console.log('updated');
            setOrderSuccess(true);
        })
    };


    return (
        <div>
            {
                <SideBar></SideBar>
            }
            <div className="title">
                <h3 className="product">Edit Product</h3>
            </div>
            
            <div className="product-info edit">
                <div className="mx-5 mt-5">
                    {orderSuccess &&
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Edit successfully!</strong>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    }
                    {!orderSuccess && <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-white border-radius">
                            <div className="row mx-lg-2 pad">
                                <div className="col-12 col-md-6 form-group mb-4">
                                    <label className="font-600 mb-2">Product Name</label>
                                    <input name="name"  ref={register({ required: true })} className="form-control"/>
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="col-12 col-md-6 form-group mb-4">
                                    <label className="font-600 mb-2">Weight</label>
                                    <input name="weight" ref={register({ required: true })} className="form-control"/>

                                    {errors.weight && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="col-12 col-md-6 form-group mb-4">
                                    <label className="font-600 mb-2">Add Price</label>
                                    <input type="number" name="price" ref={register({ required: true })} className="form-control"/>

                                    {errors.price && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                        </div>
                        <div>
                           <button className="mt-4 btn register-btn submitBtn" type="submit">Submit</button>
                        </div>
                    </form>   
                    }
                </div>
            </div>
        </div>
    );
};

export default EditProduct;