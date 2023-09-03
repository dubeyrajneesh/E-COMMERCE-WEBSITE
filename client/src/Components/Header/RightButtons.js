import React, { useState, useContext } from 'react'
import { Box, Button, Typography, Badge, styled, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from '../Screen/Login';
import { DataContext } from '../context/DataProvider'
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux' ;
import Form from './Form';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


const RightButtons = () => {

    const dispatch = useDispatch() ;
    const navigate = useNavigate();

    const openForm = () =>{
        navigate('/form')

    }

    const {cartItems} = useSelector(state=> state.cart)

    const [open, setOpen] = useState(false)
    const { account, setAccount } = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

 
    const openCart = () => {
        navigate('/cart')
    }
    return (

        <Box style={{ width: '35%', display: 'bock' }}>
            <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '6%' }}>

                {
                    account ? <Profile account={account} setAccount={setAccount} /> :
                        <Box style={{ width: '20%', marginLeft: '9px', backgroundColor: 'white' }}>
                            <Button onClick={() => openDialog()} variant="contained" style={{ width: '100%', backgroundColor: '#FFFFFF', color: '#2874f0', fontWeight: 'bold' }}>Login</Button>
                        </Box>

                }


                <Box>
                    <Typography onClick={()=>{openForm()}} style={{cursor:'pointer'}}>Become a Seller</Typography>
                </Box>

                <Box>
                    <Typography style={{cursor:'pointer'}}>More</Typography>
                </Box>
                <Box onClick={() => { openCart() }} style={{ display: 'flex', cursor: 'pointer' , alignItems:'center' }}>
                    {/* <ShoppingCartIcon></ShoppingCartIcon> */}

                    <IconButton aria-label="cart">
                        <StyledBadge
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        
                        badgeContent={cartItems.length} color="secondary">
                            <ShoppingCartIcon style={{color:'#fff'}} />
                        </StyledBadge>
                    </IconButton>

                    <Typography style={{marginLeft:'10px'}} >Cart</Typography>
                </Box>





            </Box>

            <Box >
                <Login open={open} setOpen={setOpen} />
            </Box>

        </Box>


    )
}

export default RightButtons
