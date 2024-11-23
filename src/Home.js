import styled from "@emotion/styled";
import { CssBaseline, Grid2 } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';

const Root = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #1D1C1D;
`;


export default function Home({ children }) {


  return (
    <Root>
      <CssBaseline />
      <Grid2
        aria-label="profile-grid"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40vw',
          height: '100vh',
          padding: '20px',
        }}
      >

        <Profile />
      </Grid2>
      <Grid2
        aria-label="middle-grid"
        item
        color={'white'}
        sx={{
          minWidth: '50vw',
          minHeight: '100vh',
        }}
      >
        {children}
        <Outlet />
      </Grid2>
      <Grid2
        aria-label="sidebar-grid"
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          width: '10vw',
          height: '100vh',
          paddingRight: '1%'
        }}
      >
        <Sidebar />
      </Grid2>
    </Root>
  );
}
