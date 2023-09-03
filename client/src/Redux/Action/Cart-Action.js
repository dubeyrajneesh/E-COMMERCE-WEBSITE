import * as actionTypes from '../Types/Types'
import axios from 'axios' ;
const API_BASE_URL = 'http://localhost:4000' ;



export const AddToCart =(id,quantity) =>async(dispatch)=>{

    try{
        const {data} = await axios.get(`${API_BASE_URL}/product/${id}`)

        dispatch({
            type: actionTypes.ADD_TO_CART,
             payload: { ...data, quantity }
        })

    }catch(error){
        dispatch({
            type: actionTypes.ADD_TO_CART_ERROR,
            payload: error.message
        })
    }

 


}

export const removeFromCart = (id) =>(dispatch)=>{

    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

}