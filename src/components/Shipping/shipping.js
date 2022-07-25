import React from "react";
import { useForm } from "react-hook-form";
import './styles/shipping.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { shipping_action } from "../../state/action";
import Summary from "../Summary/summary";


const Shipping = () => {
    const { register, handleSubmit } = useForm();

    const chekoutDetails = useSelector(state => state.checkout.checkout);

    const checkOutFormData = chekoutDetails.length > 0 ? chekoutDetails[0] : {};

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(shipping_action(data));

        navigate("/payment");
    }
    {

        return (
            <section className="shipping aem-Grid">
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="my-10">2. Shipping Method</h3>
                            <div className="ship-method my-10">
                                <input type="radio" className='standardShipping' id="standardShipping" name='standardShipping' value="Standard Shipping (4-8 business days via USPS) FREE" {...register("ShippingMethod", {
                                    required: "Required"
                                })} />
                                <label htmlFor="standardShipping"> Standard Shipping (4-8 business days via USPS) FREE</label>
                            </div>

                            <div className="ship-method my-10">
                                <input type="radio" className='standardShipping' id='expressDeliver' name='expressDeliver' value="Express Delivery ( 2-5 business days via USPS ) $17.95" {...register("ShippingMethod", {
                                    required: "Required"
                                })} />
                                <label htmlFor="expressDeliver"> Express Delivery ( 2-5 business days via USPS ) $17.95</label>
                            </div>
                            <div className="ship-method my-10">
                                <input type="radio" className='standardShipping' id='nextDayDeliver' name='nextDayDeliver' value="Next Day Delivery (Next business days via FedEx) $53.61" {...register("ShippingMethod", {
                                    required: "Required"
                                })} />
                                <label htmlFor="nextDayDeliver"> Next Day Delivery (Next business days via FedEx) $53.61</label>
                            </div>

                            <input type="submit" value="CONTINUE TO PAYMENT" className="btn btn-outline mobile-btn" />

                            <div className="payment-info mb-30">
                                <p>3. Payment Information</p>
                            </div>
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
}

export default Shipping;