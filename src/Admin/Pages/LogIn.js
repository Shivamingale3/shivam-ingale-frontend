import { Grid2, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomButton from '../Components/styledComponents/CustomButton';
import CustomTextField from "../Components/styledComponents/CustomTextField";
import AlertMessageComponent from '../Components/styledComponents/AlertMessageComponent';
import { EOperationStatus } from '../../utils/Enum';

const LogIn = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const [operationStatus, setOperationStatus] = useState({
    error: false,
    success: false,
    warning: false,
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formValues.username || !formValues.password) {
      setOperationStatus({
        error: true,
        success: false,
        warning: false,
        message: "Both Username & Password are necessary!",
      });
      return;
    }
    console.log(formValues);
  };

  const handleReset = () => {
    setFormValues({
      username: "",
      password: "",
    });
  };

  const onClose = () => {
    setOperationStatus({
      error: false,
      success: false,
      warning: false,
      message: "",
    });
  }

  return (
    <Grid2
      container
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "5%",
      }}
    >
      {/* Title */}
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Typography
          fontFamily={["Rowdies", "sans-serif"]}
          fontSize={{ xs: "2.5rem", sm: "2.8rem", md: "3.0rem" }}
          fontWeight="bold"
          color="white"
          textAlign="center"
        >
          LOG IN
        </Typography>
      </Grid2>

      {/* Form Container */}
      <Grid2
        container
        direction="column"
        sx={{
          border: "1px solid snow",
          borderRadius: "20px",
          width: { xs: "90%", sm: "70%", md: "50%", lg: "35%" },
          padding: { xs: "30px", sm: "40px", md: "50px" },
          backgroundColor: "black",
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Input Fields */}
        <Grid2
          container
          direction="column"
          sx={{
            gap: "20px",
            marginTop: "5%",
          }}
        >
          <CustomTextField
            inputLabel={"Username / Email / Mobile"}
            inputName={"username"}
            value={formValues.username}
            handleChange={handleChange}
            fieldType={"text"}
          />
          <CustomTextField
            inputLabel={"Password"}
            inputName={"password"}
            value={formValues.password}
            handleChange={handleChange}
            fieldType={"password"} // Use "password" to hide input
          />
        </Grid2>

        {/* Buttons */}
        <Grid2
          container
          justifyContent="center"
          sx={{
            marginTop: "30px",
            gap: "10px",
          }}
        >
          <CustomButton
            label={"Log In"}
            handleClick={handleSubmit}
          />
          <CustomButton
            label={"Reset"}
            handleClick={handleReset}
          />
        </Grid2>
      </Grid2>
      {operationStatus.error && (
        <AlertMessageComponent
          message={operationStatus.message}
          status={EOperationStatus.ERROR}
          onClose={onClose}
        />
      )}
    </Grid2>
  );
};

export default LogIn;
