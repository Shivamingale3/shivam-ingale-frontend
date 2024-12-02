import { Grid2 } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

export default function VerifyOTP({ onClose, selectedValue, open }) {
    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Verify LogIn via OTP</DialogTitle>
            <Grid2>

            </Grid2>
        </Dialog>
    );
}