import React, { useState } from "react";
import { useSelector } from "react-redux";
import './styles/header.scss';
import Close from './images/close.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let cart = useSelector(state => state.cart.cart);
    let cartLength = cart.length;
    // let cartLength = Number(
    //     cart.map((r) => r.quantity).reduce((p, c) => {
    //         cartCount = cartCount + c;
    //         return cartCount;
    //     }, 0)
    // );

    let [toggle, setToggle] = useState(false);

    return (
        <header className="header-container">
            <div className="container">
                <div className="header">
                    <nav className="navbar d-flex d-lg-none">
                        <i className="hamburger" id="hamburger" data-state="show" onClick={() => setToggle(!toggle)}></i>
                        <NavLink className="nav-title no-underline" to="/home">VENIA</NavLink>
                        <NavLink className="align-right" to="/cart">
                            <div className="cart-icon"></div>
                            <span className="cart-count">{cartLength}</span>
                        </NavLink>
                        {toggle ? <div className="mobile-menu">
                            <section className="shop-category">
                                <p>Shop Categories</p>
                                <button><img src={Close} alt='close' onClick={() => setToggle(!toggle)} /></button>
                            </section>
                            <ul className="menu">
                            <li className="menu-item">
                                    <NavLink className="item" to="/home" onClick={() => setToggle(!toggle)}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink className="item" to="/productlisting" onClick={() => setToggle(!toggle)}>
                                        All
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink className="item" to="/productlisting?category=women's clothing" onClick={() => setToggle(!toggle)}>
                                        Women
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink className="item" to="/productlisting?category=men's clothing" onClick={() => setToggle(!toggle)}>
                                        Men
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink className="item" to="/productlisting?category=jewelery" onClick={() => setToggle(!toggle)}>
                                        Jewelery
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink className="item" to="/productlisting?category=electronics" onClick={() => setToggle(!toggle)}>
                                        Electronics
                                    </NavLink>
                                </li>
                            </ul>
                        </div> : ""}
                    </nav>
                    <div className="d-none d-lg-flex">
                        <div className="header-logo">
                            <NavLink className="nav-title no-underline" to="/home">VENIA</NavLink>
                        </div>
                        <ul className="menu">
                        <li className="menu-item">
                                <NavLink className="item" to="/home" onClick={() => setToggle(!toggle)}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink className="item" to="/productlisting" onClick={() => setToggle(!toggle)}>
                                    All
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink className="item" to="/productlisting?category=women's clothing">
                                    Women
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink className="item" to="/productlisting?category=men's clothing">
                                    Men
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink className="item" to="/productlisting?category=jewelery">
                                    Jewelery
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink className="item" to="/productlisting?category=electronics">
                                    Electronics
                                </NavLink>
                            </li>
                        </ul>
                        <NavLink className="menu-right" to="/cart">
                            <div className="cart-icon"></div>
                            <span className="cart-count">{cartLength}</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;