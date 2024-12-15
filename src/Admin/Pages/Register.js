// import React, { useState } from 'react'
// import { Avatar, Grid2, Typography } from '@mui/material';
// import CustomTextField from '../Components/styledComponents/CustomTextField';
// import CustomButton from '../Components/styledComponents/CustomButton';
// import CustomMobileInput from '../Components/styledComponents/CustomMobileInput';

// export default function Register() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     username: "",
//     mobile: "",
//     password: ""
//   })

//   const [loading, setLoading] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleClickRegister = () => {
//     console.log(formData);
//   }

//   const handleClickReset = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       username: "",
//       mobile: "",
//       password: ""
//     })
//   }

//   return (
//     <Grid2
//       container
//       sx={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "black",
//         flexDirection: "column",
//         padding: { xs: "2%", sm: "3%" },
//       }}
//     >
//       {/* Heading */}
//       <Grid2 >
//         <Typography
//           color="white"
//           fontFamily={["Rowdies", "sans-serif"]}
//           fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
//           fontWeight="bold"
//           textAlign="center"
//           sx={{ marginBottom: { xs: "1rem", sm: "1.5rem" } }}
//         >
//           Register
//         </Typography>
//       </Grid2>

//       {/* Form Container */}
//       <Grid2
//         container
//         sx={{
//           padding: { xs: "4%", sm: "3%", md: "2.5%" },
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           border: "1px solid white",
//           borderRadius: "10px",
//           width: { xs: "90%", sm: "75%", md: "50%", lg: "35%" },
//           backgroundColor: "black",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           transition: "all 0.3s ease-in-out",
//           ":hover": {
//             boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
//             transform: "translateY(-5px)",
//           },
//         }}
//         gap={3}
//       >
//         {/* Logo */}
//         <Grid2
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           <Avatar
//             alt="Shivam"
//             src="https://shivamingalebucket.s3.us-east-1.amazonaws.com/app_root/logo.png"
//             sx={{
//               border: "1px double white",
//               padding: "1%",
//               width: { xs: "27%", sm: "25%", md: "22%", lg: "20%" },
//               height: "auto",
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
//             }}
//           />
//         </Grid2>
//         {/* First Name & Last Name */}
//         <Grid2
//           container
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexWrap: "wrap",
//             width: "100%",
//           }}
//           gap={3}
//         >
//           <CustomTextField
//             inputName="firstName"
//             inputLabel="First Name"
//             value={formData.firstName}
//             handleChange={handleChange}
//             bool
//           />
//           <CustomTextField
//             inputName="lastName"
//             inputLabel="Last Name"
//             value={formData.lastName}
//             handleChange={handleChange}
//             bool
//           />
//         </Grid2>

//         {/* Email & Mobile */}
//         <Grid2
//           container
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexWrap: "wrap",
//             width: "100%",
//           }}
//           gap={2}
//         >
//           <CustomTextField
//             inputName="email"
//             inputLabel="Email"
//             value={formData.email}
//             handleChange={handleChange}
//             bool
//           />
//           <CustomMobileInput
//             handleChange={handleChange}
//             value={formData.mobile}
//           />
//         </Grid2>
//         {/* Username & Password */}
//         <Grid2
//           container
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexWrap: "wrap",
//             width: "100%",
//           }}
//           gap={3}
//         >
//           <CustomTextField
//             inputName="username"
//             inputLabel="Username"
//             value={formData.username}
//             handleChange={handleChange}
//             bool
//           />
//           <CustomTextField
//             inputName="password"
//             inputLabel="Password"
//             value={formData.lastName}
//             handleChange={handleChange}
//             bool
//           />
//         </Grid2>

//         {/* Submit & Reset Buttons */}
//         <Grid2
//           container
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: 2,
//             width: "100%",
//           }}
//         >
//           <CustomButton
//             label="Register"
//             loading={loading}
//             handleClick={handleClickRegister}
//             style={{
//               flex: 1, // Make both buttons equal in size
//               padding: "12px",
//             }}
//           />
//           <CustomButton
//             label="Reset"
//             loading={loading}
//             handleClick={handleClickReset}
//             style={{
//               flex: 1, // Make both buttons equal in size
//               padding: "12px",
//             }}
//           />
//         </Grid2>
//       </Grid2>
//     </Grid2>

//   );

// }
