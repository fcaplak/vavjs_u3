import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Lock from '@mui/icons-material/Lock';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#2a2a2a' }}>
            <Box sx={{ mx: "auto", width: '90%' }}>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <a href="/">E-shop s hudobnými potrebami</a>
            </Typography>
            <Button href="/admin" startIcon={<Lock />} color="inherit">Admin</Button>
            <Button href="/kosik" startIcon={<ShoppingCart />} color="inherit">Košík</Button>
            </Toolbar>
        </Box>
        </AppBar>
    </Box>
  );
}

export default Navbar;