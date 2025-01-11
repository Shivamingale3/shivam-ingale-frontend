/* eslint-disable no-unused-vars */
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
      font-size: 0.8rem; /* Default font size */
      @media (max-width: 600px) {
        font-size: 0.6rem; /* Smaller font size on mobile */
      }
    }
  `;

  const ActiveText = styled(Typography)`
    && {
      font-family: "Rubik", sans-serif;
      font-size: 0.8rem; /* Default font size */
      color: white;
      @media (max-width: 600px) {
        font-size: 0.6rem; /* Smaller font size on mobile */
      }
    }
  `;

  const SquircleBackground = styled(Box)`
    background-color: white;
    border-radius: 12px; /* Rounded square effect */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    @media (max-width: 600px) {
      padding: 4px; /* Reduced padding for smaller icons on mobile */
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
        backgroundColor: "#000000",
        color: "white",
        padding: "2%",
        border: "1px solid",
        borderColor: "white",
        borderRadius: "5%",
        overflow: "hidden", // Ensures border radius is visible
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        placeContent: "space-evenly",
        flexDirection: "column", // Default vertical layout
        gap: "10px", // Default gap

        // Media query for mobile screens
        "@media (max-width: 600px)": {
          flexDirection: "row", // Horizontal layout for mobile
          position: "fixed",
          bottom: 0, // Fixed to bottom on mobile
          left: 0,
          right: 0,
          borderRadius: 2.5, // Full-width bar
          padding: "1%",
          gap: "5px", // Smaller gap on mobile
          border: "1px solid white",
        },
      }}
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
        <IconButton
          key={key}
          onClick={() => handleClick(route)}
          sx={{
            padding: "8px", // Default padding
            "@media (max-width: 600px)": {
              padding: "4px", // Smaller padding for icons on mobile
            },
          }}
        >
          <Stack direction="column" alignItems="center" gap="5%">
            {active[key] ? (
              <SquircleBackground>
                <Icon
                  sx={{
                    fontSize: "24px", // Default icon size
                    "@media (max-width: 600px)": {
                      fontSize: "18px", // Smaller icon size on mobile
                    },
                  }}
                  color="black"
                />
              </SquircleBackground>
            ) : (
              <Icon
                sx={{
                  fontSize: "24px", // Default icon size
                  "@media (max-width: 600px)": {
                    fontSize: "18px", // Smaller icon size on mobile
                  },
                }}
                color="white"
              />
            )}
            {active[key] ? (
              <ActiveText>{label}</ActiveText>
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
