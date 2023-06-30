import { Grid, Typography } from "@mui/material";
import MenuComponent from "./MenuComponent";
import CheckoutCard from "./CheckOutCard";

export default function CheckoutList(props) {
  return (
    <Grid container>
      <Grid item lg={12} xs={12}>
        <Typography className="title-small-title" p={2}>
          Checkout
        </Typography>
      </Grid>
      
      {props.cartList.map((item) => (
        <Grid item xs={12} p={1}>
          <CheckoutCard
            image={item.image}
            name={item.name}
            restaurantName={item.restaurantName}
            price={item.price}
          />
        </Grid>
      ))}
    </Grid>
  );
}
