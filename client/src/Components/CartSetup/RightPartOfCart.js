import React, {useState , useEffect} from 'react'
import { Box , Typography, styled } from '@mui/material'


const PriceBox = styled(Box)`
font-size: 18px ;
font-weight: 600 ;
padding: 15px 25px ;
border-bottom: 2px solid #f0f0f0 ;
color: #878787;

`
const FloatRightBox = styled(Box)`
// display: flex;
// float: right;
// margin-left: 80px ;
margin-left: auto ;
`

const RightPartOfCart = ({cartItems}) => {

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
      totalAmount();
  }, [cartItems]);
  
  const totalAmount = () => {
      let price = 0, discount = 0;
      cartItems.map(item => {
          price += item.price.mrp
          discount += (item.price.mrp - item.price.cost) 
      })
      setPrice(price);
      setDiscount(discount);
  }

  return (

    <Box >

      <PriceBox>
        PRICE DETAILS
      </PriceBox>
      <Box  style={{display:'flex', marginBottom:'10px' , padding:'2px 25px'}}>
        <Box style={{fontSize:'18px' , fontWeight:'600'}}> Price ({cartItems.length})</Box>
        <FloatRightBox style={{fontSize:'18px' , fontWeight:'600'}}>  ₹{price}</FloatRightBox>
      </Box>
      <Box style={{display:'flex', marginBottom:'10px' , padding:'2px 25px'}}>
        <Box style={{fontSize:'18px' , fontWeight:'600'}}>Discount</Box>
        <FloatRightBox style={{color:'#388E3C'}}>-₹{discount}</FloatRightBox>
      </Box>
      <Box style={{display:'flex', marginBottom:'10px', padding:'2px 25px'}}>
        <Box style={{fontSize:'18px' , fontWeight:'600'}}>Coupons for you</Box>
        <FloatRightBox style={{color:'#388E3C'}}>-₹50</FloatRightBox>
      </Box>
      <Box style={{display:'flex', marginBottom:'10px', padding:'2px 25px', borderBottom:'2px solid #f0f0f0'}}>
        <Box style={{fontSize:'18px' , fontWeight:'600' , marginBottom:'14px'}}>Delivery Charges</Box>
        <FloatRightBox style={{color:'#388E3C'}}>FREE</FloatRightBox>
      </Box>

      <Box style={{display:'flex',alignItems:'center' , marginBottom:'10px', padding:'5px 25px' , borderBottom:'2px solid #f0f0f0'}}>
        <Box style={{fontSize:'20px' , fontWeight:'700'  , marginBottom:'10px'}}>Total Amount</Box>
        <FloatRightBox style={{fontSize:'18px' , fontWeight:'600' , float:'right'}}>₹{price-discount-50}</FloatRightBox>
      </Box>
      <Box style={{ padding:'10px 25px', fontSize:'14px', color:'#388E3C' , borderBottom:'2px solid #f0f0f0', marginBottom:'10px'}}>
        You will save ₹{discount+50} on this order
      </Box>
    </Box>
    
  )
}

export default RightPartOfCart
