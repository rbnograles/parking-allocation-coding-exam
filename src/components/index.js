import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
// constacts
import { defaultActions, defaultVehicleTypes } from "../constants/choices";
import { ParkingSlots } from '../constants/parkingslots';
// components
import Menu from './Menu/Menu';
import EntrySelection from './Entry/EntrySelection';
import Vehicle from './Vehicle/Vehicle';
import ParkingMap from './ParkingMap/ParkingMap';

const Parking = () => {
    
    const [choicesSelection, setChoicesSelection] = useState([]);
    const [vehicleTypes, setvehicleTypes] = useState([]);
    const [entryPoints, setEntryPoints] = useState(["Gate A", "Gate B", "Gate C"]);
    const [parkingComplex, setParkingComplex] = useState([]);

    const [selectedChoice, setSelectedChoices] = useState("")
    const [selectedEntryPoint, setSelectedEntryPoint] = useState("");
    
    const setEntryPoint = (entryPoint) => {
        setSelectedEntryPoint(entryPoint)
    }   

    const park = (vehicleType) => {
        // get the parking entry point 
        const entryData = parkingComplex.find((entryPoint) => {
            return entryPoint.name === selectedEntryPoint;
        });

        let found = false;

        const newFitSlots = entryData.slots.map(obj => {
            if(!found) {
                if(!obj.occupied && obj.vehicleSizedLimit.includes(vehicleType)) {
                    found = true;
                    return { 
                        ...obj, 
                        occupied: true,
                        dateParked: new Date(),
                        occupyingType: vehicleType 
                    }
                }
            }
            return obj;
        })

        // build the new object containing changes
        const newParkingComplex = {
            name: selectedEntryPoint,
            slots: newFitSlots
        }

        const indexOfEntryPoint = parkingComplex.findIndex((data) => data.name === selectedEntryPoint);
        // update the entry points slots with the latest parking histroy
        parkingComplex[indexOfEntryPoint] = newParkingComplex;

        setParkingComplex(parkingComplex);

        console.log(parkingComplex)
    }


    useEffect(() => {
        setChoicesSelection(defaultActions)
        setvehicleTypes(defaultVehicleTypes);
        setParkingComplex(ParkingSlots)
    }, [vehicleTypes]);

    return (
        <div>
            {
                selectedChoice === "" && 
                <Menu
                    choicesSeleection={choicesSelection}
                    setSelectedChoices={setSelectedChoices}
                />
            }
            {
                selectedChoice === "Park" && selectedEntryPoint === "" && 
                <div>
                    <EntrySelection
                        entryPoints={entryPoints}
                        setEntryPoint={setEntryPoint}
                        setSelectedChoices={setSelectedChoices}
                    />
                </div>
            }
            {
                selectedEntryPoint !== "" && selectedChoice === "Park" && 
                <div>
                    <Typography sx={{ fontSize: 20 }}>
                        Entry Point: {selectedEntryPoint}
                    </Typography>
                    <Vehicle
                        vehicleTypes={vehicleTypes}
                        setEntryPoint={setEntryPoint}
                        park={park}
                    />
                </div>
            }
            {
                selectedChoice === "Map" && 
                <ParkingMap
                    parkingComplex={parkingComplex}
                    setSelectedChoices={setSelectedChoices}
                />
            }
        </div>
    );
}

export default Parking;
