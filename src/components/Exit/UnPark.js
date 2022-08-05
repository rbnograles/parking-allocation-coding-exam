import React from 'react';
import Typography from '@mui/material/Typography';
import ParkingMap from '../ParkingMap/ParkingMap';

const UnPark = ({ parkingComplex, setSelectedChoices, action }) => {
    return (
        <>
            <Typography sx={{ 
                fontSize: 24
                }} 
            >
                Unpark your vehicle?
            </Typography>
            <p>Select your vehicle slot to unpark it!</p>
            <ParkingMap
                parkingComplex={parkingComplex}
                action={action}
                setSelectedChoices={setSelectedChoices}
            />
        </>
    );
}

export default UnPark;
