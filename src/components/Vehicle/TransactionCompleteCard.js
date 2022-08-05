import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Moment from 'react-moment';

export default function BasicCard(props) {
    // deconstruct basic card properties for it to be recycled
    const {
        cardTitle,
        cardContent,
        actionLabel,
        action,
    } = props

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 20, fontWeight: "600" }} gutterBottom>
                    { cardTitle }
                </Typography>
                <CheckCircleIcon color='success' sx={{ height: 60, width: 60, marginBottom: 5, marginTop: 5 }}/>
                <Typography paragraph> 
                    Parking Lot Type: <b>{ cardContent.parkingType === "S" ? "Small" : cardContent.parkingType === "M" ? "Medium" : "Large" }</b>
                </Typography>
                <Typography paragraph> 
                    Vehicle Type: <b>{ cardContent.occupyingType === "S" ? "Small" : cardContent.occupyingType === "M" ? "Medium" : "Large" }</b>
                </Typography>
                <Typography paragraph> 
                    Date Parked:  {" "}
                    <b>
                        <Moment format='MMMM DD, YYYY hh:mm A'>
                            { cardContent.dateParked !== null && cardContent.dateParked.toISOString() }
                        </Moment>
                    </b>
                </Typography>
                <Typography paragraph> 
                    Payables:  {" "}
                    <b>
                        40 Pesos / 3 Hours
                    </b>
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "flex-end"}}>
                <Button 
                    size="small"
                    variant='contained'
                    onClick={() => { action()}}
                >
                    {actionLabel}
                </Button>
            </CardActions>
        </Card>
    );
}
