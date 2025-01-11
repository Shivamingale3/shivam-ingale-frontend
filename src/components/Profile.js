import { useTheme } from "@emotion/react";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  PictureAsPdf,
} from "@mui/icons-material";
import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  const colorTheme = useTheme();

  return (
    <Grid
      container
      direction="column"
      sx={{
        height: "auto",
        width: { xs: "95%", sm: "90%", md: "85%", lg: "80%" },
        padding: { xs: "24px", sm: "32px" },
        backgroundColor: "#000000",
        color: "white",
        textAlign: "center",
        borderRadius: "2.5%",
        border: "1px solid white",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        overflow: "hidden",
        flexShrink: 0,
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: colorTheme.shadows[5],
        },
      }}
    >
      {/* Name */}
      <Grid item sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          fontFamily={["Rowdies", "sans-serif"]}
          letterSpacing={2}
          fontSize={{ xs: "1.8rem", sm: "2.4rem" }}
          fontWeight={550}
          color={colorTheme.palette.accent.light}
        >
          SHIVAM INGALE
        </Typography>
      </Grid>

      {/* Avatar */}
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "250px",
        }}
      >
        <Avatar
          variant="square"
          alt="Shivam Ingale"
          src="avatar.jpeg"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "16%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      </Grid>

      {/* Location */}
      <Typography
        fontFamily={["Rowdies", "sans-serif"]}
        letterSpacing={2}
        fontSize={{ xs: "1.2rem", sm: "1.4rem" }}
        color={colorTheme.palette.accent.light}
      >
        Based in India
      </Typography>

      {/* Role */}
      <Typography
        fontFamily={["Rowdies", "sans-serif"]}
        letterSpacing={2}
        fontSize={{ xs: "1.2rem", sm: "1.4rem" }}
        color={colorTheme.palette.accent.light}
      >
        Software Developer
      </Typography>

      {/* Social Icons */}
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        wrap="wrap"
        sx={{ flexShrink: 0 }}
      >
        {[
          {
            icon: <Instagram />,
            label: "Instagram",
            link: "https://www.instagram.com/shiv_am_034/",
          },
          {
            icon: <GitHub />,
            label: "GitHub",
            link: "https://github.com/Shivamingale3",
          },
          {
            icon: <LinkedIn />,
            label: "LinkedIn",
            link: "https://linkedin.com/in/shivam-ingale",
          },
          {
            icon: <Mail />,
            label: "Mail",
            link: "mailto:shivamingale3@gmail.com",
          },
          {
            icon: <PictureAsPdf />,
            label: "Download Resume",
            link: "Resume.pdf",
          },
        ].map(({ icon, label, link }, index) => (
          <IconButton
            key={index}
            onClick={() => window.open(link, "_blank")}
            sx={{
              position: "relative",
              flexDirection: "column",
              "&:hover .icon-label": { opacity: 1 },
            }}
          >
            {React.cloneElement(icon, {
              sx: { color: "white", fontSize: "2rem" },
            })}
            <Typography
              className="icon-label"
              sx={{
                opacity: 0,
                transition: "opacity 0.3s",
                position: "absolute",
                bottom: "-20px",
                color: "white",
                fontSize: "0.8rem",
                pointerEvents: "none",
              }}
            >
              {label}
            </Typography>
          </IconButton>
        ))}
      </Grid>

      {/* Hire Me Button */}
      <Button
        onClick={() => window.open("mailto:shivamingale3@gmail.com", "_blank")}
        variant="contained"
        sx={{
          mt: 3,
          border: "1px solid white",
          backgroundColor: "#000000",
          color: "white",
          padding: "12px 24px",
          fontSize: "1rem",
          "&:hover": { backgroundColor: "#ffffff", color: "black" },
        }}
      >
        Hire Me!
      </Button>
    </Grid>
  );
};

export default Profile;
