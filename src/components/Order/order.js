import React from "react";
import './styles/order.scss';
import { useDispatch, useSelector } from 'react-redux';

const Order = () => {
    const chekoutDetails = useSelector(state => state.checkout.checkout);
    console.log("chekoutDetails", chekoutDetails);
    const checkOutFormData = chekoutDetails.length > 0 ? chekoutDetails[0] : {};

    const shippingDetails = useSelector(state => state.shipping.shipping);
    console.log("shippingDetails", shippingDetails);
    const shippingFormData = shippingDetails.length > 0 ? shippingDetails[0] : {};

    const paymentDetails = useSelector(state => state.payment.payment);
    console.log("paymentDetails", paymentDetails);
    const paymentFormData = paymentDetails.length > 0 ? paymentDetails[0] : {};

    const cartProduct = useSelector(state => state.cart.cart);
    console.log("cartDetails", cartProduct);

    return (
        <section className="order aem-Grid">
            <div className="container aem-Grid aem-Grid--12">
                <h1 className="headline">Order Successful</h1>
                <div className="band"></div>
                <div className="mr-lg-30 aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--7">
                    <h2 className="sub-title my-10">Order Number #1700834</h2>
                    <div className="d-lg-flex justify-content-between">
                        <div className="summary">
                            <h5 className="d-flex justify-content-between">Shipping Information</h5>
                            <div className="pricing-details">
                                <div><p>{checkOutFormData.mail}</p><p>address</p></div>
                                <div><p>{checkOutFormData.phonenumber}</p><p>zip</p></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="summary my-10">
                                <h5 className="d-flex justify-content-between">Shipping Method</h5>
                                <div className="pricing-details">
                                    <div><p>{shippingFormData.ShippingMethod}</p></div>
                                    {/* <div><p>Est. delivery in 4 - 8 business days</p></div>
                                        <div><p>Free</p></div> */}
                                </div>
                            </div>
                            <div className="summary my-10">
                                <h5 className="d-flex justify-content-between">Payment Information</h5>
                                <div className="pricing-details">
                                    <div><p>{paymentFormData.creditCard}</p></div>
                                    <div><p>{paymentFormData.cardnumber}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-details">
                        <div>{cartProduct.length} Items in your order</div>
                        <div className="product-card-main d-lg-flex justify-content-between aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--8" >
                            {cartProduct && cartProduct.length > 0 ? cartProduct.map((product, index) => {
                                return (
                                    <>
                                        <div className="product-card d-flex aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-GridColumn--default--6" >
                                            <div className="card-img mr-lg-30">
                                                <img src={product.image} className="card-img-top" alt={product.title} width="100%" />
                                            </div>
                                            <div className="description">
                                                <h5>{product.title.substring(0, 25)}</h5>
                                                <p>Size: Medium</p>
                                                <p>Color : Storm</p>

                                                <h6 className=" "> ${product.price}</h6>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            ) : 'No Items in Cart to Display'}
                        </div>
                    </div>
                    <p className="my-10">You will also receive an email with the details and we will let you know when your order has shipped.</p>
                    <p className="my-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--4">
                    <div className="right-bg">
                        <h5>Give us a follow to SAVE 20% on your next order.</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order;