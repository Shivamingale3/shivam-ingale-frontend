import { useTheme } from "@emotion/react";
import { GitHub, Instagram, LinkedIn, Mail, PictureAsPdf } from "@mui/icons-material";
import { Avatar, Button, Grid2, IconButton, Typography } from "@mui/material";
import React from "react";


const Profile = () => {
  const colorTheme = useTheme();

  return (
    <Grid2
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '80%',
        width: '80%',
        padding: "20px",
        backgroundColor: "#1D1C1D",
        color: "white",
        textAlign: "center",
        borderRadius: "2.5%",
        borderColor: [colorTheme.palette.accent.hover],
        border: '1px solid',
      }}
      gap={4}
    >
      <Grid2
        sx={{
          display: 'flex',
          textAlign: 'start',
          flexWrap: 'nowrap'
        }}
      >
        <Typography
          fontFamily={["Crete Round", 'serif']}
          letterSpacing={2}
          fontSize={35}
          color={colorTheme.palette.accent.main}
        >
          S
        </Typography>
        <Typography
          fontFamily={["Crete Round", 'serif']}
          letterSpacing={2}
          fontSize={35}
          color={colorTheme.palette.accent.light}
        >
          hivam
        </Typography>
      </Grid2>
      <Grid2 sx={{

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Avatar
          variant="square"
          alt="Shivam"
          src="avatar.jpeg"
          sx={{
            height: '100%',
            width: '75%',
            borderRadius: "16%"
          }} />
      </Grid2>
      <Typography
        fontFamily={["Crete Round", 'serif']}
        letterSpacing={2}
        fontSize={20}
        color={colorTheme.palette.accent.light}
      >
        Based in India
      </Typography>
      <Typography
        fontFamily={["Crete Round", 'serif']}
        letterSpacing={2}
        fontSize={20}
        color={colorTheme.palette.accent.hover}
      >
        Junior Software Developer
      </Typography>
      {/* <Grid2 container direction="row" justifyContent="center" spacing={2}>
        <IconButton>
          <Instagram sx={{ color: "white", cursor: "pointer" }} />
          <Typography>Instagram</Typography>
        </IconButton>
        <IconButton>
          <GitHub sx={{ color: "white", cursor: "pointer" }} />
          <Typography>GitHub</Typography>
        </IconButton>
        <IconButton>
          <LinkedIn sx={{ color: "white", cursor: "pointer" }} />
          <Typography>LinkedIn</Typography>
        </IconButton>
        <IconButton>
          <Mail sx={{ color: "white", cursor: "pointer" }} />
          <Typography>Mail</Typography>
        </IconButton>
        <IconButton>
          <PictureAsPdf sx={{ color: "white", cursor: "pointer" }} />
          <Typography>Download Resume</Typography>
        </IconButton>
      </Grid2> */}
      <Grid2 container direction="row" justifyContent="center" spacing={2}>
        {/* Instagram Icon */}
        <IconButton
          sx={{
            position: "relative",
            flexDirection: "column",
            "&:hover .icon-label": {
              opacity: 1, // Show text on hover
            },
          }}
        >
          <Instagram sx={{ color: "white", cursor: "pointer" }} />
          <Typography
            className="icon-label"
            sx={{
              opacity: 0,
              transition: "opacity 0.3s",
              position: "absolute",
              bottom: "-20px", // Adjust as needed
              color: "white",
              pointerEvents: "none",
            }}
          >
            Instagram
          </Typography>
        </IconButton>

        {/* GitHub Icon */}
        <IconButton
          sx={{
            position: "relative",
            flexDirection: "column",
            "&:hover .icon-label": {
              opacity: 1,
            },
          }}
        >
          <GitHub sx={{ color: "white", cursor: "pointer" }} />
          <Typography
            className="icon-label"
            sx={{
              opacity: 0,
              transition: "opacity 0.3s",
              position: "absolute",
              bottom: "-20px",
              color: "white",
              pointerEvents: "none",
            }}
          >
            GitHub
          </Typography>
        </IconButton>

        {/* LinkedIn Icon */}
        <IconButton
          sx={{
            position: "relative",
            flexDirection: "column",
            "&:hover .icon-label": {
              opacity: 1,
            },
          }}
        >
          <LinkedIn sx={{ color: "white", cursor: "pointer" }} />
          <Typography
            className="icon-label"
            sx={{
              opacity: 0,
              transition: "opacity 0.3s",
              position: "absolute",
              bottom: "-20px",
              color: "white",
              pointerEvents: "none",
            }}
          >
            LinkedIn
          </Typography>
        </IconButton>

        {/* Mail Icon */}
        <IconButton
          sx={{
            position: "relative",
            flexDirection: "column",
            "&:hover .icon-label": {
              opacity: 1,
            },
          }}
        >
          <Mail sx={{ color: "white", cursor: "pointer" }} />
          <Typography
            className="icon-label"
            sx={{
              opacity: 0,
              transition: "opacity 0.3s",
              position: "absolute",
              bottom: "-20px",
              color: "white",
              pointerEvents: "none",
            }}
          >
            Mail
          </Typography>
        </IconButton>

        {/* Download Resume Icon */}
        <IconButton
          className="icon-image"
          sx={{
            position: "relative",
            flexDirection: "column",
            "&:hover .icon-label ": {
              opacity: 1,
            },
          }}
        >
          <PictureAsPdf sx={{ color: "white", cursor: "pointer" }} />
          <Typography
            className="icon-label"
            sx={{
              opacity: 0,
              transition: "opacity 0.3s",
              position: "absolute",
              bottom: "-50px",
              color: "white",
              pointerEvents: "none",
            }}
          >
            Download Resume
          </Typography>
        </IconButton>
      </Grid2>
      <Button
        variant="contained"
        sx={{
          marginTop: "20px",
          backgroundColor: "#ff600a",
          color: "white",
          "&:hover": { backgroundColor: "#e05500" },
        }}
      >
        Hire Me!
      </Button>
    </Grid2>
  );
};

export default Profile;
