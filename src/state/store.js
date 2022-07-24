import { applyMiddleware, combineReducers, compose, } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer, { manageQuantity } from "./reducer";
import { addToCart } from "./reducer";
import { addToCheckout } from "./reducer";
import { addToShipping } from "./reducer";
import { addToPayment } from "./reducer";
import thunk from 'redux-thunk';

const allReducer = combineReducers({ products: productReducer, cart: addToCart, checkout: addToCheckout, shipping: addToShipping, payment: addToPayment , quantity : manageQuantity });
const middleware  = [thunk];
const store = configureStore({ reducer: allReducer }, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;