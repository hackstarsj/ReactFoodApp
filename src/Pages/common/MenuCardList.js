import { Grid, Typography } from "@mui/material";
import MenuComponent from "./MenuComponent";

export default function MenuCardList(props) {
  return (
    <Grid container>
      <Grid item lg={8} xs={8}>
        <Typography className="title-small-title" p={2}>
          {props.menuType}
        </Typography>
      </Grid>
      <Grid item lg={4} xs={4} className="text-right">
        <Typography color={"#FF7C32"} p={2}>
          View More
        </Typography>
      </Grid>
      {props.menuList.map((item) => (
        <Grid item xs={12} p={1}>
          <MenuComponent
            image={item.image}
            name={item.name}
            restaurantName={item.restaurantName}
          />
        </Grid>
      ))}
    </Grid>
  );
}
