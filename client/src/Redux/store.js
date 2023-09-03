import {createStore , combineReducers , applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk' ;
import {composeWithDevTools} from 'redux-devtools-extension';
import { ProductsReducer, getProductDetailsReducer } from './Reducer/ProductsReducer';
import CartReducers from './Reducer/CartReducers';


const reducers = combineReducers(

    {
        getAllProducts : ProductsReducer ,
        getProductDetails: getProductDetailsReducer,
        cart: CartReducers

    }
    
)

const middleware = [thunk] ;


const store= createStore(
    reducers ,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store ;
