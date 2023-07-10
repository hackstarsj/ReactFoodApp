import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

export default function BuyAgainCard(props){
    return (
        <Card sx={{width:'100%',borderRadius:'10px'}} variant="outlined">
        <CardContent>
            <Grid container>
                <Grid item xs={2}>
                    <img src={props.image} className="img-responsive" style={{marginTop:'8px'}}/>
                </Grid>
                <Grid item xs={6} pl={2}>
                    <Typography className="title-small-title" >
                        {props.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.restaurantName}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" className="text-green" gutterBottom>
                    ₹ {props.price}
                    </Typography>
                </Grid>
                <Grid item xs={4} className="text-right">
                    <Button variant="contained" className="btn-green-p2" sx={{marginRight:'2px',marginTop:'15px'}}>Buy Again</Button>
                </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
}