import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Productrow from '../components/Productrow';
import Button from '@mui/material/Button';
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';

const Admin = () => {

    const [image, setImage] = useState('');
    const [link, setLink] = useState('');
    const [counter, setCounter] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/reklama', { method: 'GET' })
            .then(result => result.json())
            .then(result => { setImage(result.image); setLink(result.link); setCounter(result.counter) } )
    }, []);

    const handleAdChange = async () => {
        setCounter(0);
        fetch(`http://localhost:8080/reklama`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image: image, link: link })
        });
    }

    return (
      <>
            <Typography sx={{ pt: 5, fontWeight: 'bold' }} variant="h5" align="center">Admin rozhranie</Typography>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' sx = {{ width: 700}} onChange={e => setImage(e.target.value)} value={image} label="Obrázok reklamy" variant="standard" />
                </Grid>
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' style={{ width: 700 }} onChange={e => setLink(e.target.value)} value={link} label="Odkaz reklamy" variant="standard" />
                </Grid>
                <Typography sx={{ p: 3, fontWeight: 'bold' }} variant="h6" align="center">Počet kliknutí na reklamu: {counter}</Typography>
                <Button onClick={handleAdChange} variant="outlined">Nastaviť reklamu</Button>
            </Grid>
    </>
    )
  
}

export default Admin;