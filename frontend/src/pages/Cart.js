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
import Productrow from '../components/Productrow';
import Button from '@mui/material/Button';
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';

const Cart = () => {

  var storedKosik = JSON.parse(localStorage.getItem("produkty_kosik"));
  const [kosik, setKosik] = useState(storedKosik ? storedKosik : []);
  
  localStorage.setItem("produkty_kosik", JSON.stringify(kosik));

  var counts = {};
  for (let i = 0; i < kosik.length; i++)
    counts[kosik[i]] = (counts[kosik[i]] + 1) || 1;

  var products = [];
  for (const [key, value] of Object.entries(counts)) {
    products.push({ id: key, quantity: value});
  }

  return (
    <>
    <Typography sx={{ pt: 5, fontWeight: 'bold' }} variant="h5" align="center">Košík</Typography>
    <TableContainer sx={{ width: '50%', margin: 'auto', mt : 2 }} component={Paper}>
      <Table sx={{ width: '100%'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Cena za kus</TableCell>
            <TableCell align="right">Množstvo</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <Productrow key={product.id} id={product.id} quantity={product.quantity} kosik={kosik} setKosik={setKosik} />
          ))}
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell colSpan={4} align="right">
                { products.length > 0 ? <Button href="/objednavka" variant="outlined" startIcon={<ShoppingCartCheckout />}>Pokračovať k objednávke</Button> : '' }
            </TableCell>
            </TableRow>
            
        </TableBody>
      </Table>
      </TableContainer>
    </>
    )
  
}

export default Cart;