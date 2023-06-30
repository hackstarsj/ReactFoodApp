import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function MenuComponent(props){
    return (
        <Card sx={{width:'100%',borderRadius:'10px'}} variant="outlined">
        <CardContent>
            <Grid container>
                <Grid item xs={2}>
                    <img src={props.image} className="img-responsive"/>
                </Grid>
                <Grid item xs={8} pl={2}>
                    <Typography className="title-small" >
                        {props.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.restaurantName}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography sx={{ fontSize: 22,marginTop:'10px',fontWeight:'bold',color:'#FEAD1D' }} gutterBottom>₹ 200</Typography>
                </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
}