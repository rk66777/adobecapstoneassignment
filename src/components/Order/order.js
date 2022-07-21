import React from "react";
import './styles/order.scss';

const Order = () => {
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
                                <div><p>email</p><p>address</p></div>
                                <div><p>phone</p><p>zip</p></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="summary my-10">
                                <h5 className="d-flex justify-content-between">Shipping Method</h5>
                                <div className="pricing-details">
                                    <div><p>standard Shipping</p></div>
                                    <div><p>Est. delivery in 4 - 8 business days</p></div>
                                    <div><p>Free</p></div>
                                </div>
                            </div>
                            <div className="summary my-10">
                                <h5 className="d-flex justify-content-between">Payment Information</h5>
                                <div className="pricing-details">
                                    <div><p>Credit Card</p></div>
                                    <div><p>Visa ending in 4567</p></div>
                                </div>
                            </div>
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