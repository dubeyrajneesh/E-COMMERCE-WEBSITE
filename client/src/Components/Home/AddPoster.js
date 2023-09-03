import React from 'react'


import { Box, Grid } from '@mui/material'

const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50',
];


const AddPoster = () => {

    const covidUrl = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (

    <>
    
    <Grid container lg={12} md ={12} sm={12} xm={12} style={{padding:'10px 10px'}}>

        {
            ImageURL.map(image=>(
                <Grid item lg={3.9} md ={6} sm={12} xm={12}>
                <img src={image} style={{height: '250px'}} alt="img"></img>
                </Grid>

            ))
        }

    </Grid>

    <Grid lg={12} md ={12} sm={12} xm={12} style={{padding:'10px 10px' }} >
        <img src={covidUrl} alt="img" style={{height:'190px', width:'100%'}}></img>

    </Grid>
    </>
  )
}

export default AddPoster
