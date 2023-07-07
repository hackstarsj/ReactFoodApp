import { Button, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ChatHeader(props) {
  return (
    <>
 
    <Grid
      item
      lg={12}
      xs={12}
      sx={{ textAlign: "center", paddingTop: "10px" }}
      className="splash-bg-home"
    >
      <div className="layer"></div>
      <Grid container className="home-header" sx={{marginTop:props.showBack?'0px':'30px'}}>
      {props.showBack?
    <Grid item lg={12} xs={12} mt={3} className="text-left" ml={2}>
    <Button onClick={props.mainresetLastPage}><ArrowBackIosIcon className="back-btn-icon"/></Button>
</Grid>:''}
        <Grid item xs={12}>
          <Typography className="title-home">
            Chat
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
