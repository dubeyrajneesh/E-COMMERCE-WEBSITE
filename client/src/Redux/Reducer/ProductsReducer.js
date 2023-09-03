import * as actionTypes from '../Types/Types'
export const ProductsReducer = (state = {products: []}, action)=>{
    switch(action.type) {
        case actionTypes.SUCCESS:
            return { products: action.payload }
        case actionTypes.FAIL:
            return { error: action.payload }
        default:
            return state
    }
}
export const getProductDetailsReducer = (state = { product: {}}, action) => {
    switch(action.type){
        case actionTypes.PRODUCT_REQUEST:
            return { loading: true }
        case actionTypes.PRODUCT_SUCCESS:
            return { loading: false, product: action.payload }
        case actionTypes.PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.PRODUCT_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}