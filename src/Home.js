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
  background-color: #000000;
  justify-content: center;
  align-items: center;
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
          height: "100%",
          padding: "2%",
          maxWidth: "30%",
          overflow: "hidden",

          "@media (max-width: 900px)": {
            paddingTop: "30%",
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
          height: "100%",
          padding: "2%",
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2%",

          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",

          "@media (max-width: 900px)": {
            paddingBottom: "20%",
            flexBasis: "auto",
            height: "calc(100vh - 10%)", // Ensure space for sidebar
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
          height: "100%",
          padding: "1%",
          maxWidth: "20%",
          overflow: "hidden",

          "@media (max-width: 900px)": {
            position: "absolute",
            top: 0,
            height: "10%",
            maxWidth: "100%",
            width: "100%",
            zIndex: 10,
            justifyContent: "space-around",
            backgroundColor: "#000000",
          },
        }}
      >
        <Sidebar />
      </Grid>
    </Root>
  );
}
