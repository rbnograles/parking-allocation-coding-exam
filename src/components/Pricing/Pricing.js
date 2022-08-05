import React from 'react';
import { paymentRates } from '../../constants/choices';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Pricing = ({ setSelectedChoices }) => {
    return (
        <>
            <Typography sx={{ 
                fontSize: 24, 
                marginBottom: 5 
                }} 
            >
                XYZ Corp Pricing Rate
            </Typography>   
            <Stack direction="row" spacing={2} className="card-container">
                {
                    paymentRates.map((rate, i) => {
                        return (
                            <div key={i}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 18, fontWeight: "600" }} gutterBottom>
                                            Parking Type: { rate.type }
                                        </Typography>
                                        <AttachMoneyIcon/>
                                        <Typography>
                                            { rate.label }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })
                }
            </Stack>
            <Button 
                variant='contained' 
                style={{ marginTop: 20 }}
                onClick={() => { 
                    setSelectedChoices("");
                }}
            >
                Go Back
            </Button>
        </>
    );
}

export default Pricing;
