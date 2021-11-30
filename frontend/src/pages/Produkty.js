import Header from "../components/Header";
import Product from "../components/Product";

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
  
const Produkty = () => {
    const [produkty, setProdukty] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/produkty', { method: 'GET' })
            .then(result => result.json())
            .then(result => setProdukty(result))
    }, []);

    let nums = Array.from(Array(40).keys());

    return (
        <Grid sx={{ flexGrow: 1, pt: 10}} container>
        <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
            {
            produkty.length > 0 ? (         
            produkty.map((produkt) => (
              <Product produkt={produkt}/>
            ))) : 'Loading...'
                    
            }
          </Grid>
        </Grid>
      </Grid>
    );
}
  
export default Produkty;