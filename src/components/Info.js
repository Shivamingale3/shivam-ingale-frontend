import { Grid2, Typography } from "@mui/material";
import React from "react";

const Info = () => {
  return (
    <Grid2
      width={700}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Hi From <span style={{ color: "#ff600a" }}>Shivam</span>, Framer
        Jr. Software Developer
      </Typography>
      <Typography variant="body1" sx={{ marginY: "20px" }}>
        I derive immense joy from designing and coding beautiful, simple
        creations. My work is a true passion, characterized by a commitment to
        elegance and user-friendliness.
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
    </Grid2>
  );
};

export default Info;
