import { Grid, Typography } from "@mui/material";
import CardHomeComponent from "./CardHomeComponent";

export default function RestaurantType(props) {
  return (
    <>
      <Grid item lg={8} xs={8}>
        <Typography className="title-small-title" p={2}>
          {props.restaurantType}
        </Typography>
      </Grid>
      <Grid item lg={4} xs={4} className="text-right">
        <Typography color={"#FF7C32"} p={2}>
          View More
        </Typography>
      </Grid>

      <Grid
        sx={{
          flexWrap: "initial",
          overflowX: "scroll",
          display: "-webkit-box",
        }}
      >
        {props.restaurantList.map((item) => (
          <Grid p={1} sx={{ width: "190px" }}>
            <CardHomeComponent
              name={item.name}
              image={item.image}
              time={item.time}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
