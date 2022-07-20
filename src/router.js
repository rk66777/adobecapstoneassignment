import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from "./App";
import Header from "./components/Header/header";
import ProductListing from "./components/ProductListing/productlisting";
import store from "./state/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer/footer";
import ProductDetail from "./components/ProductDetail/productdetail";
import Cart from "./components/Cart/cart";
import Home from "./components/Home/home";
import Checkout from "./components/Checkout/chekcout";
import Shipping from "./components/Shipping/shipping";

const Router = () => (
  
  <Provider store={store}>
    <BrowserRouter>
    <App>
        <Header />
        <Routes>
          <Route path="adobecapstoneassignment" element={<Home />}></Route>
          <Route path="/productlisting" element={<ProductListing />}></Route>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="shipping" element={<Shipping />} />
          
        </Routes>
        <Footer />
    </App>
    </BrowserRouter>
   
  </Provider>
);

export default Router;
