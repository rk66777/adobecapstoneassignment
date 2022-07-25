import React from "react";
import { useForm } from "react-hook-form";
import './styles/payment.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { payment_action } from "../../state/action";
import Summary from "../Summary/summary";


const Payment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const chekoutDetails = useSelector(state => state.checkout.checkout);
    const checkOutFormData = chekoutDetails.length > 0 ? chekoutDetails[0] : {};

    const shippingDetails = useSelector(state => state.shipping.shipping);
    const shippingFormData = shippingDetails.length > 0 ? shippingDetails[0] : {};

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(payment_action(data));
        navigate("/order");
    }

    return (
        <section className="payment aem-Grid">
            <div className="container aem-Grid aem-Grid--12">
                <h1 className="headline">Checkout</h1>
                <div className="band"></div>
                <div className="mr-lg-30 aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--7">
                    <h2 className="sub-title my-10">Guest Checkout</h2>
                    <div className="summary">
                        <h5 className="d-flex justify-content-between">Shipping Information<span className="link">edit</span></h5>
                        <div className="pricing-details">
                            <div><p>{checkOutFormData.mail}</p><p>{checkOutFormData.address}{checkOutFormData.address2}</p></div>
                            <div><p>{checkOutFormData.phonenumber}</p><p>{checkOutFormData.city}</p></div>
                        </div>
                    </div>

                    <div className="summary my-10">
                        <h5 className="d-flex justify-content-between">Shipping Method<span className="link">edit</span></h5>
                        <div className="pricing-details">
                            <div><p>{shippingFormData.ShippingMethod}</p></div>
                            {/* <div><p>Est. delivery in 4 - 8 business days</p></div>
                            <div><p>Free</p></div> */}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="my-10">3. Payment Information</h3>
                        <div className="ship-method my-10">
                            {/* <input type="radio" className='creditCard' id='creditCard' name='creditCard' {...register("creditCard", {
                                required: "Required"
                            })} /> */}
                            <label htmlFor="creditCard"> Credit Card</label>
                        </div>
                        <div className="input-div my-10 d-flex flex-column">
                            <label className="label-text">Name on Card</label>
                            <input type="text" {...register("nameoncard", { required: "Required" })} />
                            <p>{errors.nameoncard?.message}</p>
                        </div>
                        <div className="input-div my-10 d-flex flex-column">
                            <label className="label-text">Credit Card Number</label>
                            <input type="number" {...register("cardnumber", { required: "Required" })} />
                            <p>{errors.cardnumber?.message}</p>
                        </div>
                        <div className="d-flex justify-content-between card-div">
                            <div className="expiry-div my-10 d-flex flex-column">
                                <label className="label-text">Expiration Date</label>
                                <input type="date" {...register("expirydate", { required: "Required" })} />
                                <p>{errors.expirydate?.message}</p>
                            </div>
                            <div className="cvv-div my-10 d-flex flex-column">
                                <label className="label-text">CVV</label>
                                <input type="number" {...register("cvv", { required: "Required" })} />
                                <p>{errors.cvv?.message}</p>
                            </div>
                        </div>

                        <input type="submit" value="PLACE ORDER" className="btn btn-outline mobile-btn" />


                    </form>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--4">
                    <div className="summary">
                        <h5>Pricing Summary</h5>
                        <div className="pricing-details">
                            <Summary />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment;