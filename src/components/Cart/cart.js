
import trash from "./images/trash.svg";
import edit from "./images/edit.svg";
import heart from "./images/heart.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtocheckout_action } from "../../state/action";
import { useDispatch } from 'react-redux';
import './styles/cart.scss';


const Cart = () => {
    const cartProduct = useSelector(state => state.cart.cart);
    console.log(cartProduct);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const checkout =(product) =>{
        dispatch(addtocheckout_action(product));
        navigate("/checkout");
    }

    const CartDetails = () => {
        return (
            <>

                <div className="aem-Grid aem-Grid--12 text-center">
                    <h1 className="headline">Your Shopping Bag</h1>
                    <div className="band"></div>
                </div>

                {cartProduct && cartProduct.length > 0 ? cartProduct.map((product) => {
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
                                    <div><p>Subtotal</p><p>$388.00</p></div>
                                    <div><p>Coupon</p><p>$388.00</p></div>
                                    <div><p>Gift Card</p><p>$388.00</p></div>
                                    <div><p>Estimated tax</p><p>$388.00</p></div>
                                    <div><p>Estimated Shipping</p><p>$388.00</p></div>
                                    <div className="pricing-total"><p>Estimated Total</p><p>$388.00</p></div>
                                    <div className="btn-div"><button className="checkout btn btn-primary" onClick={ () => checkout(product)}>checkout</button></div>
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