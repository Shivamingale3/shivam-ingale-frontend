import { Grid } from '@mui/material';
import React from 'react';
import SidebarWidget from '../components/SidebarWidget';

const MyInfo = () => {
  return (
    <Grid
    sx={{
      height:'100vh',
      width:'157vh',
      // backgroundColor:'white',
      border:'2px solid white'
    }}
    >

      <SidebarWidget />
    </Grid>
  )
}

export default MyInfo