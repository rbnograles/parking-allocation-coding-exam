import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// components
import PlateNumberDialog from './PlateNumberModal';

const VehicleCard = ({ action, label, park }) => {
    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20, fontWeight: "600" }} gutterBottom>
                        { label }
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "flex-end"}}>
                    <Button 
                        size="small" 
                        variant='contained' 
                        onClick={() => { setOpen(true) }}
                    >
                        Select
                    </Button>
                </CardActions>
            </Card>
            <PlateNumberDialog
                handleClose={handleClose}
                open={open}
                park={park}
                action={action}
            />
        </>
    );
}

export default VehicleCard;