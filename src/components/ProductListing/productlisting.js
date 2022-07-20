import React, { useEffect } from "react";
import './styles/productlisting.css';
import slider from "./images/sliders.svg";
import uparrow from "./images/arrow-up.svg";
import downarrow from "./images/arrow-down.svg";
import { useSelector, useDispatch } from 'react-redux';
import fetch_products from "../../state/action";
import hero from "./images/hero-image.jpg";
import { NavLink } from "react-router-dom";

const ProductListing = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.products);
    console.log(products);
    useEffect(() => {
        dispatch(fetch_products())
    }, []);

    return (
        <section>
            <section className="hero-area">
                <div className="image-div">
                    <img src={hero} alt="Hero Banner" />
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">Women’s Outerwear</h1>
                    <div className="hero-band"></div>
                </div>
            </section>
            <section className="Product-listing-container container">
                <div className="breadcrumb d-lg-none">Clothing / Women’s / Outerwear</div>
                <div className="filter-sort d-lg-none">
                    <div className="d-flex justify-content-between">
                        <div className="filter d-flex justify-content-center">
                            <img src={slider} alt="filter icon" />
                            <p className="filter-sort-text">Filter Results</p>
                        </div>
                        <div className="sort d-flex justify-content-center">
                            <div className="sort-icon">
                                <img src={uparrow} alt="up arrow icon" />
                                <img src={downarrow} alt="down arrow icon" />
                            </div>
                            <p className="filter-sort-text">Sort Products</p>
                        </div>
                    </div>
                    <div className="filter-sort-result">30 Results</div>
                </div>
                <div className="products-container aem-Grid aem-Grid--12">
                    <div className="filter-desktop d-none d-lg-block aem-GridColumn aem-GridColumn--default--3">
                        <div className="breadcrumb">Clothing / Women’s / Outerwear</div>
                        <h2 className="filter-title">Filters</h2>
                        <hr className="filter-line" />
                        <div className="filter-attribute">
                            <h3 className="attribute">Attribute</h3>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                        </div>
                        <hr className="filter-line" />

                        <div className="filter-attribute">
                            <h3 className="attribute">Attribute</h3>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                        </div>
                        <hr className="filter-line" />

                        <div className="colors-section">
                            <h3 className="color-title">Color</h3>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--3">
                                    <div className="color">
                                        <div className="color-box black"></div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3">
                                    <div className="color">
                                        <div className="color-box white"></div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3">
                                    <div className="color">
                                        <div className="color-box green"></div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3">
                                    <div className="color">
                                        <div className="color-box orange"></div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3">
                                    <div className="color">
                                        <div className="color-box blue"></div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3">
                                    <div className="color">
                                        <div className="color-box red"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="filter-line" />

                        <div className="filter-attribute">
                            <h3 className="attribute">Attribute</h3>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                            <div className="option-check">
                                <span className="option">Option</span>
                            </div>
                        </div>
                        <hr className="filter-line" />

                    </div>
                    <div className="products aem-Grid aem-Grid--12 aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--9 aem-GridColumn--tablet--9">
                        <div className="desktop-sort-filter d-none d-lg-block">
                            <div className="filter-sort-result">30 Results</div>
                            <div className="sort-by-latest"></div>
                        </div>

                        {
                            products.map((o, i) => {
                                let bi = { backgroundImage: `url('${o.image}')` };
                                return (
                                    <div key={i} className="product aem-GridColumn aem-GridColumn--phone--6 aem-GridColumn--default--4 aem-GridColumn--tablet--4">
                                        <NavLink to={`/products/${o.id}`} className="btn btn-dark ms-2 px-3 py-2">
                                            <div className="product-image" style={bi}>

                                            </div>
                                            <div className="product-description">
                                                <div className="product-name">
                                                    <p>{o.title}</p>
                                                </div>
                                                <p className="product-cost">$ {o.price}</p>
                                                <div className="heart-icon"></div>
                                            </div>
                                        </NavLink>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ProductListing;