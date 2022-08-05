import React from 'react';
import Button from "@mui/material/Button"
import Typography from '@mui/material/Typography';

const ParkingMap = ({ parkingComplex, setSelectedChoices, action }) => {
    return (
        <>
            <Typography sx={{ fontSize: 20, fontWeight: "700", marginBottom: 5 }}>XYZ Corporation Parking Complex</Typography>
            <div style={{ display:"flex", flexDirection: "row"}}>
                {
                    parkingComplex.map((slot , i) => {
                        return(
                            <div key={i} style={{ minWidth: 200, marginRight: 10, color: "black" }}>
                                <p style={{ color: "White" }}>Parking: {slot.name}</p>
                                <div>
                                    {
                                        slot.slots.map((innerSlot, i) => {
                                            return(
                                                <div 
                                                    className='parking-slot-container' 
                                                    key={i}
                                                    onClick={() => { action(innerSlot.name, slot.name, innerSlot.currentOccupyingCar)}}
                                                >
                                                    <p style={{ color: !innerSlot.occupied ? "#4caf50" : "#ff1744" }}>
                                                        <b>{innerSlot.name} - {innerSlot.occupied ? "Occupied" : "Vacant"}</b>
                                                    </p>
                                                    <p>
                                                        <b>
                                                            {
                                                                innerSlot.parkingType === "SP"  
                                                                ? "Small" 
                                                                : innerSlot.parkingType === "MP" 
                                                                ? "Medium" 
                                                                : "Large" 
                                                            } 
                                                            {" "} Vehicles Only
                                                        </b>
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Button 
                variant='contained' 
                style={{ marginTop: 20 }}
                onClick={() => { setSelectedChoices("")}}
            >
                Go Back
            </Button>
        </>
    );
}

export default ParkingMap;
