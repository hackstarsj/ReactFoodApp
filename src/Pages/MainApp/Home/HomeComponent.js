import { Button, FormControl, Grid, Input, InputAdornment, TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import HttpsIcon from '@mui/icons-material/Https';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import CardHomeComponent from "../../common/CardHomeComponent";
export default function HomeComponent(){

    let restaurantList=[
        {name:'Vegan Resto',image:'/img/restaurant.png',time:'14 Min'},
        {name:'Healthy Food',image:'/img/restaurant.png',time:'14 Min'},
        {name:'Good Food',image:'/img/restaurant.png',time:'15 Min'},
        {name:'Smart Resto',image:'/img/restaurant.png',time:'16 Min'},
        {name:'Vegan Resto',image:'/img/restaurant.png',time:'17 Min'},
        {name:'Healthy Food',image:'/img/restaurant.png',time:'18 Min'},
        {name:'Good Food',image:'/img/restaurant.png',time:'19 Min'},
        {name:'Smart Resto',image:'/img/restaurant.png',time:'20 Min'},
    ]

    return (
        <Grid container sx={{background:'#FCFCFE'}}>
            <Grid item lg={12} xs={12} sx={{textAlign:'center',paddingTop:'10px'}} className="splash-bg-home">
                <div className="layer"></div>
                <Grid container className="home-header">
                    <Grid item xs={9}>
                        <Typography className="title-home">Find your Favorite Food</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <span className="dot-orange"></span>
                        <NotificationsNoneIcon className="notification-icon"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
                <Grid container>
                    <Grid item xs={9}>
                        <FormControl fullWidth sx={{marginLeft:'10px'}} className="custom-search-input">
                             <Input placeholder="What do you want to order?" 
                                startAdornment= {
                                <InputAdornment position="start">
                                    <SearchIcon sx={{color:'#43dd86'}}/>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                        
                    </Grid>
                    <Grid item xs={3}>
                        <img src={"/img/filter.svg"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                    {restaurantList.map((item)=>(
                    <Grid item xs={6} p={1}>
                        <CardHomeComponent name={item.name} image={item.image} time={item.time}/>
                    </Grid>
                    ))
                    }
            </Grid>

        </Grid>
    )
}