import { Grid } from "@mui/material";
import RestaurantType from "../../common/RestaurantType";
import MenuCardList from "../../common/MenuCardList";
import Header from "../../common/Header";
export default function HomeComponent(props){

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
    let menuList=[
        {name:'Vegan Resto',image:'/img/menu.png',restaurantName:'Noodle Home'},
        {name:'Healthy Food',image:'/img/menu.png',restaurantName:'Noodle Home'},
        {name:'Good Food',image:'/img/menu.png',restaurantName:'Noodle Home'},
        {name:'Smart Resto',image:'/img/menu.png',restaurantName:'Noodle Home'},
        {name:'Vegan Resto',image:'/img/menu.png',restaurantName:'Noodle Home'},
        {name:'Healthy Food',image:'/img/menu.png',restaurantName:'Noodle Home'},
        {name:'Good Food',image:'/img/menu.png',restaurantName:'Noodle Home'},
        {name:'Smart Resto',image:'/img/menu.png',restaurantName:'Noodle Home'},
    ]

    const showSearchPageLocal=()=>{
        props.mainShowSearchPage("home")
    }

    return (
        <Grid container sx={{background:'#FCFCFE'}} mb={10}>
            <Header showSearchPageLocal={showSearchPageLocal}/>
            <RestaurantType restaurantType={"Nearest Restaurant"} restaurantList={restaurantList}/>
            <RestaurantType restaurantType={"Popular Restaurant"} restaurantList={restaurantList}/>
            <MenuCardList menuList={menuList} menuType={"Popular Food"} />
        </Grid>
    )
}