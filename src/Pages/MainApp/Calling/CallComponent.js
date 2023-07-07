import { Grid, Typography } from "@mui/material";
import ChatHeader from "../../common/ChatHeader";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CloseIcon from '@mui/icons-material/Close';

export default function CallComponent(props) {
  return (
    <>
     <Grid
      item
      lg={12}
      xs={12}
      sx={{ textAlign: "center", paddingTop: "10px" }}
      className="splash-bg"
    >
      <div className="layer"></div>
        <Grid item xs={12}>
            <img src={"/img/user.png"} className="call-user"/>
        </Grid>
        <Grid item xs={12}>
          <Typography className="title-home" sx={{textAlign:'center',marginTop:'30px'}}>
            Rajat Keshri
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "lightgrey",fontSize:'20px',textAlign:'center' }}>
              Ringing...
            </Typography>
        </Grid>
      </Grid>
      <Grid container mt={15}>
        <Grid item xs={6} className="text-right">
                <VolumeUpIcon className="speaker-icon"/>
        </Grid>
        <Grid item xs={6}  className="text-left">
            <CloseIcon className="close-icon" onClick={()=>props.mainresetLastPage("chatinner")}/>
        </Grid>
      </Grid>
    </>
  );
}
