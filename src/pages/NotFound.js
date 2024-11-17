import { Grid2, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const NotFound = () => {
    const [location, setLocation] = useState(window.location.pathname);

    useEffect(() => {
        setLocation(window.location.pathname)
    }, []);

    return (
        <Grid2
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                flexDirection: 'column'
            }}
        >

            <Typography
                fontFamily={["Bebas Neue", "sans-serif"]}
                fontSize={500}
                fontWeight={900}
                color='white'
            >
                404
            </Typography>
            <hr
                style={{
                    color: 'white',
                    width: '50vw',
                }}

            />
            <Typography
                fontFamily={["Bebas Neue", "sans-serif"]}
                fontSize={100}
                fontWeight={400}
                color='white'
            >
                Not Found " {location} "
            </Typography>

        </Grid2>
    )
}

export default NotFound