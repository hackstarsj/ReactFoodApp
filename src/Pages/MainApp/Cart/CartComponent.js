import { Grid } from "@mui/material";
import Header from "../../common/Header";
import CheckoutList from "../../common/CheckoutList";

export default function CartComponent() {
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



  return (
    <Grid container sx={{ background: "#FCFCFE" }} mb={10}>
      <Header/>
      <CheckoutList cartList={cartList}/>
    </Grid>
  );
}
