import { Card, CardContent, Typography } from "@mui/material";

export default function CardHomeComponent(props){
    return (
        <Card sx={{width:'100%',borderRadius:'10px'}} variant="outlined">
        <CardContent className="text-center">
            <img src={props.image} className="img-responsive"/>
            <Typography className="title-small">
                {props.name}
            </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {props.time}
          </Typography>
        </CardContent>
      </Card>
    )
}