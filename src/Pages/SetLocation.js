import { Button, Card, CardContent, FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SetLocation(){
    return (
        <Grid container>
            <Grid item lg={12} xs={12} mt={3}>
                <Button><ArrowBackIosIcon className="back-btn-icon"/></Button>
            </Grid>
            <Grid item lg={10} xs={10} mt={5} pl={2}>
                <Typography className="title">Set Your Location</Typography>
            </Grid>
            <Grid item lg={9} xs={9} pl={2} mt={2} >
                <Typography sx={{fontSize:'0.9rem'}}>The Data will be Displayed in your account profile for security</Typography>
            </Grid>
            <Grid item lg={12} xs={12} mt={5} pl={2} sx={{display:'flex'}}>
            <LocationOnIcon className="location-icon"/> <Typography sx={{fontSize:'1rem',fontWeight:'bold'}}>Your Location</Typography>
            </Grid>

            <Grid item lg={12} xs={12} mt={2} sx={{textAlign:'center',padding:'10px'}}>
                <FormControl fullWidth>
                <Button variant="filled" color="secondary" sx={{fontWeight:'bold',border:'1px solid #d5d0d0',background: '#f0eded'}}>Set Location</Button>
                </FormControl>
            </Grid>
            <Grid item lg={12} xs={12} mt={2} sx={{textAlign:'center',paddingLeft:'55px',paddingRight:'55px',paddingTop:'25px'}}>
                <Button variant="contained" className="btn-green">NEXT</Button>
            </Grid>
           
        </Grid>
    )
}