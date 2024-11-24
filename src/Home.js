import styled from "@emotion/styled";
import { CssBaseline, Grid } from "@mui/material";
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
      <Grid
        aria-label="profile-grid"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexBasis: '30%',
          height: '100vh',
          padding: '20px',
          maxWidth: '30%',
          minWidth: '300px',
          overflow: 'hidden', // Prevent scrolling
        }}
      >
        <Profile />
      </Grid>

      {/* Middle Section */}
      <Grid
        aria-label="middle-grid"
        item
        color={'white'}
        sx={{
          flexBasis: '50%',
          height: '100vh', // Ensures middle section occupies full height
          padding: '20px',
          overflowY: 'auto', // Allows scrolling
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column', // Stacks components vertically
          gap: '20px',
          // Hide scrollbar
          '&::-webkit-scrollbar': {
            display: 'none', // For Chrome, Safari, and Edge
          },
          '-ms-overflow-style': 'none', // For IE and Edge
          'scrollbar-width': 'none', // For Firefox
        }}
      >
        {children}
        <Outlet />
      </Grid>


      {/* Sidebar Section */}
      <Grid
        aria-label="sidebar-grid"
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          flexBasis: '20%',
          height: '100vh',
          paddingRight: '1%',
          maxWidth: '20%',
          overflow: 'hidden', // Prevent scrolling
        }}
      >
        <Sidebar />
      </Grid>
    </Root>
  );
}
