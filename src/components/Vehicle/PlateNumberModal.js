import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const PlateNumberDialog = ({ handleClose, open, park, action }) => {

    const [plateNumber, setPlateNumber] = useState("");

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Parking Notice!
                </DialogTitle>
                <DialogContent sx={{ maxWidth: 400 }}>
                    <TextField
                        label="Plate Number"
                        variant="standard"
                        color="primary"
                        value={plateNumber}
                        onChange={e => setPlateNumber(e.target.value)}
                    />
                </DialogContent>
                <DialogActions style={{ justifyContent: "flex-end"}}>
                    <Button onClick={() => { park(action, plateNumber) }} autoFocus>
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default PlateNumberDialog;
