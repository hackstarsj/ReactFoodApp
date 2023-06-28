import { Button, Grid, Typography } from "@mui/material";

export default function SuccessPage(){
    return (
        <Grid container>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',paddingTop:'200px'}} className="splash-bg">
                <img src={"/img/success.png"} className="img-responsive" style={{width:'60%'}}/>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
                <Typography className="title-logo">Congrats</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',padding:'8px'}} mt={2}>
                <Typography className="title" sx={{fontSize:'1.2rem'}}>Your Profile is Ready to Use</Typography>
            </Grid>
            <Grid item lg={12} xs={12} mt={2} sx={{textAlign:'center',paddingLeft:'55px',paddingRight:'55px',paddingTop:'25px'}}>
                <Button variant="contained" className="btn-green">TRY ORDER</Button>
            </Grid>
        </Grid>
    )
}