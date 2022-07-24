import {cloneDeep} from 'lodash';

const initialState = {
  products: [], cart: [], checkout: [], shipping: [], payment: [], quantity: 0,summary: []
}

const productReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PRODUCTS':
      let items = cloneDeep(state.products);
      items = payload;
      return {...state, products:items}
    default:
      return state;
  }
}

export const addToCart = (state=initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_CART':
      let items = cloneDeep(state.cart);
      const itemInCart = items.find(item => item.id === payload.id);
      if (!itemInCart) {
        items = [...items, payload];
      } else {
        // TODOL: UPDATE ITEM COUNT
      }
      return {...state, cart:items}
    default:
      return state;
  }
}

export const addToCheckout = (state=initialState, { type, payload }) => {
  switch (type) {
    case 'CHECKOUT_DATA' :
      let items = cloneDeep(state.checkout);
      items = [...items, payload];
      return {...state, checkout:items}

    default:
      return state;
  }
}

export const addToShipping = (state=initialState, { type, payload }) => {
  switch (type) {
    case 'SHIPPING_DATA':
      let items = cloneDeep(state.shipping);
      items = [...items, payload];
      return {...state, shipping:items}

    default:
      return state;
  }
}

export const addToPayment = (state=initialState, { type, payload }) => {
  switch (type) {
    case 'PAYMENT_DATA':
      let items = cloneDeep(state.payment);
      items = [...items, payload];
      return {...state, payment:items}

    default:
      return state;
  }
}
export const manageQuantity = (state=initialState, { type, payload }) => {
  switch (type) {
    case 'QUANTITY_DATA':
      let quantity = cloneDeep(state.quantity);
      quantity = payload;
      return {...state, quantity:quantity}

    default:
      return state;
  }
}
export const manageSummary = (state=initialState, { type, payload }) => {
  switch (type) {
    case 'SUMMARY_DATA':
      let item = cloneDeep(state.summary);
      item = payload;
      return {...state, summary:item}
    default:
      return state;
  }
}
export default productReducer;