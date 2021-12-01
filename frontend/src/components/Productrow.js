import * as React from 'react';
import { useState, useEffect } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

const Productrow = ({ id, quantity, kosik, setKosik }) => {

    const [produkt, setProdukt] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/produkty/${id}`, { method: 'GET' })
            .then(result => result.json())
            .then(result => setProdukt(result))
    }, [id]);

    const addToCart = (item) => setKosik((kosik) => [...kosik, item]);

    const removeFromCart = (item) => {
        setKosik((kosik) => {
          const indexOfItemToRemove = kosik.findIndex((cartItem) => cartItem === item);
    
          if (indexOfItemToRemove === -1) {
            return kosik;
          }
    
          return [
            ...kosik.slice(0, indexOfItemToRemove),
            ...kosik.slice(indexOfItemToRemove + 1),
          ];
        });
      };

    return (
        <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
            <img src={produkt.image} width="50" alt="Obrazok hudobneho nastroja" />&nbsp;
                {produkt.title}
            </TableCell>
            <TableCell align="right">€ {produkt.price ? produkt.price.toFixed(2).replace('.', ',') : ''}</TableCell>
            <TableCell align="right">
                <IconButton color="primary" aria-label="remove from shopping cart" onClick={() => removeFromCart(produkt.id)} >
                    <Remove align="center"/>
                </IconButton>
                {quantity}
                <IconButton color="primary" aria-label="add to shopping cart" onClick={() => addToCart(produkt.id)} >
                    <Add align="center"/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default Productrow;