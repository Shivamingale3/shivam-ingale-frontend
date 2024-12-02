import { Avatar, Button, Grid2, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomButton from '../Components/styledComponents/CustomButton';
import CustomTextField from "../Components/styledComponents/CustomTextField";
import AlertMessageComponent from '../Components/styledComponents/AlertMessageComponent';
import { EOperationStatus } from '../../utils/Enum';
import axiosInstance from '../../utils/axiosInstance';
import { SHIVAM_INGALE_BACKEND_URL } from '../../utils/config';
import VerifyOTP from "../Components/styledComponents/VerifyOTP";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/slice/userDataSlice";

const LogIn = () => {
  const dispatch = useDispatch();

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

  const [otpVerification, setOtpVerification] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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

  const validatePayload = () => {
    if (!formValues.username || !formValues.password) {
      setOperationStatus({
        error: true,
        success: false,
        warning: false,
        message: "Both Username & Password are necessary!",
      });
      return;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!validatePayload) return;
      console.log(SHIVAM_INGALE_BACKEND_URL);
      const result = await axiosInstance.post(`${SHIVAM_INGALE_BACKEND_URL}/auth/login`, { ...formValues });
      console.log(result);

      setOperationStatus({
        error: false,
        success: true,
        warning: false,
        message: JSON.stringify(result.data.data),
      });

      if (result.data.status) {
        dispatch(setUserData(result.data.data));
        localStorage.setItem('jwtToken', result.data.data.jwtToken);
      } else {
        setOperationStatus({
          error: true,
          success: false,
          warning: false,
          message: result.data.message,
        })
        console.error('Authentication failed:', result.data.message);
      }

    } catch (error) {
      console.log(error)
      let errorMessage = "";
      if (error.response) {
        errorMessage = error.response.data?.message ? error.response.data.message : "Something went Wrong";
      }
      setOperationStatus({
        error: true,
        success: false,
        warning: false,
        message: errorMessage,
      })

    }
    setLoading(false);
  };


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
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease-in-out",
          ":hover": {
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            transform: "translateY(-5px)",
          },
        }}
      >
        {/* Logo */}
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Avatar
            alt="Shivam"
            src="https://shivamingalebucket.s3.us-east-1.amazonaws.com/app_root/logo.png"
            sx={{
              border: "1px double white",
              padding: "1%",
              width: { xs: "27%", sm: "25%", md: "22%", lg: "20%" },
              height: "auto",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </Grid2>
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
            bool={true}
          />
          <CustomTextField
            inputLabel={"Password"}
            inputName={"password"}
            value={formValues.password}
            handleChange={handleChange}
            fieldType={"password"}
            bool={false}
          />

          <Button
            onClick={() => setOtpVerification(true)}
          >
            <Typography color="white" >
              Forgot Password?
            </Typography>
          </Button>
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
            loading={loading}
          />
          <CustomButton
            label={"Reset"}
            handleClick={handleReset}
            loading={loading}
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
      {operationStatus.success && (
        <AlertMessageComponent
          message={operationStatus.message}
          status={EOperationStatus.SUCCESS}
          onClose={onClose}
        />
      )}
      {otpVerification && (
        <VerifyOTP />
      )}
    </Grid2>
  );
};

export default LogIn;
