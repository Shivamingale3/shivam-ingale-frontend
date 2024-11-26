import { useTheme } from "@emotion/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { AcademicHat, Briefcase, Desktop, Envelope, Home, Tool, UserCircle } from "@mynaui/icons-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  const themeColors = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const InactiveText = styled(Typography)`
    &&{
      font-family: "Rubik", sans-serif;
      color: white;
      font-size: 10px;
    }
  `;

  const ActiveText = styled(Typography)`
    &&{
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
        border: '0.5px solid',
        borderColor: themeColors.palette.accent.hover,
        borderRadius: '20px',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        placeContent: 'space-evenly',
        flexDirection: 'column',
      }}
      gap={2}
    >

      {/* =============================================== Home =============================================== */}


      <IconButton onClick={() => handleClick('/')}>
        <Stack direction="column" alignItems="center">
          <Home color={active.info ? themeColors.palette.accent.main : "white"} />
          {active.info ? (
            <ActiveText color={themeColors.palette.accent.main}>Home</ActiveText>
          ) : (
            <InactiveText>Home</InactiveText>
          )}
        </Stack>
      </IconButton>


      {/* =============================================== About =============================================== */}


      <IconButton onClick={() => handleClick('/about')}>
        <Stack direction="column" alignItems="center">
          <UserCircle color={active.about ? themeColors.palette.accent.main : "white"} />
          {active.about ? (
            <ActiveText color={themeColors.palette.accent.main}>About</ActiveText>
          ) : (
            <InactiveText>About</InactiveText>
          )}
        </Stack>
      </IconButton>


      {/* =============================================== Education =============================================== */}


      <IconButton onClick={() => handleClick('/education')}>
        <Stack direction="column" alignItems="center">
          <AcademicHat color={active.education ? themeColors.palette.accent.main : "white"} />
          {active.education ? (
            <ActiveText color={themeColors.palette.accent.main}>Education</ActiveText>
          ) : (
            <InactiveText>Education</InactiveText>
          )}
        </Stack>
      </IconButton>


      {/* =============================================== Experience =============================================== */}


      <IconButton onClick={() => handleClick('/experience')}>
        <Stack direction="column" alignItems="center">
          <Briefcase color={active.experience ? themeColors.palette.accent.main : "white"} />
          {active.experience ? (
            <ActiveText color={themeColors.palette.accent.main}>Experience</ActiveText>
          ) : (
            <InactiveText>Experience</InactiveText>
          )}
        </Stack>
      </IconButton>

      {/* =============================================== Projects =============================================== */}


      <IconButton onClick={() => handleClick('/projects')}>
        <Stack direction="column" alignItems="center">
          <Desktop color={active.projects ? themeColors.palette.accent.main : "white"} />
          {active.projects ? (
            <ActiveText color={themeColors.palette.accent.main}>Projects</ActiveText>
          ) : (
            <InactiveText>Projects</InactiveText>
          )}
        </Stack>
      </IconButton>


      {/* =============================================== Skills =============================================== */}


      <IconButton onClick={() => handleClick('/skills')}>
        <Stack direction="column" alignItems="center">
          <Tool color={active.skills ? themeColors.palette.accent.main : "white"} />
          {active.skills ? (
            <ActiveText color={themeColors.palette.accent.main}>Skills</ActiveText>
          ) : (
            <InactiveText>Skills</InactiveText>
          )}
        </Stack>
      </IconButton>


      {/* =============================================== Contact =============================================== */}


      <IconButton onClick={() => handleClick('/contact-me')}>
        <Stack direction="column" alignItems="center">
          <Envelope color={active.contact ? themeColors.palette.accent.main : "white"} />
          {active.contact ? (
            <ActiveText color={themeColors.palette.accent.main}>Contact</ActiveText>
          ) : (
            <InactiveText>Contact</InactiveText>
          )}
        </Stack>
      </IconButton>
    </Box>
  );
};

export default Sidebar;
