import { useTheme } from "@emotion/react";
import { Grid2, Typography } from "@mui/material";
import React from "react";

const Info = () => {
  const colorTheme = useTheme();
  return (
    <Grid2
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        padding: '10%'
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Hi!<br />
        I am <Typography variant="h4" sx={{ fontWeight: "bold" }} color={colorTheme.palette.accent.main}>Shivam, </Typography>
        Software Developer
      </Typography>
      <Typography variant="body1" sx={{ marginY: "20px" }}>
        I am a Full Stack Developer from Nagpur, India. I have deep interest in developing Web Applications and Console Apps.
        I work as Software Developer but I am also used to designing UI/UX.
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        <Grid2 item xs={12} sm={6}>
          <Typography variant="h3" sx={{ color: "#ff600a", fontWeight: "bold" }}>
            1+
          </Typography>
          <Typography variant="body1">Years of Experience</Typography>
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <Typography variant="h3" sx={{ color: "#ff600a", fontWeight: "bold" }}>
            10+
          </Typography>
          <Typography variant="body1">Projects Completed</Typography>
        </Grid2>
      </Grid2>
    </Grid2 >
  );
};

export default Info;
