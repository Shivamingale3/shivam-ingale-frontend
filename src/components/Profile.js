import { useTheme } from "@emotion/react";
import { GitHub, Instagram, LinkedIn, Mail, PictureAsPdf } from "@mui/icons-material";
import { Avatar, Button, Grid2, IconButton, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  const colorTheme = useTheme();

  return (
    <Grid2
      container
      direction="column"
      sx={{
        height: "auto",
        width: { xs: "100%", sm: "95%", md: "80%", lg: "70%" },
        padding: { xs: "24px", sm: "32px" },
        backgroundColor: "#1D1C1D",
        color: "white",
        textAlign: "center",
        borderRadius: "2.5%",
        border: "1px solid",
        borderColor: colorTheme.palette.accent.hover,
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Name */}
      <Grid2 item sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          fontFamily={['Rowdies', 'sans-serif']}
          letterSpacing={2}
          fontSize={{ xs: "1.8rem", sm: "2.4rem" }}
          color={colorTheme.palette.accent.main}
        >
          S
        </Typography>
        <Typography
          fontFamily={['Rowdies', 'sans-serif']}
          letterSpacing={2}
          fontSize={{ xs: "1.8rem", sm: "2.4rem" }}
          color={colorTheme.palette.accent.light}
        >
          hivam
        </Typography>
      </Grid2>

      {/* Avatar */}
      <Grid2
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
          alt="Shivam"
          src="avatar.jpeg"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "16%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      </Grid2>

      {/* Location */}
      <Typography
        fontFamily={['Rowdies', 'sans-serif']}
        letterSpacing={2}
        fontSize={{ xs: "1.2rem", sm: "1.4rem" }}
        color={colorTheme.palette.accent.light}
      >
        Based in India
      </Typography>

      {/* Role */}
      <Typography
        fontFamily={['Rowdies', 'sans-serif']}
        letterSpacing={2}
        fontSize={{ xs: "1.2rem", sm: "1.4rem" }}
        color={colorTheme.palette.accent.hover}
      >
        Junior Software Developer
      </Typography>

      {/* Social Icons */}
      <Grid2
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        wrap="wrap"
        sx={{
          flexShrink: 0,
        }}
      >
        {[
          { icon: <Instagram />, label: "Instagram" },
          { icon: <GitHub />, label: "GitHub" },
          { icon: <LinkedIn />, label: "LinkedIn" },
          { icon: <Mail />, label: "Mail" },
          { icon: <PictureAsPdf />, label: "Download Resume" },
        ].map(({ icon, label }, index) => (
          <IconButton
            key={index}
            sx={{
              position: "relative",
              flexDirection: "column",
              "&:hover .icon-label": { opacity: 1 },
            }}
          >
            {React.cloneElement(icon, { sx: { color: "white", fontSize: "2rem", } })}
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
      </Grid2>

      {/* Hire Me Button */}
      <Button
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#ff600a",
          color: "white",
          padding: "12px 24px",
          fontSize: "1rem",
          "&:hover": { backgroundColor: "#e05500" },
        }}
      >
        Hire Me!
      </Button>
    </Grid2>

  );
};

export default Profile;
