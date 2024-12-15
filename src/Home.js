import styled from "@emotion/styled";
import { CssBaseline, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

// Root Wrapper with Breakpoints for Flex Layout
const Root = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #1d1c1d;

  @media (max-width: 900px) {
    flex-direction: column; /* Vertical layout for small devices */
    align-items: center;
  }
`;

export default function Home({ children }) {
  return (
    <Root>
      <CssBaseline />

      {/* Profile Section */}
      <Grid
        aria-label="profile-grid"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexBasis: "30%",
          height: "100vh",
          padding: { xs: "16px", sm: "20px", md: "24px", lg: "32px" },
          maxWidth: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
          minWidth: { xs: "100%", sm: "300px", md: "300px" },
          overflow: "hidden",

          "@media (max-width: 900px)": {
            paddingTop: "100px",
            flexBasis: "auto",
            maxWidth: "100%",
            height: "auto",
          },
        }}
      >
        <Profile />
      </Grid>

      {/* Middle Section */}
      <Grid
        aria-label="middle-grid"
        item
        color={"white"}
        sx={{
          flexBasis: "50%",
          height: "100vh",
          padding: { xs: "16px", sm: "20px", md: "24px", lg: "32px" },
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",

          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",

          "@media (max-width: 900px)": {
            flexBasis: "auto",
            height: "calc(100vh - 60px)", // Ensure space for sidebar
            overflowY: "scroll",
          },
        }}
      >
        {children}
        <Outlet />
      </Grid>

      {/* Sidebar Section */}
      <Grid
        aria-label="sidebar-grid"
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flexBasis: "20%",
          height: "100vh",
          paddingRight: { xs: "0", sm: "0", md: "1%", lg: "1%" },
          maxWidth: { xs: "100%", sm: "100%", md: "20%", lg: "20%" },
          overflow: "hidden",

          "@media (max-width: 900px)": {
            position: "absolute",
            top: 0,
            height: "60px",
            maxWidth: "100%",
            width: "100%",
            zIndex: 10,
            justifyContent: "space-around",
            backgroundColor: "#1D1C1D",
          },
        }}
      >
        <Sidebar />
      </Grid>
    </Root>
  );
}
