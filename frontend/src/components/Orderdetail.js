import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Orderdetail = ({ objednavka, key }) => {

    const [zaplatenaObjednavka, setZaplatenaObjednavka] = useState(objednavka.status);

    const handleZaplatenaObjednavka = async() => {
        fetch(`http://localhost:8080/objednavky/${objednavka.id}`, { method: 'PUT' });
        setZaplatenaObjednavka(true);
    }

  return (
    <>
    <Typography sx={{ pt: 5, fontWeight: 'bold' }} variant="h6" align="left">Objednávka č. {objednavka.id}</Typography>
          <TableContainer sx={{ width: '50%', margin: 'auto', mt: 2 }} component={Paper}>
        <Table sx={{ width: '100%'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Údaje o zákazníkovi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell><b>Meno:</b> {objednavka.customer.name}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell><b>Adresa:</b> { objednavka.customer.street } { objednavka.customer.number }, { objednavka.customer.postcode } { objednavka.customer.city }</TableCell>
            </TableRow>
            <TableRow>
                <TableCell><b>E-mail:</b> { objednavka.customer.email }</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <Table sx={{ width: '100%'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produkt</TableCell>
            <TableCell align="right">Cena za kus</TableCell>
            <TableCell align="right">Množstvo</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {objednavka.products.map((produkt) => (
            <TableRow key={produkt.Produkt.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                <img src={produkt.Produkt.image} width="50" alt="Obrazok hudobneho nastroja" />&nbsp;
                    {produkt.Produkt.title} <i>(ID produktu: {produkt.Produkt.id})</i>
                </TableCell>
                <TableCell align="right">€ {produkt.Produkt.price ? produkt.Produkt.price.toFixed(2).replace('.', ',') : ''}</TableCell>
                <TableCell align="right">{produkt.quantity}</TableCell>
            </TableRow>
          ))}
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell colSpan="3" align="right">
        <b>{zaplatenaObjednavka ? "Zaplatená" : <>Nezaplatená <Button onClick={handleZaplatenaObjednavka} variant="outlined">Zmeniť stav objednávky na zaplatenú</Button></> }</b>
        </TableCell>
        </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
    </> 
    )
  
}

export default Orderdetail;