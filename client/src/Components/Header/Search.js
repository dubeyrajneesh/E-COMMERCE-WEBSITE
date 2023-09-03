import React from 'react'
import {Box , InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from '@mui/icons-material/SavedSearch';

const Search = () => {
  return (

    <Box style={{ width: '38%' , marginLeft:'1.5%' , backgroundColor: 'white' , display:'flex', marginRight:'20px'}}>
        <InputBase
         style={{ width:'98%' , marginLeft:'2%', backgroundColor:'transparent'}} placeholder='Search for Products, Brands and More' >
           
        </InputBase>
        <SearchIcon style={{ backgroundColor:'white'  ,color:'black', width:'5%' , height: '5%' , padding:'5px'}}/>
    </Box>
    
  )
}

export default Search
