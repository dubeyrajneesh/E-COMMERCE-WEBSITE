import React from 'react'
import { AppBar, Toolbar, Box, Typography } from '@mui/material'
import { SearchIcon } from '@mui/icons-material'
import Search from './Search';
import RightButtons from './RightButtons';
import Profile from './Profile';
import { Link } from 'react-router-dom';



const Header = () => {

    const logo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const plusUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar sx={{ background: '#2874f0', height: '64px' }}>
            <Toolbar >

                <Link exact to={'/'}  style={{textDecoration:'none' , color:'inherit'}}>
                    <Box style={{ lineHeight: '15px', marginLeft: '12%' }}>
                        <img src={logo} alt='logo' width="120" height="20" aspect-ratio="auto 130 / 22"></img>

                        <Box style={{ display: 'flex' }}>
                            <Box component='span' style={{ fontStyle: 'italic' }}>Explore</Box>
                            <Box component='span' style={{ marginLeft: '5px', fontStyle: 'italic', color: 'yellow' }} >Plus</Box>
                            <img style={{ width: 12, height: 12, marginLeft: '5px' }} src={plusUrl}></img>
                        </Box>

                    </Box>
                </Link>

                <Search />
                <RightButtons />






            </Toolbar>
        </AppBar >

    )
}

export default Header
