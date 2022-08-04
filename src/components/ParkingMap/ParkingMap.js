import React from 'react';
import Button from "@mui/material/Button"

const ParkingMap = ({ parkingComplex, setSelectedChoices }) => {
    return (
        <>
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
                                                <div className='parking-slot-container' key={i}>
                                                    <p>{innerSlot.name} - <b>{innerSlot.occupied ? "Occupied" : "Vacant"}</b></p>
                                                    <p>For: {" "} 
                                                        {
                                                            innerSlot.parkingType === "SP"  
                                                            ? "Small" 
                                                            : innerSlot.parkingType === "MP" 
                                                            ? "Medium" 
                                                            : "Large" 
                                                        } 
                                                        {" "} Vehicles Only
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
