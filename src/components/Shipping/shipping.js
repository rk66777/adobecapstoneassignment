import React from "react";
import { useForm } from "react-hook-form";
import './styles/shipping.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const Shipping = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return(
        <section className="checkout aem-Grid">
            <div className="container aem-Grid aem-Grid--12">
                <h1 className="headline">Checkout</h1>
                <div className="band"></div>
                <div className="mr-lg-30 aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--7">
                <h2 className="sub-title my-10">Guest Checkout</h2>
                <div className="summary">
                        <h5>Pricing Summary</h5>
                        <div className="pricing-details">
                            <div><p>Subtotal</p><p>$388.00</p></div>
                            <div><p>Coupon</p><p>$388.00</p></div>
                            <div><p>Gift Card</p><p>$388.00</p></div>
                            <div><p>Estimated tax</p><p>$388.00</p></div>
                            <div><p>Estimated Shipping</p><p>$388.00</p></div>
                            <div className="pricing-total"><p>Estimated Total</p><p>$388.00</p></div>
                        </div>
                    </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                </form>
                </div>
                </div>
                </section>
    )
}

export default Shipping;