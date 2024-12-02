import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CustomTextField({ inputName, inputLabel, value, handleChange, bool, error }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <TextField
            fullWidth={bool}
            name={inputName}
            label={inputLabel}
            variant="outlined"
            type={inputName === "password" && !isPasswordVisible ? "password" : "text"}
            sx={{
                "& .MuiOutlinedInput-root": {
                    backgroundColor: "black",
                    color: "white",
                    "& fieldset": {
                        borderColor: "white",
                    },
                    "&:hover fieldset": {
                        borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "white",
                    },
                },
                "& .MuiInputLabel-root": {
                    color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "white",
                },
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease-in-out",
                ":hover": {
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                    transform: "translateY(-5px)",
                },
            }}
            InputProps={{
                style: {
                    color: "white",
                },
                endAdornment:
                    inputName === "password" ? (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={togglePasswordVisibility}
                                edge="end"
                                aria-label="toggle password visibility"
                                style={{ color: "white" }}
                            >
                                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ) : null,
            }}
            value={value}
            onChange={handleChange}
            error={error}
        />
    );
}

export default CustomTextField;
