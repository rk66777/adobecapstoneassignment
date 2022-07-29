
const fetch_products = () => async dispatch => {

     await fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(res => dispatch({
            type: 'FETCH_PRODUCTS',
            payload: res
        }));

}

export const  addtocart_action= (res) => {
    return{
        type: 'ADD_TO_CART',
        payload: res
    }
}

export const  removeSelectedProduct= (res) => {
    return{
        type: 'REMOVE_FROM_CART',
        payload: res
    }
}

export const wishlist_action= (res) => {
    return{
        type: 'WISHLIST_DATA',
        payload: res
    }
}

export const  addtocheckout_action= (res) => {
    return{
        type: 'ADD_TO_CHECKOUT',
        payload: res
    }
}

export const  checkout_action= (res) => {
    return{
        type: 'CHECKOUT_DATA',
        payload: res
    }
}

export const  shipping_action= (res) => {
    return{
        type: 'SHIPPING_DATA',
        payload: res
    }
}

export const  payment_action= (res) => {
    return{
        type: 'PAYMENT_DATA',
        payload: res
    }
}

export const  quantity_action= (res) => {
    return{
        type: 'QUANTITY_DATA',
        payload: res
    }
}
export const summary_action= (res) => {
    return{
        type: 'SUMMARY_DATA',
        payload: res
    }
}

export default fetch_products;