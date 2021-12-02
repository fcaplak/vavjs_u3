import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';

const Podakovanie = () => {

    const [reklama, setReklama] = useState([]);

    const handleAdIncrement = async() => {
        fetch(`http://localhost:8080/reklama/increment`, { method: 'PUT' });
        setReklama(reklama_prev => ({...reklama_prev, counter : reklama.counter++}));
    }

    useEffect(() => {
        fetch('http://localhost:8080/reklama', { method: 'GET' })
            .then(result => result.json())
            .then(result => setReklama(result))
    }, []);


    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
            <Typography sx={{ pt: 10, pb: 5, fontWeight: 'bold' }} variant="h5" align="center">Ďakujeme Vám za objednávku</Typography>
            { reklama ? <><a target="_blank" rel="noreferrer" href={reklama.link}><img onClick={() => handleAdIncrement()} src={reklama.image} width="500" alt="Obrazok reklamy" /></a><Typography sx={{ pt: 1, fontWeight: 'bold' }} variant="h6" align="center">Počet kliknutí na reklamu: {reklama.counter}</Typography></> : ''}
        </Grid>
    );
}

export default Podakovanie;