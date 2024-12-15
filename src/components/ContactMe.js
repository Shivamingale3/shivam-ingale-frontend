import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  styled,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CustomAlert from "./CustomAlert";
import emailjs from "emailjs-com";

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: theme.spacing(3),
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
  backgroundColor: theme.palette.master.main,
  maxWidth: "600px",
  margin: "auto",
  textAlign: "center",
  border: `2px solid ${theme.palette.accent.hover}`,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
    maxWidth: "90%",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.accent.hover,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.accent.hover,
      boxShadow: `0 0 5px ${theme.palette.accent.main}`,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.accent.main,
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.accent.hover,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.accent.main,
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: theme.palette.accent.hover,
    opacity: 1,
  },
  "& .MuiOutlinedInput-input": {
    color: "white", // Text color inside the input
    backgroundColor: theme.palette.master.main, // Set background to match form
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    backgroundColor: theme.palette.master.main, // Ensure background remains consistent when focused
  },
  marginBottom: theme.spacing(2),
}));

const ContactMe = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [operationStatus, setOperationStatus] = useState({
    error: false,
    success: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const { name, email, message } = formData;

    // Validations
    if (!name.trim()) {
      alert("Name is required!");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }
    if (!message.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    const {
      REACT_APP_EMAILJS_SERVICE_ID,
      REACT_APP_EMAILJS_CONTACT_ME_TEMPLATE_ID,
      REACT_APP_EMAILJS_REPLY_TEMPLATE_ID,
      REACT_APP_EMAILJS_PUBLIC_KEY,
    } = process.env;

    const serviceID = REACT_APP_EMAILJS_SERVICE_ID;
    const thankYouTemplateID = REACT_APP_EMAILJS_REPLY_TEMPLATE_ID;
    const adminTemplateID = REACT_APP_EMAILJS_CONTACT_ME_TEMPLATE_ID;
    const userID = REACT_APP_EMAILJS_PUBLIC_KEY;

    const thankYouParams = {
      from_name: name,
      to: email,
    };

    const adminParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    setOperationStatus({ error: false, success: false, message: "" });

    Promise.all([
      emailjs.send(serviceID, thankYouTemplateID, thankYouParams, userID),
      emailjs.send(serviceID, adminTemplateID, adminParams, userID),
    ])
      .then(() => {
        setOperationStatus({
          error: false,
          success: true,
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setOperationStatus({
          error: true,
          success: false,
          message: "Failed to send message. Please try again later.",
        });
      });
    setLoading(false);
  };

  return (
    <Box
      sx={{
        padding: (theme) => theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: (theme) => theme.palette.accent.main,
          fontSize: { xs: "2rem", sm: "2.5rem" },
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Get in Contact with me!
      </Typography>
      <ContactForm>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            variant="outlined"
            color="primary"
          />
          <StyledTextField
            fullWidth
            required
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            color="primary"
            type="email"
          />
          <StyledTextField
            fullWidth
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            variant="outlined"
            color="primary"
            multiline
            rows={isMobile ? 3 : 5}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={
              loading ? (
                <CircularProgress color="white" size={"25px"} />
              ) : (
                <SendIcon />
              )
            }
            sx={{
              mt: 3,
              px: 4,
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "black",
              border: "1px solid white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </ContactForm>
      {operationStatus.success && (
        <CustomAlert
          message={operationStatus.message}
          status={"success"}
          onClose={() =>
            setOperationStatus({ error: false, success: false, message: "" })
          }
        />
      )}
      {operationStatus.error && (
        <CustomAlert
          message={operationStatus.message}
          status={"error"}
          onClose={() =>
            setOperationStatus({ error: false, success: false, message: "" })
          }
        />
      )}
    </Box>
  );
};

export default ContactMe;
