import { Button, FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import HttpsIcon from '@mui/icons-material/Https';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

export default function Signup(){
    return (
        <Grid container>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',paddingTop:'10px'}} className="splash-bg">
                <img src={"/img/splash_icon.png"} style={{width:'70%'}}/>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
                <Typography className="title-logo">Eazy Food App</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
                <Typography>Deliver Food on Time</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={5}>
                <Typography className="title">Signup for Free</Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={2} pl={2} pr={2}>
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Username" variant="outlined" InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleIcon sx={{color:'#43dd86'}}/>
                        </InputAdornment>
                        ),
                    }}/>
                </FormControl>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={2} pl={2} pr={2}>
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Email" variant="outlined" InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <MarkunreadIcon sx={{color:'#43dd86'}}/>
                        </InputAdornment>
                        ),
                    }}/>
                </FormControl>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={2} pl={2} pr={2}>
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Password" variant="outlined" InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <HttpsIcon sx={{color:'#43dd86'}} />
                        </InputAdornment>
                        ),
                    }}/>
                </FormControl>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={2} pl={2} pr={2}>
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Mobile" variant="outlined" InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <SmartphoneIcon sx={{color:'#43dd86'}} />
                        </InputAdornment>
                        ),
                    }}/>
                </FormControl>
            </Grid>
            
            <Grid item lg={12} xs={12} mt={2} sx={{textAlign:'center',paddingLeft:'55px',paddingRight:'55px',paddingTop:'25px'}}>
                <Button variant="contained" className="btn-green">LOGIN</Button>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}} mt={2}>
                <Typography sx={{fontWeight:'bold'}} className="text-green">Already have an Account?</Typography>
            </Grid>

        </Grid>
    )
}