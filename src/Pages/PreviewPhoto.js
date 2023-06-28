import { Button, Card, CardContent, FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function PreviewPhoto(){
    return (
        <Grid container>
            
           
            <Grid item lg={12} xs={12} mt={3}>
                <Button><ArrowBackIosIcon className="back-btn-icon"/></Button>
            </Grid>
            <Grid item lg={10} xs={10} mt={5} pl={2}>
                <Typography className="title">Upload your Profile Photo</Typography>
            </Grid>
            <Grid item lg={9} xs={9} pl={2} mt={2} >
                <Typography sx={{fontSize:'0.9rem'}}>The Data will be Displayed in your account profile for security</Typography>
            </Grid>
            <Grid item lg={12} xs={12}>
            <Card sx={{ minWidth: '100%',textAlign:'center' }}>
                <CardContent>
                    <img src={"/img/Photo.png"} className="img-responsive" />
                </CardContent>
            </Card>
            </Grid>
            
            <Grid item lg={12} xs={12} mt={2} sx={{textAlign:'center',paddingLeft:'55px',paddingRight:'55px',paddingTop:'25px'}}>
                <Button variant="contained" className="btn-green">NEXT</Button>
            </Grid>
           
        </Grid>
    )
}