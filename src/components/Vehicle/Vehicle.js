import * as React from 'react';
import Stack from '@mui/material/Stack';
import VehicleCard from './VehicleCard';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button"

const Vehicle = ({ vehicleTypes, setEntryPoint, park }) => {
    return (
        <>
            <Typography sx={{ 
                fontSize: 20, 
                marginBottom: 5 
                }} 
            >
                Select your vehicle type, the system will a lot you to a suitable slot
            </Typography>
            <Stack direction="row" spacing={2} className="card-container">
                {
                    vehicleTypes.map((type, i) => {
                        return (
                            <div key={i}>
                                <VehicleCard
                                    label={type.label}
                                    park={park}
                                    action={type.identifier}
                                />
                            </div>
                        )
                    })
                }
            </Stack>
            <Button 
                variant='contained' 
                style={{ marginTop: 20 }}
                onClick={() => { 
                    setEntryPoint("");
                }}
            >
                Go Back
            </Button>
        </>
    );
}

export default Vehicle;