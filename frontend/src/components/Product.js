import IconButton from '@mui/material/IconButton';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Product = ({produkt}) => {
    return (
        <Grid key={produkt.id} item>
            <Paper justifyContent="center" sx={{ height: 400, width: 300 }}>
                <Typography sx={{ pt: 2 }} variant="h6" align="center">{produkt.title}</Typography>
                <img src={produkt.image} width="250" /><br />
                <Typography sx={{ pt: 2 }} variant="h5" align="center">€ {produkt.price.toFixed(2).replace('.', ',')}</Typography>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCart align="center"/>
                </IconButton>
            </Paper>
        </Grid>
    );
}

export default Product;