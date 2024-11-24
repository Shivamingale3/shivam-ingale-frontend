import { useTheme } from '@emotion/react';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Box, Button, Divider, Grid2, Paper, Typography } from '@mui/material';
import moment from 'moment/moment';
import React, { useState } from 'react';

const educationList = [
    {
        degree: 'Master of Computer Applications',
        institute: 'Dr. D Y Patil Institute of Management & Research, Pune',
        from: moment('11-01-2022').format('MMMM-YYYY'),
        to: moment('06-01-2024').format('MMMM-YYYY'),
        percent: '7.86 CGPA',
        description: `Two-Years (4-Semesters) Master of Computer Applications (MCA) program 
        of the Institute is approved by the All India Council for Technical Education (AICTE), 
        recognized by the Savitribai Phule Pune University and Government of Maharashtra. 
        The curriculum is designed to help students develop strong software competencies, 
        analytical and problem-solving abilities, and the requisite skills to prepare them as 
        successful software professionals. The course structure and contents are regularly updated. 
        The MCA Program offered by the Institute is widely accepted and recognized by IT Industry.`,
    },
    {
        degree: 'Bachelor of Computer Applications',
        institute: 'Kamla Nehru Mahavidyalaya, Nagpur',
        from: moment('09-01-2019').format('MMMM-YYYY'),
        to: moment('05-01-2022').format('MMMM-YYYY'),
        percent: '76 %',
        description: `It is a three-year undergraduate-level program that primarily focuses on 
        computer applications and software development. It serves as a gateway for students who wish to 
        pursue a career in the IT (Information and Technology) field. Moreover, the IT industry is one of 
        the fastest-growing industries in India, and there is a high demand for skilled IT professionals.`,
    },
    {
        degree: 'HSC',
        institute: 'Kamla Nehru Mahavidyalaya, Nagpur',
        from: moment('04-01-2018').format('MMMM-YYYY'),
        to: moment('03-01-2019').format('MMMM-YYYY'),
        percent: '56 %',
        description: `10 + 2, Higher Secondary Certificate by the Maharashtra State Board of Secondary and 
        Higher Secondary Education (Abbreviation: MSBSHSE).`,
    },
    {
        degree: 'SSC',
        institute: 'Maharashtra State Board',
        from: moment('04-01-2016').format('MMMM-YYYY'),
        to: moment('05-01-2017').format('MMMM-YYYY'),
        percent: '84 %',
        description: `10th Secondary School Certificate by the Maharashtra State Board of Secondary and 
        Higher Secondary Education (Abbreviation: MSBSHSE).`,
    },
];

export default function EducationRoadmap() {
    const colorTheme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % educationList.length);
    };

    const handlePrevious = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? educationList.length - 1 : prevIndex - 1
        );
    };

    return (
        <Box
            sx={{
                maxWidth: '90%',
                margin: 'auto',
                padding: { xs: 2, sm: 4 },
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'space-',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            gap={10}
        >
            {/* Button and Heading Grid */}
            <Grid2
                container
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    marginBottom: 2,
                    width: '100%',
                    position: 'relative', // Keeps buttons in place
                }}
            >
                <Grid2 item>
                    <Button
                        startIcon={<ArrowLeft />}
                        onClick={handlePrevious}
                        sx={{
                            backgroundColor: colorTheme.palette.accent.main,
                            border: ['1px', 'solid', colorTheme.palette.accent.hover],
                            color: 'black',
                            cursor: 'pointer',
                            padding: { xs: '6px 10px', sm: '8px 12px' },
                            height: 'auto',
                        }}
                    >
                        Previous
                    </Button>
                </Grid2>
                <Grid2 item xs={12} sm="auto" textAlign="center">
                    <Typography
                        sx={{
                            color: colorTheme.palette.accent.main,
                            fontFamily: ['Rowdies', 'sans-serif'],
                            fontSize: { xs: 24, sm: 35 },
                            fontWeight: 'bold',
                        }}
                    >
                        Education
                    </Typography>
                </Grid2>
                <Grid2 item>
                    <Button
                        endIcon={<ArrowRight />}
                        onClick={handleNext}
                        sx={{
                            backgroundColor: colorTheme.palette.accent.main,
                            border: ['1px', 'solid', colorTheme.palette.accent.hover],
                            color: 'black',
                            cursor: 'pointer',
                            padding: { xs: '6px 10px', sm: '8px 12px' },
                            height: 'auto',
                        }}
                    >
                        Next
                    </Button>
                </Grid2>
            </Grid2>

            {/* Education Content Grid */}
            <Grid2
                container
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                {educationList.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: index === activeIndex ? 'block' : 'none',
                            transition: 'opacity 0.3s ease',
                            width: '100%',
                        }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                padding: { xs: 2, sm: 3 },
                                borderRadius: 2,
                                border: '0.1px solid #000000',
                                backgroundColor: colorTheme.palette.master.main,
                            }}
                        >
                            <Grid2
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                }}
                            >
                                <Typography variant="h6" color={colorTheme.palette.accent.main}>
                                    {item.degree}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontStyle: 'italic', mb: 2 }}
                                    color={colorTheme.palette.accent.light}
                                >
                                    {item.from} - {item.to}
                                </Typography>
                            </Grid2>
                            <Grid2
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ mb: 1 }} color={colorTheme.palette.accent.light}>
                                    {item.institute}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ mb: 1 }} color={colorTheme.palette.accent.light}>
                                    {item.percent}
                                </Typography>
                            </Grid2>
                            <Divider sx={{ mb: 2, backgroundColor: '#969696', height: 0.2 }} />
                            <Typography variant="body2" color={colorTheme.palette.accent.hover}>
                                {item.description}
                            </Typography>
                        </Paper>
                    </Box>
                ))}
            </Grid2>
        </Box>
    );
}
