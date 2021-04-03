import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
import './AddProduct.css';
import axios from 'axios';


const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            image: imageURL
        }
        console.log(eventData);
        fetch("http://localhost:5000/addProduct", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then( data => {
            console.log('server side response', data);
            setOrderSuccess(true);
        })
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '36fd9c6c98c27ae561692401cb2eeeb5')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
            setDisabled(true);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    return (
        <div>
            {
                <SideBar></SideBar>
            }
            <div className="title">
                <h3 className="product">Add Product</h3>
            </div>
            
            <div className="product-info">
                <div className="mx-5 mt-4">
                    {orderSuccess &&
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Well done!</strong> Your product successfully added to the database and added to the website..
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
                                <div className="col-12 col-md-6 form-group mb-4">
                                    <label className="font-600 mb-2">Add Photo</label>
                                    <input onChange={handleImageUpload} type="file" name="image" ref={register({ required: true })} className="custom-file-input form-control"/>
                                </div>
                            </div>
                        </div>
                        <div>
                           <button disabled={!disabled} className="mt-4 btn register-btn submitBtn" type="submit">Submit</button>
                        </div>
                    </form>   
                    }
                </div>
            </div>
        </div>
    );
};

export default AddProduct;