import React , {useState , useEffect} from 'react'
import {Box , Typography} from '@mui/material'
import NavBar from './NavBar'
import Poster from './Poster'
import {useDispatch , useSelector} from 'react-redux' ;
import {getAllProducts as sameProducts} from '../../Redux/Action/product-action.js'
import Slider from './Slider';
import AddSlider from './AddSlider';
import AddPoster from './AddPoster';

const Home = () => {
  const {products} = useSelector(state => state.getAllProducts);
  // const { products, error } = getAllProducts;


  const dispatch = useDispatch() ;

  useEffect(()=>{
    dispatch(sameProducts())
  }, [dispatch])
  return (
   <>
    <NavBar/>
    <Poster/>
    <AddSlider products={products} title='Deal of the day' timer={true}/>
    <AddPoster></AddPoster>
    <Slider products={products}  title='Recommending items' timer={false}/>
    <Slider products={products} title='Best Discount' timer={false}/>
    <Slider products={products}  title='Top Products' timer={false}/>
    <AddPoster></AddPoster>
    <Slider products={products} title='Adventorous Items' timer={false}/>
    <Slider products={products} title='Top selling products' timer={false}/>
    <Slider products={products} title='Related products' timer={false}/>
    <Poster/>
    <Slider products={products} title='Shop Now' timer={false}/>
   </>
  )
}

export default Home
