import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const EntryCard = ({ label, setEntryPoint }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 20, fontWeight: "600" }} gutterBottom>
                    { label }
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "flex-end"}}>
                <Button 
                    size="small" 
                    variant='contained' 
                    onClick={() => {setEntryPoint(label)}}
                >
                    Select
                </Button>
            </CardActions>
        </Card>
    );
}

export default EntryCard;