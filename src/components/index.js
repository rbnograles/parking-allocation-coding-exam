import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
// constacts
import { defaultActions, defaultVehicleTypes, entryPointsChoices } from "../constants/choices";
import { ParkingSlots, parkingHistoryList } from '../constants/parkingslots';
// components
import Menu from './Menu/Menu';
import EntrySelection from './Entry/EntrySelection';
import UnPark from './Exit/UnPark';
import Vehicle from './Vehicle/Vehicle';
import ParkingMap from './ParkingMap/ParkingMap';
import Pricing from './Pricing/Pricing';
import ExitDialog from './Exit/UnparkingModal';

// reusable components
import BasicCard from './Vehicle/TransactionCompleteCard';

const Parking = () => {
    
    const [choicesSelection, setChoicesSelection] = useState([]);
    const [vehicleTypes, setvehicleTypes] = useState([]);
    const [entryPoints, setEntryPoints] = useState([]);
    const [parkingComplex, setParkingComplex] = useState([]);
    const [parkingHistory, setParkingHistory] = useState([]);

    const [selectedChoice, setSelectedChoices] = useState("")
    const [selectedEntryPoint, setSelectedEntryPoint] = useState("");
    const [selectedSlot, setSelectedSlot] = useState({});
    const [parkingDetails, setShowParkingDetails] = useState({});
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalDuration, setTotalDuration] = useState(0)
    const [open, setOpen] = useState(false);

    const setEntryPoint = (entryPoint) => {
        setSelectedEntryPoint(entryPoint)
    }   

    const clearTransactionStates = () => {
        setSelectedChoices("")
        setSelectedEntryPoint("")
        setSelectedSlot({})
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedChoices("");
        setSelectedEntryPoint("");
        setTotalDuration(0);
        setTotalPayment(0);
        setSelectedSlot({});
        setShowParkingDetails({});
    };

    const park = (vehicleType, plateNumber) => {        
        // get the parking entry point 
        const entryData = parkingComplex.find((entryPoint) => {
            return entryPoint.name === selectedEntryPoint;
        });

        let found = false;
        let allocatedSlot;

        const newFitSlots = entryData.slots.map(obj => {
            if(!found) {
                if(!obj.occupied && obj.vehicleSizedLimit.includes(vehicleType)) {
                    found = true;
                    allocatedSlot = {
                        ...obj, 
                        occupied: true,
                        dateParked: new Date(),
                        occupyingType: vehicleType, 
                        currentOccupyingCar: plateNumber
                    }
                    // return the selected allocated slot
                    return allocatedSlot;
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

        // state data to state
        setParkingHistory([...parkingHistory, { plateNumber: plateNumber, date: new Date() }])
        setSelectedSlot(allocatedSlot)
        setParkingComplex(parkingComplex);
    }

    const unPark = (parkingSlotName, selectedEntryPoint, plateNumber) => {
        setOpen(true);
         // get the parking entry point 
        const entryData = parkingComplex.find((entryPoint) => {
            return entryPoint.name === selectedEntryPoint;
        });

        let allocatedSlot;

        const newFitSlots = entryData.slots.map(obj => {
            
            if(obj.name === parkingSlotName) {
                
                const price = calculate(obj.dateParked, obj.parkingType);
                setTotalPayment(price);               
                
                allocatedSlot = {
                    ...obj, 
                    occupied: false,
                    dateParked: null,
                    occupyingType: "",
                    currentOccupyingCar: ""
                }
                // return the selected allocated slot
                return allocatedSlot;
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

        // state data to state
        setParkingHistory([...parkingHistory, { plateNumber: plateNumber, date: new Date() }])
        setShowParkingDetails(allocatedSlot);
        setParkingComplex(parkingComplex);
    }

    const calculate = (parkingTime, parkingType) => {
        // payables
        let totalPayables = 0;
        // get time difference from the time parked againts the current time of unparking
        let timeDiff = (new Date().getTime() - parkingTime.getTime()) / 1000;
        // convert to hours
        timeDiff /= (60 * 60);
        // if time difference is in the seconds set difference to 1 hours
        //  payments wont change as long as parking is within 3 hours
        if(timeDiff < 0) {
            timeDiff = 1;
        } else {
            // get the absolute and rounded difference
            // reference for calculation
            timeDiff = Math.abs(Math.round(timeDiff));
        }
        // set total duration for ui display
        setTotalDuration(timeDiff);

        if(timeDiff > 3 && timeDiff < 24) {
            let exceessTime = timeDiff - 3;
            // get total payables per excess time based on the parking size
            if(parkingType === "SP") {
                totalPayables = 20 * exceessTime;
            } else if( parkingType === "MP") {
                totalPayables = 60 * exceessTime;
            } else {
                totalPayables = 100 * exceessTime;
            }
        }

        // check if time diff exceeds the 24 hour limit
        if(timeDiff > 24) {
            let numberOfDays = timeDiff / 24;
            numberOfDays = Math.abs(Math.round(numberOfDays));
            let excessHours = timeDiff - 24 * numberOfDays;
            

            if(parkingType === "SP") {
                totalPayables = (5000 * numberOfDays) + (20 * excessHours);
            } else if( parkingType === "MP") {
                totalPayables = (5000 * numberOfDays) + (60 * excessHours);
            } else {
                totalPayables = (5000 * numberOfDays) + (100 * excessHours);
            }

        }

        return totalPayables + 40;
    }

    useEffect(() => {
        // set all constants
        setChoicesSelection(defaultActions);
        setvehicleTypes(defaultVehicleTypes);
        setParkingComplex(ParkingSlots);
        setEntryPoints(entryPointsChoices);
        setParkingHistory(parkingHistoryList);

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
                selectedEntryPoint !== "" && 
                selectedChoice === "Park" &&
                Object.keys(selectedSlot).length === 0 && 
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
                Object.keys(selectedSlot).length > 0 && 
                <div>
                    <Typography sx={{ fontSize: 20, fontWeight: "700", marginBottom: 5 }}>Transaction Completed, you may proceed now.</Typography>
                    <BasicCard
                        cardTitle={`Parking slot allocated at ${selectedSlot.name}`}
                        cardContent={selectedSlot}
                        actionLabel="Complete"
                        action={clearTransactionStates}
                    />
                </div>
            }
            {
                selectedChoice === "Unpark" &&
                <UnPark
                    action={unPark}
                    parkingComplex={parkingComplex}
                    setSelectedChoices={setSelectedChoices}
                />
            }
            {
                selectedChoice === "Map" && 
                <ParkingMap
                    action={() => {}}
                    parkingComplex={parkingComplex}
                    setSelectedChoices={setSelectedChoices}
                />
            }
            {
                selectedChoice === "Price" &&
                <Pricing
                    setSelectedChoices={setSelectedChoices}
                />
            }
            <ExitDialog
                open={open}
                totalDuration={totalDuration}
                totalPayment={totalPayment}
                content={parkingDetails}
                handleClose={handleClose}
            />
        </div>
    );
}

export default Parking;
