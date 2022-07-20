import {cloneDeep} from 'lodash';

const initialState = { cart: [], checkout: [] }

const productReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_PRODUCTS':
      return [...state, ...payload]
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
    case 'ADD_TO_CHECKOUT':
      let items = cloneDeep(state.checkout);
      items = [...items, payload];
      return {...state, checkout:items}
    default:
      return state;
  }
}

export default productReducer;