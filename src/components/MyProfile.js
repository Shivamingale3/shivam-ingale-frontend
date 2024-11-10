import { useTheme } from '@emotion/react';
import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';

export default function MyProfile() {
    const theme = useTheme();

    return (
        <Grid
            aria-label='myProfile-parent-grid'
            sx={{
                display: 'flex',
                height: '80vh',
                width: '40vh',
                backgroundColor: theme.palette.primary.main,
                border: '0.3px solid',
                borderRadius: '20px',
                borderColor: theme.palette.primary.hover,
            }}

        >
            <Grid
                aria-label='myProfile-typo-grid'
                sx={{
                    display: 'flex',
                    flexWrap: 'nowrap'
                }}
            >

                <Typography
                    fontSize={25}
                    fontFamily={["Faculty Glyphic", "sans-serif"]}
                    letterSpacing={'5px'}
                    margin={[5, 2]}
                >
                    <Box component="span" color={theme.palette.accent.main}>
                        S
                    </Box>
                    <Box component="span" color={theme.palette.accent.light}>
                        hivam
                    </Box>
                </Typography>
            </Grid>

        </Grid >
    );
}
