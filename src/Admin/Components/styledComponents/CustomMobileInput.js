import React, { useState } from "react";
import { Box, TextField, MenuItem, InputAdornment } from "@mui/material";

const countryCodes = [
    { code: "+91", label: "🇮🇳 India" },
    { code: "+1", label: "🇺🇸 USA" },
    { code: "+44", label: "🇬🇧 UK" },
    { code: "+61", label: "🇦🇺 Australia" },
    // Add more countries as needed
];

function CustomMobileInput({ value, handleChange, error }) {
    const [countryCode, setCountryCode] = useState("+91");

    const handleCountryChange = (event) => {
        setCountryCode(event.target.value);
        handleChange({
            target: { name: "mobile", value: event.target.value + value.split(countryCode)[1] },
        });
    };

    const handleMobileChange = (event) => {
        const newMobile = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        if (newMobile.length <= 10) {
            handleChange({
                target: { name: "mobile", value: countryCode + newMobile },
            });
        }
    };

    return (
        <Box display="flex" alignItems="center" sx={{ width: "100%" }}>
            {/* Country Code Dropdown */}
            <TextField
                error={error}
                select
                value={countryCode}
                onChange={handleCountryChange}
                sx={{
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "8px", // Rounded corners
                    marginRight: 1,
                    flex: "0 0 25%",
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "white", borderWidth: "1px" }, // Thinner border
                        "&:hover fieldset": { borderColor: "white" },
                        "&.Mui-focused fieldset": { borderColor: "white" },
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
                }}
            >
                {countryCodes.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                        {country.label} {country.code}
                    </MenuItem>
                ))}
            </TextField>

            {/* Mobile Number Input */}
            <TextField
                value={value.replace(countryCode, "")} // Show only the mobile part
                onChange={handleMobileChange}
                placeholder="Enter Mobile"
                sx={{
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "8px", // Rounded corners
                    flex: "1",
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "white", borderWidth: "1px" }, // Thinner border
                        "&:hover fieldset": { borderColor: "white" },
                        "&.Mui-focused fieldset": { borderColor: "white" },
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
                    startAdornment: (
                        <InputAdornment position="start" sx={{ color: "white" }}>
                            {countryCode}
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

export default CustomMobileInput;
