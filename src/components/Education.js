import { useTheme } from "@emotion/react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Button, Divider, Grid2, Paper, Typography } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";

const educationList = [
  {
    degree: "Master of Computer Applications",
    institute: "Dr. D Y Patil Institute of Management & Research, Pune",
    from: moment("11-01-2022", "MM-DD-YYYY").format("MMMM-YYYY"),
    to: moment("06-01-2024", "MM-DD-YYYY").format("MMMM-YYYY"),
    percent: "7.86 CGPA",
    description: `Two-Years (4-Semesters) Master of Computer Applications (MCA) program 
        of the Institute is approved by the All India Council for Technical Education (AICTE), 
        recognized by the Savitribai Phule Pune University and Government of Maharashtra. 
        The curriculum is designed to help students develop strong software competencies, 
        analytical and problem-solving abilities, and the requisite skills to prepare them as 
        successful software professionals. The course structure and contents are regularly updated. 
        The MCA Program offered by the Institute is widely accepted and recognized by IT Industry.`,
  },
  {
    degree: "Bachelor of Computer Applications",
    institute: "Kamla Nehru Mahavidyalaya, Nagpur",
    from: moment("09-01-2019", "MM-DD-YYYY").format("MMMM-YYYY"),
    to: moment("05-01-2022", "MM-DD-YYYY").format("MMMM-YYYY"),
    percent: "76 %",
    description: `It is a three-year undergraduate-level program that primarily focuses on 
        computer applications and software development. It serves as a gateway for students who wish to 
        pursue a career in the IT (Information and Technology) field. Moreover, the IT industry is one of 
        the fastest-growing industries in India, and there is a high demand for skilled IT professionals.`,
  },
  {
    degree: "HSC",
    institute: "Kamla Nehru Mahavidyalaya, Nagpur",
    from: moment("04-01-2018", "MM-DD-YYYY").format("MMMM-YYYY"),
    to: moment("03-01-2019", "MM-DD-YYYY").format("MMMM-YYYY"),
    percent: "56 %",
    description: `10 + 2, Higher Secondary Certificate by the Maharashtra State Board of Secondary and 
        Higher Secondary Education (Abbreviation: MSBSHSE).`,
  },
  {
    degree: "SSC",
    institute: "Maharashtra State Board",
    from: moment("04-01-2016", "MM-DD-YYYY").format("MMMM-YYYY"),
    to: moment("05-01-2017", "MM-DD-YYYY").format("MMMM-YYYY"),
    percent: "84 %",
    description: `10th Secondary School Certificate by the Maharashtra State Board of Secondary and 
        Higher Secondary Education (Abbreviation: MSBSHSE).`,
  },
];

export default function Education() {
  const colorTheme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % educationList.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? educationList.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        maxWidth: "90%",
        margin: "auto",
        padding: { xs: 1.5, sm: 3 },
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 6 },
      }}
    >
      {/* Button and Heading Grid */}
      <Grid2
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginBottom: 2,
          width: "100%",
          position: "relative",
        }}
      >
        <Grid2 item>
          <Button
            startIcon={<ArrowLeft />}
            onClick={handlePrevious}
            sx={{
              backgroundColor: colorTheme.palette.master.main,
              border: "1px solid white",
              color: "white",
              padding: { xs: "4px 8px", sm: "6px 10px" },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              "&:hover": { backgroundColor: "#ffffff", color: "black" },
            }}
          >
            Previous
          </Button>
        </Grid2>
        <Grid2 item xs={12} sm="auto" textAlign="center">
          <Typography
            sx={{
              color: colorTheme.palette.accent.main,
              fontFamily: ["Rowdies", "sans-serif"],
              fontSize: { xs: "1.25rem", sm: "2rem" },
              fontWeight: "bold",
            }}
          >
            Education
          </Typography>
        </Grid2>
        <Grid2 item>
          <Button
            endIcon={<ArrowRight />}
            onClick={handleNext}
            sx={{
              backgroundColor: colorTheme.palette.master.main,
              border: "1px solid white",
              color: "white",
              padding: { xs: "4px 8px", sm: "6px 10px" },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              "&:hover": { backgroundColor: "#ffffff", color: "black" },
            }}
          >
            Next
          </Button>
        </Grid2>
      </Grid2>

      {/* Education Content Grid */}
      <Grid2
        container
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {educationList.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: index === activeIndex ? "block" : "none",
              width: "100%",
              transition: "opacity 0.3s ease",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: { xs: 2, sm: 3 },
                borderRadius: 2,
                border: "0.1px solid #ffffff",
                backgroundColor: colorTheme.palette.master.main,
              }}
            >
              <Grid2
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                  }}
                  color={colorTheme.palette.accent.main}
                >
                  {item.degree}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    marginBottom: { xs: 1, sm: 0 },
                  }}
                  color={colorTheme.palette.accent.light}
                >
                  {item.from} - {item.to}
                </Typography>
              </Grid2>
              <Grid2
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    marginBottom: { xs: 1, sm: 0 },
                  }}
                  color={colorTheme.palette.accent.light}
                >
                  {item.institute}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                  color={colorTheme.palette.accent.light}
                >
                  {item.percent}
                </Typography>
              </Grid2>
              <Divider
                sx={{ marginY: 2, backgroundColor: "#969696", height: 0.2 }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                }}
                color={colorTheme.palette.accent.hover}
              >
                {item.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Grid2>

      {/* Dot Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 0.5, sm: 1 },
          marginTop: 2,
        }}
      >
        {educationList.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: activeIndex === index ? 10 : 6,
              height: activeIndex === index ? 10 : 6,
              borderRadius: "50%",
              backgroundColor:
                activeIndex === index
                  ? colorTheme.palette.accent.main
                  : colorTheme.palette.accent.light,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
}
