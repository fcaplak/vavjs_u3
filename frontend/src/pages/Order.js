import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Order = () => {
    
    var kosik = JSON.parse(localStorage.getItem("produkty_kosik"));

    var counts = {};
    for (let i = 0; i < kosik.length; i++)
        counts[kosik[i]] = (counts[kosik[i]] + 1) || 1;

    var products = [];
    for (const [key, value] of Object.entries(counts))
        products.push({ productId: key, quantity: value});
    
    console.log(products);

    /*
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passowrd, setPassowrd] = useState('');

    const handleSubmit = async () =>{ 
        const res = await axios.post('YOUR BACKEND',{ username,email,password })
    }*/
    
    return (
        <>
            <Typography sx={{ pt: 5, fontWeight: 'bold' }} variant="h5" align="center">Objednávka</Typography>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' id="standard-basic" label="E-mail" variant="standard" />
                </Grid>
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' id="standard-basic" label="Meno" variant="standard" />
                </Grid>
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' id="standard-basic" label="Ulica" variant="standard" /> <TextField id="standard-basic" label="Číslo" variant="standard" />
                </Grid>
                <Grid item xs={2} sx={{ padding: 1 }}>
                    <TextField type='text' id="standard-basic" label="Mesto" variant="standard" /> <TextField id="standard-basic" label="PSČ" variant="standard" />
                </Grid>
                
                <Button /*onSubmit={handleSubmit}*/ variant="outlined">Objednať</Button>
            </Grid>
        </>
    );
}

export default Order;