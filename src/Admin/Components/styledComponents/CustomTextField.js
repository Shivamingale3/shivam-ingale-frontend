import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CustomTextField({ inputName, inputLabel, value, handleChange, fieldType }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <TextField
            fullWidth
            name={inputName}
            label={inputLabel}
            variant="outlined"
            type={inputName === "password" && !isPasswordVisible ? "password" : "text"} // Toggle password type
            sx={{
                // Styling the root TextField
                "& .MuiOutlinedInput-root": {
                    backgroundColor: "black", // Black background
                    color: "white", // White text
                    "& fieldset": {
                        borderColor: "white", // White outline
                    },
                    "&:hover fieldset": {
                        borderColor: "white", // White outline on hover
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "white", // White outline when focused
                    },
                },
                "& .MuiInputLabel-root": {
                    color: "white", // White label text
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "white", // White label text when focused
                },
            }}
            InputProps={{
                style: {
                    color: "white", // Inside text color
                },
                endAdornment:
                    inputName === "password" ? ( // Show the visibility toggle button for password fields
                        <InputAdornment position="end">
                            <IconButton
                                onClick={togglePasswordVisibility}
                                edge="end"
                                aria-label="toggle password visibility"
                                style={{ color: "white" }} // Icon color
                            >
                                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ) : null,
            }}
            value={value}
            onChange={handleChange}
        />
    );
}

export default CustomTextField;
