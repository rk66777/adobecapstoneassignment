import { applyMiddleware, combineReducers, compose, } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer";
import { addToCart } from "./reducer";
import thunk from 'redux-thunk';

const allReducer = combineReducers({ products: productReducer, cart: addToCart });
const middleware  = [thunk];
const store = configureStore({ reducer: allReducer }, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;