import React from "react";
import { Box, Typography, Button, Avatar, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Profile = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#1D1C1D",
        color: "white",
        textAlign: "center",
        borderRadius: "8px",
        border:"2px solid red"
      }}
    >
      <Avatar
        alt="Youlakou"
        src="https://via.placeholder.com/150"
        sx={{ width: 100, height: 100, margin: "0 auto" }}
      />
      <Typography variant="h5" sx={{ marginTop: "10px", color: "#ff600a" }}>
        Shivam
      </Typography>
      <Typography variant="body2" sx={{ color: "#aaa" }}>
        Based in India
      </Typography>
      <Typography variant="body1" sx={{ marginY: "10px" }}>
        Junior Software Developer
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
        <Facebook sx={{ color: "white", cursor: "pointer" }} />
        <Twitter sx={{ color: "white", cursor: "pointer" }} />
        <Instagram sx={{ color: "white", cursor: "pointer" }} />
      </Stack>
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
    </Box>
  );
};

export default Profile;
