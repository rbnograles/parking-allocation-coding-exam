import * as React from 'react';
import Stack from '@mui/material/Stack';
import BasicCard from './MenuCard';
import Typography from '@mui/material/Typography';


const Menu = ({ choicesSeleection, setSelectedChoices }) => {
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
                    choicesSeleection.map((choice, i) => {
                        return (
                            <div key={i}>
                                <BasicCard
                                    action={choice.action}
                                    label={choice.label}
                                    setSelectedChoices={setSelectedChoices}
                                />
                            </div>
                        )
                    })
                }
            </Stack>
        </>
    );
}

export default Menu;