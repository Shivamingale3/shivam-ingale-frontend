import React from "react";
import { Box, Typography, Avatar, Paper, LinearProgress, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";

const skillsList = [
    { name: "MongoDB", icon: "https://img.icons8.com/color/96/mongodb.png", confidence: 85 },
    { name: "ExpressJs", icon: "https://img.icons8.com/ios/50/express-js.png", confidence: 75 },
    { name: "React", icon: "https://img.icons8.com/plasticine/100/react.png", confidence: 90 },
    { name: "NodeJs", icon: "https://img.icons8.com/fluency/96/node-js.png", confidence: 80 },
    { name: "JavaScript", icon: "https://img.icons8.com/color/96/javascript.png", confidence: 95 },
    { name: "TypeScript", icon: "https://img.icons8.com/color/96/typescript.png", confidence: 70 },
    { name: "HTML5", icon: "https://img.icons8.com/color/96/html-5.png", confidence: 95 },
    { name: "CSS3", icon: "https://img.icons8.com/color/96/css3.png", confidence: 85 },
];

// Styled SkillCard
const SkillCard = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "0.1px solid",
    borderColor: theme.palette.accent.hover,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[5],
    transition: "transform 0.3s, box-shadow 0.3s",
    backgroundColor: theme.palette.master.main,
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: theme.shadows[10],
    },
}));


const Skills = () => {
    const colorTheme = useTheme();
    return (
        <Box
            sx={{
                maxWidth: "90%",
                margin: "auto",
                padding: "40px 0",
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    mb: 4,
                }}
            >
                My Skills
            </Typography>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
            >
                {skillsList.map((skill, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                    >
                        <SkillCard>
                            <Avatar
                                variant="square"
                                src={skill.icon}
                                alt={skill.name}
                                sx={{
                                    padding: { xs: '4%', sm: '5%', md: '8%', lg: '10%' },
                                    borderRadius: '25%',
                                    width: 80,
                                    height: 80,
                                    mb: 2,
                                    backgroundColor: colorTheme.palette.accent.light,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    mb: 2,
                                    color: '#ffffff',
                                }}
                            >
                                {skill.name}
                            </Typography>
                            <Box
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <LinearProgress
                                    variant="determinate"
                                    value={skill.confidence}
                                    sx={{
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor: "#e0e0e0",
                                        "& .MuiLinearProgress-bar": {
                                            backgroundColor: colorTheme.palette.accent.main,
                                        },
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    align="center"
                                    sx={{
                                        mt: 1,
                                        fonteight: "bold",
                                        color: colorTheme.palette.accent.main,
                                    }}
                                >
                                    {skill.confidence}%
                                </Typography>
                            </Box>
                        </SkillCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
