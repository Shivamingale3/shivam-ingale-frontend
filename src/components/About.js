import { useTheme } from '@emotion/react';
import { Grid2, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  const colorTheme = useTheme();

  return (
    <Grid2
      container
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        paddingTop: '25%',
        boxSizing: 'border-box',
        overflow: 'auto', // Scroll if content overflows
        color: 'white',
      }}
      gap={5}
    >
      {/* Title Section */}
      <Grid2
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography
          fontFamily={['Rowdies', 'sans-serif']}
          fontWeight={'bold'}
          letterSpacing={2}
          fontSize={40}
          color={colorTheme.palette.accent.light}
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          About
        </Typography>
        <Typography
          fontFamily={['Rowdies', 'sans-serif']}
          fontWeight={'bold'}
          letterSpacing={2}
          fontSize={40}
          color={colorTheme.palette.accent.main}
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          Me
        </Typography>
      </Grid2>

      {/* Short Paragraph */}
      <Grid2 sx={{
        marginTop: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography
          fontFamily={['Rowdies', 'sans-serif']}
          fontSize={40}
          color={colorTheme.palette.accent.light}
          fontWeight={'bold'}
          sx={{
            wordBreak: 'break-word',
            lineHeight: 1.6,
            textAlign: 'justify',
          }}
        >
          I'm someone who finds profound joy in the art of design and coding.
        </Typography>
      </Grid2>

      {/* Long Paragraph */}
      <Grid2 sx={{ marginTop: 2 }}>
        <Typography
          fontFamily={['Rowdies', 'sans-serif']}
          letterSpacing={1}
          fontSize={25}
          fontWeight={400}
          color={colorTheme.palette.accent.hover}
          sx={{
            wordBreak: 'break-word',
            lineHeight: 1.8,
            textAlign: 'justify',
          }}
        >
          With an unwavering passion for crafting beautiful and simple creations, I
          pour my heart into every project I undertake. My work is a reflection of my
          dedication to merging aesthetics with user-centered functionality. With
          each design and code, I aim to create solutions that not only look pleasing
          but also make life easier for users. Welcome to my world of elegant
          simplicity, where every line of code and every pixel hold the essence of my
          love for what I do.
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default About;