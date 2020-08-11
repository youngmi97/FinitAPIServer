import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import Card_content from "./cards/Card_content";
import Card_internal from "./cards/Card_internal";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

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
          <Grid item xs={12} className={classes.root}>
            <Card_internal />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <Card_internal />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <Card_internal />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <Card_internal />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <Card_internal />
          </Grid>
          <Grid item xs className={classes.root}></Grid>
          <Grid item xs className={classes.root}></Grid>
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
}
