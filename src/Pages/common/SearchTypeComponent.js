import { Chip, Grid, Stack, Typography } from "@mui/material";

export default function SearchTypeComponent(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className="title-small" pr={2} pl={2} pb={1} pt={1}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={1} sx={{display:'block'}}>
            {props.searchNames.map((item)=>(
              <Chip label={item} className="custom-chip" />
            ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
