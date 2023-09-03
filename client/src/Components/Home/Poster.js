import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material';
import { posterData } from '../ConstData/Data';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Poster = () => {
  return (
    <Box style={{ border: '2px solid #f0f0f0', padding: '10px 10px', backgroundColor: '#F2F2F2' }}>

      <Carousel

        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
          // ssr={true} // means to render carousel on server-side.
        infinite={true}
          autoPlay={true}
        autoPlaySpeed={2000}
          keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
        containerClass="carousel-container"
        //   removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"

        style={{ backgroundColor:'#fff' }}
      >

        {
          posterData.map(data => (
            <img src={data.url} style={{ height: '230px' }} alt='lt=img'></img>
          ))
        }
      </Carousel>



    </Box>
  )
}

export default Poster
