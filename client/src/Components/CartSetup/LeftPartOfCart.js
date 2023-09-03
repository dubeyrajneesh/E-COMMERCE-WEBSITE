import React from 'react'
import { Box, Typography, styled, Button } from '@mui/material'
import TextDots from '../TextUtils/TextDots'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../Redux/Action/Cart-Action'

const ParentBox = styled(Box)`
display: flex;


`

const ChildBox1 = styled(Box)`


`

const ChildBox2 = styled(Box)`

margin-left: 20px ;



`

const GrandChildBox1 = styled(Box)`
display: flex;
// margin-left: 18px ;
margin-top: 9px;


`

const GrandChildBox2 = styled(Box)`
display: flex;
// margin-left: 18px ;
margin-top: 16px;
align-items: center ;


`

const PlaceButton = styled(Button)`
margin-left: auto ;
color: #000;
font-weight: 600 ;
font-size: 15px ;


`
const DecreaseButton = styled(Button)`
font-size: 12px ;
width:40px ;
height: 40px;
border-radius:200%;
font-weight: 500 ;
color:#000;
margin-right:10px;



`
const QunatityButton = styled(Button)`

font-size: 12px ;
width:40px ;
height: 40px;

// border-radius:200%;
font-weight: 500 ;
color:#000;
margin-right:10px;




`
const IncreaseButton = styled(Button)`
font-size: 12px ;
width:40px ;
height: 40px;
border-radius:200%;
font-weight: 500 ;
color:#000;
margin-right:100px;




`

const BottomButton = styled(Button)`
display: flex;

`


const BorderBox = styled(Box)`

border-bottom: 2px solid #f0f0f0 ;
padding: 22px 20px 22px 35px ;

`

const LeftPartOfCart = ({ item }) => {

  const dispatch = useDispatch() ;
  const removeItem = (id) =>{
    dispatch(removeFromCart(id))
  }
  const Fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  return (
    <BorderBox>

      <ParentBox>
        <ChildBox1>
          <img src={item.url}  style={{width:'100px' , height:'100px'}} alt="img" />
        </ChildBox1>

        <ChildBox2>
          <Typography>{TextDots(item.title.longTitle)}</Typography>
          <Typography style={{ color: '#878787' , fontSize:'13px' }}> Size: XL , Size: XL</Typography>
          <GrandChildBox1>
            <Typography style={{  color: '#878787' }}> Seller TBsmart </Typography>
            <img src={Fassured} style={{ width: '80px', height: '20px' }} alt="img" />
          </GrandChildBox1>
          <GrandChildBox2>
            <Typography style={{ marginRight: '12px', fontWeight: '700' , fontSize:'22px' }}>₹{item.price.cost}</Typography>
            <Typography style={{ marginRight: '12px', textDecoration:'line-through', fontSize:'13px' }}>₹{item.price.mrp}</Typography>
            <Typography style={{ marginRight: '12px' , color:'#388E3C' }}>{item.price.discount} off</Typography>
            <Typography style={{ marginRight: '12px' , color:'#388E3C' }}> 1 coupon & 1 offer applied</Typography>

          </GrandChildBox2>


        </ChildBox2>



      </ParentBox>

      <BottomButton>
        {/* <Box>
          <DecreaseButton variant="outlined" size="small">-</DecreaseButton>
          <QunatityButton variant="outlined" size="small"  >1</QunatityButton>
          <IncreaseButton variant="outlined"  size="small" >+</IncreaseButton>
        </Box> */}

<div class=" btn-ctrl btn-group" role="group" style={{margin:' 20px 100px 5px 2px'}} aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">-</button>
  <button type="button" class="btn btn-outline-primary">1</button>
  <button type="button" class="btn btn-outline-primary">+</button>
</div>
        <PlaceButton onClick={()=> removeItem(item.id)}> REMOVE</PlaceButton>

      </BottomButton>


    </BorderBox >

  )
}

export default LeftPartOfCart
