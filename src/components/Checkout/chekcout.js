import React from "react";
import { useForm } from "react-hook-form";
import './styles/checkout.scss';
import { checkout_action } from "../../state/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Summary from "../Summary/summary";

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(checkout_action(data));
        navigate("/shipping");
    }
    return (
        <section className="checkout aem-Grid">
            <div className="container aem-Grid aem-Grid--12">
                <h1 className="headline">Checkout</h1>
                <div className="band"></div>
                <div className="mr-lg-30 aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--7">
                    <h2 className="sub-title my-10">Guest Checkout</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="my-10">Contact Information</h3>
                        <p className="my-10">We’ll use these details to keep you informed on your delivery.</p>
                        <div className="form-data">
                            <div className="guest-data">
                                <div className="d-flex flex-column flex-lg-row justify-content-lg-between my-10">
                                    <div className="input-div my-10 d-flex flex-column">
                                        <label className="label-text">Email</label>
                                        <input type="email" {...register("mail", { required: "Email Address is required" })} />
                                        <p>{errors.mail?.message}</p>
                                    </div>
                                    <div className="input-div my-10 d-flex flex-column">
                                        <label className="label-text">Phone Number</label>
                                        <input type="number" {...register("phonenumber", { required: "Max length 10 numbers", maxLength: 10 })} />
                                        <p>{errors.phonenumber?.message}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shipping-data">
                                <h3 className="my-10">1. Shipping Information</h3>
                                <div className="d-flex flex-column flex-lg-row justify-content-lg-between my-10">
                                    <div className="input-div my-10 d-flex flex-column">
                                        <label className="label-text">Country</label>
                                        <select {...register("country")}>
                                            <option value="female">United States</option>
                                            <option value="male">India</option>
                                            <option value="other">Australia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-lg-row justify-content-lg-between my-10">
                                    <div className="input-div my-10 d-flex flex-column">
                                        <label className="label-text">First Name</label>
                                        <input type="text" {...register("firstname", { required: "FirstName is required" })} />
                                        <p>{errors.firstname?.message}</p>
                                    </div>
                                    <div className="input-div my-10 d-flex flex-column">
                                        <label className="label-text">Last Name</label>
                                        <input type="text" {...register("lastname", { required: "LastName is required" })} />
                                        <p>{errors.lastname?.message}</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-lg-row justify-content-lg-between my-10">
                                    <div className="input-div my-10 d-flex flex-column">
                                        <label className="label-text">Street Address</label>
                                        <input type="text" {...register("address", { required: "Address is required" })} />
                                        <p>{errors.address?.message}</p>
                                    </div>
                                    <div className="input-div my-10 d-flex flex-column">
                                        <label className="label-text">Street Address 2<span>optional</span></label>
                                        <input type="text" {...register("address2", { required: false })} />
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-lg-row justify-content-lg-between my-10">
                                    <div className="input-div my-10 d-flex flex-column">
                                        <label className="label-text">City</label>
                                        <input type="text" {...register("city", { required: "city is required" })} />
                                        <p>{errors.city?.message}</p>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
                                        <div className="input-div my-10 d-flex flex-column">
                                            <label className="label-text">State</label>
                                            <select className="state" {...register("state")}>
                                                <option value="female">California</option>
                                                <option value="male">Virginia</option>
                                                <option value="other">Dallas</option>
                                            </select>
                                        </div>
                                        <div className="input-div zip my-10 d-flex flex-column">
                                            <label className="label-text">ZIP</label>
                                            <input type="number" {...register("zip", { required: "ZIP is requirred" })} />
                                            <p>{errors.zip?.message}</p>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="CONTINUE TO SHIPPING" className="btn btn-outline mobile-btn" />
                            </div>
                            <div className="shipping-method">
                                <p>2. Shipping Method</p>
                            </div>
                            <div className="payment-info mb-30">
                                <p>3. Payment Information</p>
                            </div>
                        </div>


                    </form>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--4">
                    <div className="express d-lg-flex align-items-center">
                        <h5>Sign in for Express Checkout</h5>
                        <button className="btn btn-outline express-btn">Sign in </button>
                    </div>
                    <div className="summary">
                        <h5>Pricing Summary</h5>
                        {
                            <div className="pricing-details">

                                <Summary />
                            </div>

                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout;