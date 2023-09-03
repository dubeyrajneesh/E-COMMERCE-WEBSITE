import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { navData } from '../ConstData/Data'

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '85px 130px 20px 130px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const NavBar = () => {
    return (

        // <Box style={{ backgroundColor: '#F2F2F2', padding: '5px 10px', marginTop: '66px' }}>
        // style={{ display: 'flex', margin: '0px 130px', justifyContent: 'space-between' }}
            <Component >
                {

                    navData.map(data => (
                        <Box style={{ textAlign: 'center' }}>

                            <img src={data.url} alt="img" style={{ width: '65px' }}></img>
                            <Typography style={{ fontSize: '14px', fontWeight: '600' }}>{data.text}</Typography>

                        </Box>
                    ))

                }


            </Component>

        // </Box>
    )
}

export default NavBar
