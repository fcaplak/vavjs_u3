import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Product = ({ produkt, kosik, setKosik }) => {
    
    const addToCart = (item) => setKosik((kosik) => [...kosik, item]);
    const amountOfItems = (id) => kosik.filter((item) => item === id).length;

    return (
        <Grid key={produkt.id} item>
            <Paper sx={{ height: 450, width: 300 }}>
                <Typography sx={{ pt: 2 }} variant="h6" align="center">{produkt.title}</Typography>
                <img src={produkt.image} width="250" alt="Obrazok hudobneho nastroja" /><br />
                <Typography sx={{ pt: 2 }} variant="h5" align="center">€ {produkt.price.toFixed(2).replace('.', ',')}</Typography>

                <Button sx={{ ml: 7, mt: 2, mb: 2 }} variant="outlined" onClick={() => addToCart(produkt.id)} startIcon={<AddShoppingCart />}>Pridať do košíka</Button>
                <Typography align="center">{amountOfItems(produkt.id) > 0 ? `${amountOfItems(produkt.id)} ks`: ''}</Typography>
            </Paper>
        </Grid>
    );
}

export default Product;