import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import './styles/productdetail.scss';
import { useNavigate } from "react-router-dom";
import { addtocart_action } from "../../state/action";

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

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
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <ul className="product-list d-none d-lg-block">
                            <li> <img src={product.image} alt={product.title} />  </li>
                            <li> <img src={product.image} alt={product.title} />  </li>
                            <li> <img src={product.image} alt={product.title} />  </li>
                        </ul>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-GridColumn--default--4">
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
                        <button className="btn btn-primary add-cart" onClick={ () => addProduct(product)} >
                            ADD TO CART
                        </button>

                    </div>
                </section>
                <section className="aem-Grid aem-Grid--12">
                    <div className="info aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--7">
                        <h3 className="product-title text-center">{product.title}</h3>
                        <p className="product-desc"> {product.description}</p>
                    </div>
                    <div className="info aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--5">
                        <h3 className="product-title">Details</h3>
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