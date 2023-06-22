import { Button, Grid, Typography } from "@mui/material";

export default function Walkdown2(){
    return (
        <Grid container>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',paddingTop:'10px'}}>
                <img src={"/img/walkdown2.svg"} className="img-responsive"/>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',paddingLeft:'55px',paddingRight:'55px',paddingTop:'25px'}}>
                <Typography variant="h5" gutterBottom sx={{fontWeight:'bold'}}>Find Your Comfort Food Here</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',padding:'20px'}}>
                <Typography>Here you Can find a chef or Dish for every taste and color. Enjoy!</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',paddingLeft:'55px',paddingRight:'55px',paddingTop:'25px'}}>
                <Button variant="contained" className="btn-green">NEXT</Button>
            </Grid>
        </Grid>
    )
}