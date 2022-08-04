import * as React from 'react';
import Stack from '@mui/material/Stack';
import EntryCard from './EntryCard';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button"

const EntrySelection = ({ entryPoints, setEntryPoint, setSelectedChoices }) => {
    return (
        <>
            <Typography sx={{ 
                fontSize: 24, 
                marginBottom: 5 
                }} 
            >
                Select and action in order to proceed with the parking allocation
            </Typography>
            <Stack direction="row" spacing={2} className="card-container">
                {
                    entryPoints.map((entry, i) => {
                        return (
                            <div key={i}>
                                <EntryCard
                                    label={entry}
                                    setEntryPoint={setEntryPoint}
                                />
                            </div>
                        )
                    })
                }
            </Stack>
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

export default EntrySelection;