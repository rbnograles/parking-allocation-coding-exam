import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';

const ExitDialog = ({ handleClose, open, totalPayment, content, totalDuration }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Parking Receipt
                </DialogTitle>
                <DialogContent sx={{ maxWidth: 300 }}>
                    <DialogContentText id="alert-dialog-description">
                        Parking Slot: <b>{content.name}</b>
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Type: <b>{content.parkingType}</b>
                    </DialogContentText>
                    <DialogContentText  sx={{ marginBottom: 1}} id="alert-dialog-description">
                        Duration: <b>{totalDuration} hours</b>
                    </DialogContentText>
                    <Divider/>
                    <DialogContentText sx={{ marginTop: 1}} id="alert-dialog-description">
                        Please pay a total of <b>PHP {totalPayment}.00</b> upon exiting the parking complex.
                    </DialogContentText>
                    <br/>
                    <DialogContentText>Thank you, have a great day!</DialogContentText>
                </DialogContent>
                <DialogActions style={{ justifyContent: "flex-end"}}>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ExitDialog;
