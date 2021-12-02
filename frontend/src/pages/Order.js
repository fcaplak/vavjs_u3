import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Order = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    
    const navigate = useNavigate();

    const handleOrder = async () => {
        var kosik = JSON.parse(localStorage.getItem("produkty_kosik"));

        var counts = {};
        for (let i = 0; i < kosik.length; i++)
            counts[kosik[i]] = (counts[kosik[i]] + 1) || 1;
    
        var items = [];
        for (const [key, value] of Object.entries(counts))
            items.push({ productId: key, quantity: value });
        
        fetch(`http://localhost:8080/objednavky`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ email: email, name: name, street: street, number: number, city: city, postcode: postcode, items })
        })
            .then(response => {
                if (response.status === 200) {
                    navigate('/podakovanie');
                }
            })
    }

    return (
        <>
            <Typography sx={{ pt: 5, fontWeight: 'bold' }} variant="h5" align="center">Objednávka</Typography>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' onChange={e => setEmail(e.target.value)} value={email} label="E-mail" variant="standard" />
                </Grid>
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' onChange={e => setName(e.target.value)} value={name} label="Meno" variant="standard" />
                </Grid>
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' onChange={e => setStreet(e.target.value)} value={street} label="Ulica" variant="standard" /> 
                    <TextField type='text' onChange={e => setNumber(e.target.value)} value={number}label="Číslo" variant="standard" />
                </Grid>
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' onChange={e => setCity(e.target.value)} value={city} label="Mesto" variant="standard" /> 
                    <TextField type='number' onChange={e => setPostcode(e.target.value)} value={postcode} label="PSČ" variant="standard" />
                </Grid>
                
                <Button onClick={handleOrder} variant="outlined">Objednať</Button>
            </Grid>
        </>
    );
}

export default Order;