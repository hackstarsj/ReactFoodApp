import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function ChatCardFront(props) {
  return (
    <Card variant="outlined" sx={{ margin: "5px 10px ", borderRadius: "20px" }} onClick={props.showChatInnnerScreen}>
      <CardContent sx={{ padding: "10px", paddingBottom: "10px!important" }}>
        <Grid container>
          <Grid item xs={3}>
            <img
              src={"/img/profile.png"}
              className="img-responsive"
              style={{ marginTop: "5px" }}
            />
          </Grid>
          <Grid item xs={8} p={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Rajat
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "lightgrey" }}>
              Your Order Just Arrived
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "lightgrey",
                fontSize: "14px",
                padding: "0px",
                marginTop: "15px",
                marginLeft: "-5px",
              }}
            >
              20:00
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
