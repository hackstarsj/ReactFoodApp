import { Button, FormControl, Grid, TextField, Typography } from "@mui/material";

export default function Login(){
    return (
        <Grid container>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',paddingTop:'20px'}} className="splash-bg">
                <img src={"/img/splash_icon.png"} style={{width:'70%'}}/>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
                <Typography className="title-logo">Eazy Food App</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
                <Typography>Deliver Food on Time</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={5}>
                <Typography className="title">Login To Your Account</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={5} pl={2} pr={2}>
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </FormControl>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={2} pl={2} pr={2}>
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </FormControl>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={2}>
                <Typography sx={{fontWeight:'bold'}}>Or Continue with</Typography>
            </Grid>
            <Grid item lg={6} xs={6} sx={{textAlign:'center',padding:'10px'}} mt={2}>
                <img src={"/img/facebook-btn.png"} className="img-responsive"/>
            </Grid>
            <Grid item lg={6} xs={6} sx={{textAlign:'center',padding:'10px'}} mt={2}>
                <img src={"/img/google-btn.png"} className="img-responsive"/>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={2}>
                <Typography sx={{fontWeight:'bold'}} className="text-green">Forget Your Password?</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',paddingLeft:'55px',paddingRight:'55px',paddingTop:'25px'}}>
                <Button variant="contained" className="btn-green">LOGIN</Button>
            </Grid>
        </Grid>
    )
}