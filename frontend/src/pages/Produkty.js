import Product from "../components/Product";

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
  
const Produkty = () => {
    const [produkty, setProdukty] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/produkty', { method: 'GET' })
            .then(result => result.json())
            .then(result => setProdukty(result))
    }, []);

    var storedKosik = JSON.parse(localStorage.getItem("produkty_kosik"));
    const [kosik, setKosik] = useState(storedKosik ? storedKosik : [] );
    
    localStorage.setItem("produkty_kosik", JSON.stringify(kosik));

    return (
        <>
            <Typography sx={{ pt: 5, fontWeight: 'bold' }} variant="h5" align="center">Zoznam produktov</Typography>
            <Grid sx={{ flexGrow: 1, pt: 10}} container>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                {
                    produkty.length > 0 ? (         
                                produkty.map((produkt) => <Product produkt={produkt} kosik={kosik} setKosik={setKosik} key={produkt.id} />)
                            ) : 'Loading...'
                }
            </Grid>
            </Grid>
            </Grid>
        </>
    );
}
  
export default Produkty;