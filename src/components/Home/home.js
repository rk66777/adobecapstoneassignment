import React, { useEffect } from "react";
import './Styles/home.scss';
import hero from "./images/hero-image.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();
        const shop =() =>{
            navigate("/productlisting");
        }
    return (
        <section className="home">
            <section className="hero-banner">
                <div className="aem-Grid banner-bg">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-GridColumn--default--6 hero-mobile-image">
                            <div className="container">
                                <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-baseline mb-15 mb-lg-0">
                                    <h1 className="text-center text-lg-left headline">Shop the new Signature Collection</h1>
                                    <p className="text-center text-lg-left desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                                    <button className="btn btn-primary" onClick={ () => shop()}>shop now</button>
                                </div>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--phone--0 aem-GridColumn--default--6 hero-desktop-image">
                            <div className="desktop-image-div"><img src={hero} alt="hero banner image" /></div>
                        </div>
                    </div>
                </div>
                <div className="category">
                    <div className="container">
                        <div className="aem-Grid">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--3 aem-GridColumn--default--3 product-category">
                                    <div className="base">
                                        <div className="category-image"></div>
                                        <div className="category-text">
                                            <div className="category-title">Shop Men</div>
                                            <div className="category-desc">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--3 aem-GridColumn--default--3">
                                    <div className="base">
                                        <div className="category-image"></div>
                                        <div className="category-text">
                                            <div className="category-title">Shop Men</div>
                                            <div className="category-desc">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--3 aem-GridColumn--default--3">
                                    <div className="base">
                                        <div className="category-image"></div>
                                        <div className="category-text">
                                            <div className="category-title">Shop Men</div>
                                            <div className="category-desc">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--3 aem-GridColumn--default--3">
                                    <div className="base">
                                        <div className="category-image"></div>
                                        <div className="category-text">
                                            <div className="category-title">Shop Men</div>
                                            <div className="category-desc">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="signature container">
                <div className="aem-Grid">
                    <div className="aem-Grid aem-Grid--12 d-flex flex-column flex-lg-row">
                        <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-GridColumn--default--6 text-area">
                            <div className="container">
                                <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-baseline mb-15 mb-lg-0">
                                    <h1 className="text-center text-lg-left headline">Take off in the new Signature Legging</h1>
                                    <p className="text-center text-lg-left desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                                    <div className="btn-div d-flex flex-column flex-lg-row">
                                        <button className="btn btn-outline collection" onClick={ () => shop()}>shop collection</button>
                                        <button className="btn btn-primary" onClick={ () => shop()}>shop now</button>
                                    </div>
                                    <div className="color-band"></div>
                                </div>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--default--6 image-area">
                            <div className="signature-image-div"><img src={hero} alt="hero banner image" /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adventure-area">
                <div className="container">
                    <div className="aem-Grid">
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-GridColumn--default--8">
                                <div className="image-div">
                                    <img src={hero} alt="Hero Banner" />
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-GridColumn--default--4">
                                <div className="hero-content">
                                    <h1 className="hero-title">Conquer your next adventure</h1>

                                    <div className="hero-band"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </section>
    )
}

export default Home;