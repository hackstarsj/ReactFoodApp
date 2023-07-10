import { Chip, Grid, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CheckoutCard from "../../common/CheckOutCard";
import BuyAgainCard from "../../common/BuyAgainCard";
export default function ProfileComponent(){
    let cartList=[
        {name:'Vegan Resto',image:'/img/menu.png',restaurantName:'Noodle Home',price:'200'},
        {name:'Healthy Food',image:'/img/menu.png',restaurantName:'Noodle Home',price:'200'},
        {name:'Good Food',image:'/img/menu.png',restaurantName:'Noodle Home',price:'200'},
        {name:'Smart Resto',image:'/img/menu.png',restaurantName:'Noodle Home',price:'200'},
        {name:'Vegan Resto',image:'/img/menu.png',restaurantName:'Noodle Home',price:'200'},
        {name:'Healthy Food',image:'/img/menu.png',restaurantName:'Noodle Home',price:'200'},
        {name:'Good Food',image:'/img/menu.png',restaurantName:'Noodle Home',price:'200'},
        {name:'Smart Resto',image:'/img/menu.png',restaurantName:'Noodle Home',price:'200'},
    ]

    return <Grid container>
        <Grid item xs={12}>
            <img src={"/img/profile_lg.png"} className="img-responsive"/>
        </Grid>
        <Grid item xs={12} className="profile-content">
            <Grid container>
                <Grid item xs={12}>
                    <Chip label="Member Gold" className="custom-chip" />
                </Grid>
                <Grid item xs={10}>
                     <Typography className="title" pr={2} pl={2}  pt={1}>
                        Ravi Thapa
                    </Typography>
                    <Typography variant="subtitle1"  sx={{ color: "lightgrey" }} pl={2}>
                        ravi@gmail.com
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <EditIcon sx={{ marginTop: "14px",color: "#15be77"}}/>
                </Grid>
                <Grid item xs={12} mt={2}>
                    <Typography className="title-small" pr={2} pl={2}  pt={1}>
                        Favorites
                    </Typography>
                </Grid>
                {cartList.map((item) => (
                    <Grid item xs={12} p={1}>
                    <BuyAgainCard
                        image={item.image}
                        name={item.name}
                        restaurantName={item.restaurantName}
                        price={item.price}
                    />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>
}