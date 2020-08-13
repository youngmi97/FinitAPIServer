//Main contents displayed in the center of the screen
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
//Cards to be displayed in the screen
import CardContent from "./cards/Card_content";
import CardInternal from "./cards/Card_internal";
import HoveringCard from "./cards/HoveringCard";



const useStyles = makeStyles((theme) => ({
  root: {
    margin: 16,
    minWidth: 217,
    maxWidth: "100%",
    minHeight: 217,
    maxHeight: "100%",
  },
}));

export default function Active_content() {
  const classes = useStyles();
  const [hover, sethover] = React.useState(false);
  const [hover1, sethover1] = React.useState(false);
  return (
    <div>
      {/* <Box mx="auto" bgcolor="background.paper" p={4}> */}
      <Grid>
        <Grid container spacing={0}>
          <Grid item xs className={classes.root}>
            <Grid
              name="hover-feedback"
              precision={0.5}
              onClick={() => sethover1(!hover1)}
            >
              {hover1 !== true ? <CardContent /> : <CardInternal />}
            </Grid>
          </Grid>
          <Grid item xs className={classes.root}>
            <Grid
              name="hover-feedback"
              onMouseEnter={() => sethover(true)}
              onMouseLeave={() => sethover(false)}
            >
              {hover !== true ? <CardContent /> : <CardInternal />}
            </Grid>
          </Grid>
          <Grid item xs className={classes.root}>
            <HoveringCard />
          </Grid>
          <Grid item xs className={classes.root}>
            {/* <Card_content /> */}
          </Grid>
          <Grid item xs className={classes.root}>
            <CardContent />
          </Grid>
          <Grid item xs className={classes.root}>
            <CardContent />
          </Grid>
          <Grid item xs className={classes.root}>
            <CardContent />
          </Grid>
          <Grid item xs className={classes.root}></Grid>
          <Grid item xs className={classes.root}></Grid>
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
}
