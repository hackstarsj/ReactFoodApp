import { Grid, Typography } from "@mui/material";

export default function SplashScreen(){
    return (
        <Grid container>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',paddingTop:'250px'}} className="splash-bg">
                <img src={"/img/splash_icon.png"} className="img-responsive"/>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
                <Typography className="title-logo">Eazy Food App</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
                <Typography>Deliver Food on Time</Typography>
            </Grid>
        </Grid>
    )
}