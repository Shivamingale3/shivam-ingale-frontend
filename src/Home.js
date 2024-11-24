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
      {/* Profile Section */}
      <Grid2
        aria-label="profile-grid"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexBasis: '30%', // Increase to 30% of the width
          height: '100vh',
          padding: '20px',
          maxWidth: '30%', // Match the flexBasis
          minWidth: '300px', // Ensure a minimum width for smaller screens
        }}
      >
        <Profile />
      </Grid2>

      {/* Middle Section */}
      <Grid2
        aria-label="middle-grid"
        item
        color={'white'}
        sx={{
          flexBasis: '50%', // Middle section gets 50% of the width
          minHeight: '100vh',
          padding: '20px', // Adds padding for breathing room
          overflow: 'auto', // Handles overflow gracefully
        }}
      >
        {children}
        <Outlet />
      </Grid2>

      {/* Sidebar Section */}
      <Grid2
        aria-label="sidebar-grid"
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          flexBasis: '20%', // Reduce Sidebar width slightly
          height: '100vh',
          paddingRight: '1%',
          maxWidth: '20%', // Match the flexBasis
        }}
      >
        <Sidebar />
      </Grid2>
    </Root>
  );
}