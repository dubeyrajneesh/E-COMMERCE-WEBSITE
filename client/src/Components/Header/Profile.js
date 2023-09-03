import React, { useState } from 'react'

import { Box, Typography, Menu, MenuItem, Button } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Profile = ({ account, setAccount }) => {

  const [open, setOpen] = useState(false)

  const ProfileLogout = (event) => {
    setOpen(event.currentTarget)
  }

  const onHandleClose = () => {
    setOpen(false);
  }

  const Logout = () => {
    setAccount('');

  }
  return (
    <>

      <Box onClick={(event) => ProfileLogout(event)} style={{ cursor: 'pointer' }} >
        <Typography >
          {account}



        </Typography>




      </Box>

      <Menu

        anchorEl={open}
        open={Boolean(open)}
        onClose={onHandleClose}
        style={{marginTop: '10px'}}

      >

        <Box style={{ display: 'flex' , alignItems:'center' , padding:' 2px 5px 2px 8px' }}>
          <PowerSettingsNewIcon style={{  color: '#2874F0' }}></PowerSettingsNewIcon>
          <MenuItem onClick={() => { onHandleClose(); Logout(); }} style={{ fontWeight: '700' }}>Logout</MenuItem>
        </Box>
      </Menu>




    </>
  )
}

export default Profile
