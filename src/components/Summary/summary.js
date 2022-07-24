import React, { useState } from "react";
import { quantity_action, summary_action } from "../../state/action";
import Quantity from "../quantity/quantity";
import './styles/summary.scss';

const Summary = () => {
    const quantityVaalue = useSelector(state => state.quantity.quantity);
    const [quantity, setQuantity] = useState(quantityVaalue);
    const [subTotal, setSubTotal] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [total, setTotal] = useState(0);

    const coupon = quantity > 0 ? 100 : 0;
    const gift = quantity > 0 ? 100 : 0;
    const tax = quantity > 0 ? 50 : 0;

    const updateQuantity = (value) => {
        setQuantity(value);
        dispatch(quantity_action(value));
        const summary = {
            subTotal: subTotal,
            coupon: coupon,
            gift: gift,
            tax: tax,
            deliveryPrice: deliveryPrice,
            total: total
        };
        dispatch(summary_action(summary));
    }

    return (
        <div className="summary aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--4">
            <h5>Pricing Summary</h5>
            <div className="pricing-details">
                <div><p>Subtotal</p><p>${subTotal}</p></div>
                <div><p>Coupon</p><p>${coupon}</p></div>
                <div><p>Gift Card</p><p>${gift}</p></div>
                <div><p>Estimated tax</p><p>${tax}</p></div>
                <div><p>Estimated Shipping</p><p>{deliveryPrice}</p></div>
                <div className="pricing-total"><p>Estimated Total</p><p>${total}</p></div>
                <div className="btn-div"><button className="checkout btn btn-primary" onClick={() => checkout(product)}>checkout</button></div>
            </div>
        </div>
    )
}