import React from 'react'

import { Box, Typography, Divider, Button } from '@mui/material'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Slider = ({ products, title, timer }) => {
    return (

        <Box style={{ backgroundColor: '#F2F2F2' }}>
            <Box style={{ padding: '10px 10px', backgroundColor: '#ffffff' , marginBottom:'8px' }}>
                <Box style={{ display: 'flex', alignItems: 'center' , padding:'10px 10px 10px 60px' }}>
                    <Typography style={{ fontSize: '20px', fontWeight: '600' }}>{title}</Typography>

                    {timer && <Box style={{ display: 'flex' }}>
                        <AccessAlarmIcon style={{ marginLeft: '2%', fontSize: '24px' }}></AccessAlarmIcon>
                        <Countdown date={Date.now() + 100000000} />
                    </Box>
                    }
                    <Button variant="contained" style={{backgroundColor:'primary' , marginLeft:'auto', borderRadius:'4px' , textTransform:'none', marginBottom:'15px'}}>View All</Button>

                </Box>
                <Divider style={{ marginBottom: '12px' }}></Divider>


                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    // ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"




                >

                    {
                        products.map(product => (
                                 
                            <Link exact to = {`product/${product.id}` } style={{textDecoration:'none'}} >
                            <Box style={{ display: 'block', textAlign: 'center' }}>
                                <img src={product.url} style={{ height: '200px' }} alt='img'></img>
                                <Typography style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Typography>
                                <Typography style={{ color: 'green' }}>{product.discount}</Typography>
                                <Typography style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Typography>
                            </Box>

                            </Link>

                        ))

                    }


                </Carousel>



            </Box>

        </Box>
    )
}

export default Slider
