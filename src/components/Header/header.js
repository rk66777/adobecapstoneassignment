import React from "react";
import './styles/header.scss';
import logo from './images/venia-logo.png';
import { NavLink } from 'react-router-dom';

// export default function Header() {

//     return (
//         <div className="header"></div>
//     )
// }

const Header = () => {

    return (
        <header className="header-container">
            <div className="container">
                <div className="header">
                    <nav className="navbar d-flex d-lg-none">
                        <i className="hamburger" id="hamburger" data-state="show"></i>
                            <a className="nav-title no-underline" href="/">VENIA</a>
                        <div className="align-right">
                            <div className="cart-icon"></div>
                        </div>
                    </nav>
                    <div className="d-none d-lg-flex">
                        <div className="header-logo">
                            <a className="nav-title no-underline" href="/">VENIA</a>
                        </div>
                        <ul className="menu">
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
                        <div className="menu-right">
                            <div className="cart-icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;