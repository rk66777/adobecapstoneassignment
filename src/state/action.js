
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

export default fetch_products;