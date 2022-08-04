import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import MapIcon from '@mui/icons-material/Map';

const BasicCard = ({ action, label, setSelectedChoices }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 20, fontWeight: "600" }} gutterBottom>
                    { label }
                </Typography>
                {
                    action === "Park" && <DirectionsCarIcon className='card-icon'/>
                }
                {
                    action === "Unpark" && <CarRepairIcon className='card-icon'/>
                }
                {
                    action === "Map" && <MapIcon className='card-icon'/>
                }
            </CardContent>
            <CardActions style={{ justifyContent: "flex-end"}}>
                <Button 
                    size="small" 
                    variant='contained' 
                    onClick={() => { setSelectedChoices(action) }}
                >
                    Continue
                </Button>
            </CardActions>
        </Card>
    );
}

export default BasicCard;