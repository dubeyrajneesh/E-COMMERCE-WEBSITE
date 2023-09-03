import * as actionTypes from '../Types/Types'
import axios from 'axios' ;
const API_BASE_URL = 'http://localhost:4000' ;

export const getAllProducts = () => async(dispatch)=>{
    try{

        const res = await axios.get(`${API_BASE_URL}/products`)
        dispatch({
            type: actionTypes.SUCCESS , 
            payload: res.data
        })

    }
    catch(error){
        dispatch({
            type: actionTypes.FAIL,
            payload: error.message
        })

    }

   

}

export const getProductDetails = (id)=>async(dispatch)=>{
    try{

        dispatch({
            type: actionTypes.PRODUCT_REQUEST
        })

        const res = await axios.get(`${API_BASE_URL}/product/${id}`)

        dispatch({
            type: actionTypes.PRODUCT_SUCCESS , 
            payload: res.data
        })

    }

    catch(error){
        dispatch({
            type: actionTypes.PRODUCT_FAIL,
            payload: error.message
        })

    }

}

