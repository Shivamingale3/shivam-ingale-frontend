import { useTheme } from "@emotion/react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";

const educationList = [
  {
    company: "Leadows Technologies Pvt. Ltd.",
    position: "Jr. Software Engineer",
    from: moment("06-01-2022", "MM-DD-YYYY").format("MMMM-YYYY"),
    to: moment().format("MMMM-YYYY"),
    address: "Nagpur, Maharashtra, India.",
    description: `Two-Years (4-Semesters) Master of Computer Applications (MCA) program 
        of the Institute is approved by the All India Council for Technical Education (AICTE), 
        recognized by the Savitribai Phule Pune University and Government of Maharashtra. 
        The curriculum is designed to help students develop strong software competencies, 
        analytical and problem-solving abilities, and the requisite skills to prepare them as 
        successful software professionals.`,
  },
];

export default function Experience() {
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
        maxWidth: "95%",
        margin: "auto",
        padding: { xs: 1.5, sm: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      {/* Navigation Buttons & Title */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Button
          startIcon={<ArrowLeft />}
          onClick={handlePrevious}
          sx={{
            backgroundColor: colorTheme.palette.accent.main,
            color: "black",
            fontSize: { xs: "12px", sm: "14px" },
            padding: { xs: "6px 10px", sm: "8px 12px" },
          }}
        >
          Previous
        </Button>
        <Typography
          sx={{
            color: colorTheme.palette.accent.main,
            fontFamily: ["Rowdies", "sans-serif"],
            fontSize: { xs: 20, sm: 32 },
            fontWeight: "bold",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Work Experience
        </Typography>
        <Button
          endIcon={<ArrowRight />}
          onClick={handleNext}
          sx={{
            backgroundColor: colorTheme.palette.accent.main,
            color: "black",
            fontSize: { xs: "12px", sm: "14px" },
            padding: { xs: "6px 10px", sm: "8px 12px" },
          }}
        >
          Next
        </Button>
      </Box>

      {/* Experience Content */}
      {educationList.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: index === activeIndex ? "block" : "none",
            width: "100%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: { xs: 2, sm: 3 },
              borderRadius: 2,
              backgroundColor: colorTheme.palette.master.main,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                mb: 1.5,
              }}
            >
              <Typography
                variant="h6"
                color={colorTheme.palette.accent.main}
                sx={{ mb: { xs: 1, sm: 0 } }}
              >
                {item.company}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic" }}
                color={colorTheme.palette.accent.light}
              >
                {item.from} - {item.to}
              </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Typography
              variant="subtitle1"
              sx={{ mb: 1 }}
              color={colorTheme.palette.accent.light}
            >
              {item.position}
            </Typography>
            <Typography
              variant="body2"
              color={colorTheme.palette.accent.hover}
              sx={{ mb: 2 }}
            >
              {item.description}
            </Typography>
          </Paper>
        </Box>
      ))}

      {/* Dot Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {educationList.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: activeIndex === index ? 12 : 8,
              height: activeIndex === index ? 12 : 8,
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
