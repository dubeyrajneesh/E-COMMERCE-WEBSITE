import React from "react";
import Slider from "./Slider";
import { Box} from '@mui/material';

const AddSlider = ({ products, title , timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    // const adURL = 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100';
    

    return (

       
        <Box style={{display:'flex' , padding:'10px 10px'}}>
            <Box style={{width:'82%'}}>
                <Slider 
                    products={products} 
                    title={title}
                    timer={timer} 
                    // multi={true} 
                />
            </Box>
            <Box style={{ backgroundColor:'#FFFFFF' , width:'18%'  , padding:'5px' , textAlign:'center'}}>
                <img src={adURL} style={{width:'217px' , height:'347px'}}/>
            </Box>
        </Box>
    )
}

export default AddSlider;