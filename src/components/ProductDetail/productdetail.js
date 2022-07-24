import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './styles/productdetail.scss';
import { useNavigate } from "react-router-dom";
import { addtocart_action, quantity_action } from "../../state/action";
import Quantity from "../quantity/quantity";

const ProductDetail = () => {

    const quantityVaalue = useSelector(state => state.quantity.quantity);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(quantityVaalue);

    const dispatch = useDispatch();

    let componentMounted = true;
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            if (componentMounted) {
                setProduct(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct();

    }, []);
    const updateQuantity = (value) => {
        setQuantity(value);
        dispatch(quantity_action(value));
    }
    const Loading = () => {
        return (
            <>Loading</>
        )
    }

        let navigate = useNavigate();
        const addProduct =(product) =>{
            dispatch(addtocart_action(product));
            navigate("/cart");
        }

    const ViewProductDetails = () => {

        return (
            <div className="aem-Grid">
                <section className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3 mt-20">
                        <ul className="product-list d-none d-lg-block">
                            <li> <img src={product.image} alt={product.title} />  </li>
                            <li> <img src={product.image} alt={product.title} />  </li>
                            <li> <img src={product.image} alt={product.title} />  </li>
                        </ul>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-GridColumn--default--4 mt-20 mt-lg-30">
                        <h5 className="breadcrumb text-capitalize d-lg-none">
                            Home  / {product.category} /
                        </h5>
                        <img src={product.image} alt={product.title} height="300px" width="300px" />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-GridColumn--default--5">
                        <h5 className="breadcrumb text-capitalize d-none d-lg-block">
                            Home  / {product.category} /
                        </h5>
                        <h3 className="product-title">{product.title}</h3>
                        <h3 className="product-price">
                            $ {product.price}
                        </h3>
                        <p className="product-rating">Rating {product.rating && product.rating.rate}

                        </p>

                        <p className="product-desc"> {product.description}</p>
                        <hr />
                        <Quantity quantity={quantity} updateQuantity={value => updateQuantity(value)} />
                        <button className="btn btn-primary add-cart" onClick={ () => addProduct(product)} >
                            ADD TO CART
                        </button>
                        

                    </div>
                </section>
                <section className="aem-Grid aem-Grid--12">
                    <div className="info aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--10">
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-desc"> {product.description}</p>
                    </div>
                    
                    
                </section>
            </div>
            
        )
    }
    return (
        <section className="product-detail">
            <div className="container product-detail-container">
                
                    {loading ? <Loading /> : <ViewProductDetails />}
                
            </div>
        </section>
    )

}
export default ProductDetail;