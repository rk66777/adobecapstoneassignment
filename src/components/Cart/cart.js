
import trash from "./images/trash.svg";
import edit from "./images/edit.svg";
import heart from "./images/heart.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtocheckout_action, quantity_action, summary_action } from "../../state/action";
import { useDispatch } from 'react-redux';
import './styles/cart.scss';
import Quantity from "../quantity/quantity";
import React, { useState } from "react";
import Summary from "../Summary/summary";


const Cart = () => {
    const quantityVaalue = useSelector(state => state.quantity.quantity);

    const [quantity, setQuantity] = useState(quantityVaalue);
    const [subTotal, setSubTotal] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [total, setTotal] = useState(0);

    const cartProduct = useSelector(state => state.cart.cart);
    const coupon = quantity > 0 ? 100 : 0;
    const gift = quantity > 0 ? 100 : 0;
    const tax = quantity > 0 ? 50 : 0;

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const checkout = (product) => {


        dispatch(addtocheckout_action(product));

        navigate("/checkout");
    }
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
    const CartDetails = () => {
        return (
            <>

                <div className="aem-Grid aem-Grid--12 text-center">
                    <h1 className="headline">Your Shopping Bag</h1>
                    <div className="band"></div>
                </div>

                {
                    cartProduct && cartProduct.length > 0 ? cartProduct.map((product) => {
                        const subTotal = quantity * product.price;
                        setSubTotal(subTotal);

                        let deliveryPrice = 0;
                        if (quantity > 0 && subTotal > 0 && subTotal <= 500) {
                            deliveryPrice = 100;
                        }
                        setDeliveryPrice(deliveryPrice);

                        const total = subTotal + coupon + gift + tax + deliveryPrice;
                        setTotal(total);
                        return (
                            <>
                                <div className="product-card-main d-lg-flex justify-content-between aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--8" >
                                    <div className="product-card d-flex aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-GridColumn--default--6" >
                                        <div className="card-img">
                                            <img src={product.image} className="card-img-top" alt={product.title} width="100%" />
                                        </div>
                                        <div className="description">
                                            <h5>{product.title.substring(0, 25)}</h5>
                                            <p>Size: Medium</p>
                                            <p>Color : Storm</p>

                                            <h6 className=" "> ${product.price}</h6>
                                        </div>
                                    </div>
                                    <Quantity quantity={quantity} updateQuantity={value => updateQuantity(value)} />

                                    <div className=" aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12" >
                                        <div className="categories">
                                            <p><img src={edit} alt="search" className="icon-img" />Edit Item </p>
                                            <p><img src={trash} alt="search" className="icon-img" />Remove</p>
                                            <p><img src={heart} alt="search" className="icon-img" />Save for later</p>
                                        </div>


                                    </div>
                                </div>
                                <div className="summary aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--4">
                                    <h5>Pricing Summary</h5>
                                    <div className="pricing-details">
                                        <Summary />
                                        <div className="btn-div"><button className="checkout btn btn-primary" onClick={() => checkout(product)}>checkout</button></div>
                                    </div>
                                </div>



                            </>
                        )
                    }) : 'No Items in Cart to Display'
                }

            </>
        )
    }
    return (
        <div className="container">
            <div className="aem-Grid cart">
                <div className="aem-Grid aem-Grid--12">

                    {<CartDetails />}


                </div>

            </div>
        </div>
    )
}

export default Cart;