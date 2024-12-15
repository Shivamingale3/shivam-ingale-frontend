import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  const colorTheme = useTheme();

  return (
    <Grid
      container
      direction={{ xs: "row", sm: "row", md: "row", lg: "row" }} // Explicit vertical stacking
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{
        padding: { xs: "16px", sm: "24px", md: "48px", lg: "64px" },
        boxSizing: "border-box",
      }}
    >
      {/* Title Section */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12} // Full-width grid items for stacking
        sx={{ textAlign: "center" }}
      >
        <Typography
          fontFamily={["Rowdies", "sans-serif"]}
          fontWeight="bold"
          letterSpacing={2}
          fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3rem" }}
          color={colorTheme.palette.accent.light}
        >
          About
        </Typography>
        <Typography
          fontFamily={["Rowdies", "sans-serif"]}
          fontWeight="bold"
          letterSpacing={2}
          fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3rem" }}
          color={colorTheme.palette.accent.main}
        >
          Me
        </Typography>
      </Grid>

      {/* Short Sub-heading */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12} // Full width on all breakpoints
        sx={{ textAlign: "center" }}
      >
        <Typography
          fontFamily={["Rowdies", "sans-serif"]}
          fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
          color={colorTheme.palette.accent.light}
          fontWeight="bold"
          sx={{
            lineHeight: 1.6,
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
            },
          }}
        >
          I'm someone who finds profound joy in the art of design and coding.
        </Typography>
      </Grid>

      {/* Long Paragraph */}
      <Grid item xs={12} sm={12} md={10} lg={12}>
        <Typography
          fontFamily={["Rowdies", "sans-serif"]}
          fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.3rem", lg: "1.5rem" }}
          fontWeight={400}
          color={colorTheme.palette.accent.hover}
          sx={{
            lineHeight: 1.8,
            textAlign: {
              xs: "left",
              sm: "left",
              md: "left",
              lg: "left",
            },
          }}
        >
          With an unwavering passion for crafting beautiful and simple
          creations, I pour my heart into every project I undertake. My work is
          a reflection of my dedication to merging aesthetics with user-centered
          functionality. With each design and code, I aim to create solutions
          that not only look pleasing but also make life easier for users.
          Welcome to my world of elegant simplicity, where every line of code
          and every pixel hold the essence of my love for what I do.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
