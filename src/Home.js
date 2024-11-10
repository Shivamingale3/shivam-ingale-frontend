import { Grid } from '@mui/system'
import React, { useEffect, useState } from 'react'
import MyProfile from './components/MyProfile'
import MyInfo from './components/MyInfo'
import { useTheme } from '@emotion/react'

const Home = () => {
  const theme = useTheme();
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      setData({});
      setData(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
    // }, []);
  });

  return (
    <Grid
      aria-label='home-parent-grid'
      sx={{
        display: 'inline-flex',
        backgroundColor: theme.palette.accent.hover,
      }}
    >
      <Grid
        aria-label='home-myPofile-grid'
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={5}
      >
        <MyProfile />
      </Grid>

      <Grid
        aria-label='home-myInfo-grid'
        width={'157vh'}
      >
        <MyInfo />
      </Grid>
    </Grid>
  );
};

export default Home;