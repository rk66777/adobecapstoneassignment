import { cloneDeep } from 'lodash';

const initialState = {
  products: [], cart: [], wishlist: [], checkout: [], shipping: [], payment: [], quantity: 1, summary: []
}

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PRODUCTS':
      let items = cloneDeep(state.products);
      items = payload;
      return { ...state, products: items }
    default:
      return state;
  }
}

const addToCart = (state, action) => {
  let items = cloneDeep(state.cart);
  const itemInCart = items.find(item => item.id === action.payload.id);
  if (!itemInCart) {
    items = [...items, action.payload];
  } else {
    // TODOL: UPDATE ITEM COUNT
  }
  return { ...state, cart: items }
}

const removeCartItem = (state, action) => {
  let remainingItems = cloneDeep(state.cart);
  remainingItems = remainingItems.filter(item => item.id !== action.payload.id);
  return { ...state, cart: remainingItems }
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action);
    case 'REMOVE_FROM_CART':
      return removeCartItem(state, action);
    default:
      return state;
  }
}

export const addToWishlist = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'WISHLIST_DATA':
      let items = cloneDeep(state.wishlist);
      const wishlistItems = items.find(item => item === payload);
      if (!wishlistItems) {
        items = [...items, payload];
      } else {
        items = items.filter((item) => item !== payload);
      }
      return { ...state, wishlist: items }

    default:
      return state;
  }
}

export const addToCheckout = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHECKOUT_DATA':
      let items = cloneDeep(state.checkout);
      items = [...items, payload];
      return { ...state, checkout: items }

    default:
      return state;
  }
}

export const addToShipping = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SHIPPING_DATA':
      let items = cloneDeep(state.shipping);
      items = [...items, payload];
      return { ...state, shipping: items }

    default:
      return state;
  }
}

export const addToPayment = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'PAYMENT_DATA':
      let items = cloneDeep(state.payment);
      items = [...items, payload];
      return { ...state, payment: items }

    default:
      return state;
  }
}
export const manageQuantity = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'QUANTITY_DATA':
      let quantity = cloneDeep(state.quantity);
      quantity = payload;
      return { ...state, quantity: quantity }

    default:
      return state;
  }
}
export const manageSummary = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SUMMARY_DATA':
      let item = cloneDeep(state.summary);
      item = payload;
      return { ...state, summary: item }
    default:
      return state;
  }
}
export default productReducer;