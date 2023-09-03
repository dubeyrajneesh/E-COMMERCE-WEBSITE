import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Box, Typography, Grid } from '@mui/material';
import { getProductDetails } from '../../Redux/Action/product-action';
import LeftDetailCtrl from './LeftDetailCtrl';
import ProductDetail from './ProductDetail';


const ProductDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, loading, product])

    const Fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    return (
        <Box style={{ marginTop: '66px' }}>

            {
                product && Object.keys(product).length &&

                <Grid container style={{  backgroundColor: '#FFFFFF' , display: 'flex' }}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>

                        <LeftDetailCtrl product={product} />



                    </Grid>

                    <Grid item lg={8} md={8} sm={8} xs={12}  style={{marginTop:'50px'}}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={Fassured} style={{ width: 77, marginLeft: 20 }} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />


                    </Grid>


                </Grid>

            }

        </Box>
    )
}

export default ProductDetails
