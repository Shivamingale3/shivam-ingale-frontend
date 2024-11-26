import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    Paper,
    styled,
    useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
        color: "white",  // Text color inside the input
        backgroundColor: theme.palette.master.main,  // Set background to match form
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        backgroundColor: theme.palette.master.main,  // Ensure background remains consistent when focused
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
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

        console.log("Form Data Submitted:", formData); // Ready for backend
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
                        endIcon={<SendIcon />}
                        sx={{
                            mt: 3,
                            px: 4,
                            fontSize: "1rem",
                            fontWeight: "bold",
                            backgroundColor: (theme) => theme.palette.accent.main,
                            color: "#fff",
                            "&:hover": {
                                backgroundColor: (theme) =>
                                    theme.palette.accent.hover,
                            },
                        }}
                    >
                        Send Message
                    </Button>
                </form>
            </ContactForm>
        </Box>
    );
};

export default ContactMe;
