import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './styles/summary.scss';

const Summary = () => {
    const quantityVaalue = useSelector(state => state.quantity.quantity);
    const [quantity] = useState(quantityVaalue);
    const [subTotal, setSubTotal] = useState(0);
    const [deliveryPrice] = useState(0);
    const [total, setTotal] = useState(0);

    const coupon = quantity > 0 ? 10 : 0;
    const gift = quantity > 0 ? 10 : 0;
    const tax = quantity > 0 ? 50 : 0;

    let cart = useSelector(state => state.cart.cart);

    useEffect(() => {

        if (cart.length) {
            let subTotalAmount = 0;
            let totalAmount = 0;
            cart.forEach((product) => {
                subTotalAmount = subTotalAmount + (product.price * quantity);
            });
            setSubTotal(subTotalAmount);
            totalAmount = Math.round(subTotalAmount - coupon - gift + tax);
            setTotal(totalAmount);
        }
    }, [cart]);

    return (
        <>

            <div><p>Subtotal</p><p>${subTotal}</p></div>
            <div><p>Coupon</p><p>${coupon}</p></div>
            <div><p>Gift Card</p><p>${gift}</p></div>
            <div><p>Estimated tax</p><p>${tax}</p></div>
            <div><p>Estimated Shipping</p><p>{deliveryPrice}</p></div>
            <div className="pricing-total"><p>Estimated Total</p><p>${total}</p></div>
        </>

    )
}

export default Summary;