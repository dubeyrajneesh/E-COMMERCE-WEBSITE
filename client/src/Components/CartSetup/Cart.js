import React from 'react'
import { Box, Button, Grid, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import LeftPartOfCart from './LeftPartOfCart'
import RightPartOfCart from './RightPartOfCart'
import { AddToCart } from '../../Redux/Action/Cart-Action'
import { removeFromCart } from '../../Redux/Action/Cart-Action'
import './Cart.css'

const GridContainer = styled(Grid)`
border: 0.1px solid red ;
padding: 30px 20px 30px 90px ;


`

const LeftGrid = styled(Grid)`
// border: 1px solid yellow ;
background-color: #FFFFFF;
box-shadow: 0px -2px 10px 0px rgb(0 0 0 / 10%);

`
const RightGrid = styled(Grid)`
// border: 1px solid yellow ;
background-color: #FFFFFF;
height: 346px ;

margin-left:15px


`

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #fff;
    margin: 132px 140px 68px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
    margin-top:80px;
`;

const Image = styled('img')({
  width: '15%'
});
const MyCartStyling = styled(Box)`
padding: 6px 25px ;
display: flex;
justify-content: space-around;
align-items: center;
// padding: 10px 25px 10px 10px;
box-shadow: 1px 1px 2px 1px #f0f0f0;
margin-bottom: 12px;
`

const TypoStyle = styled(Typography)`
font-weight: 600 ;



`
const PinCodeButton = styled(Button)`
font-weight: 600 ;
color: blue;
width: 200px;
// border: 1px solid white;
// box-shadow: 10px 10px 8px 4px #FFFFFF;
padding: 12px 20px ;



`

const PlaceButton = styled(Button)`
padding: 16px 62px ;
// border: 1px solid red;
font-weight: 600 ;
display: flex ;
margin-left: auto ;
border-top: 1px solid #f0f0f0 ;
background-color: #fb641b ;
color:#fff ;
:hover {
  background-color: #fb644b ;
}

`


const Cart = () => {

  const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  const { cartItems } = useSelector(state => state.cart);
  return (

    <>

      {

        cartItems.length ?


          <GridContainer container style={{ marginTop: '66px' }}>
            <LeftGrid item lg={8} md={8} sm={11} xs={11}>

              <MyCartStyling>
                <TypoStyle>My Cart({cartItems.length})</TypoStyle>
                <Typography>From Saved Addresses</Typography>
                <PinCodeButton variant="outlined"> Enter Delivery Pincode</PinCodeButton>
              </MyCartStyling>

              {
                cartItems.map((item) => (

                  <LeftPartOfCart item={item} />

                ))
              }

              <PlaceButton>PLACE ORDER</PlaceButton>

            </LeftGrid>

            <RightGrid lg={3} md={3} sm={11} xs={11}>
              <RightPartOfCart cartItems={cartItems} />

            </RightGrid>
          </GridContainer>

          :

          <Component>
            <Container>
              <Image src={emptycarturl} />
              <Typography>Your cart is empty now!</Typography>
              <Typography component="span">Add items to it now.</Typography>
            </Container>
          </Component>
      }

    </>
  )
}

export default Cart
