import { useTheme } from "@emotion/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  AcademicHat,
  Briefcase,
  Desktop,
  Envelope,
  Home,
  Tool,
  UserCircle,
} from "@mynaui/icons-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  const themeColors = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const InactiveText = styled(Typography)`
    && {
      font-family: "Rubik", sans-serif;
      color: white;
      font-size: 10px;
    }
  `;

  const ActiveText = styled(Typography)`
    && {
      font-family: "Rubik", sans-serif;
      font-size: 10px;
    }
  `;

  const [active, setActive] = useState({
    info: false,
    about: false,
    education: false,
    experience: false,
    projects: false,
    skills: false,
    contact: false,
  });

  useEffect(() => {
    const path = location.pathname;
    setActive({
      info: path === "/",
      about: path === "/about",
      education: path === "/education",
      experience: path === "/experience",
      projects: path === "/projects",
      skills: path === "/skills",
      contact: path === "/contact-me",
    });
  }, [location.pathname]);

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1D1C1D",
        color: "white",
        padding: "10px",
        border: "0.5px solid",
        borderColor: themeColors.palette.accent.hover,
        borderRadius: "20px",
        overflow: "hidden", // Ensures border radius is visible
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        placeContent: "space-evenly",
        flexDirection: "column", // Default vertical layout for larger screens

        // Media query for mobile screens
        "@media (max-width: 600px)": {
          flexDirection: "row", // Horizontal layout for mobile screens
          position: "fixed",
          bottom: 0, // Place at bottom of screen
          left: 0,
          right: 0,
          borderRadius: "0px", // Optional: No border radius for full width
          padding: "5px 0",
        },
      }}
      gap={2}
    >
      {/* Sidebar Navigation Items */}
      {[
        { route: "/", label: "Home", Icon: Home, key: "info" },
        { route: "/about", label: "About", Icon: UserCircle, key: "about" },
        {
          route: "/education",
          label: "Education",
          Icon: AcademicHat,
          key: "education",
        },
        {
          route: "/experience",
          label: "Experience",
          Icon: Briefcase,
          key: "experience",
        },
        {
          route: "/projects",
          label: "Projects",
          Icon: Desktop,
          key: "projects",
        },
        { route: "/skills", label: "Skills", Icon: Tool, key: "skills" },
        {
          route: "/contact-me",
          label: "Contact",
          Icon: Envelope,
          key: "contact",
        },
      ].map(({ route, label, Icon, key }) => (
        <IconButton key={key} onClick={() => handleClick(route)}>
          <Stack direction="column" alignItems="center">
            <Icon
              color={active[key] ? themeColors.palette.accent.main : "white"}
            />
            {active[key] ? (
              <ActiveText color={themeColors.palette.accent.main}>
                {label}
              </ActiveText>
            ) : (
              <InactiveText>{label}</InactiveText>
            )}
          </Stack>
        </IconButton>
      ))}
    </Box>
  );
};

export default Sidebar;
