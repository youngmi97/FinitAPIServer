import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CARD_INTERNAL from "./cards/Card_internal";


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
  return (
    <div>
      {/* <Box mx="auto" bgcolor="background.paper" p={4}> */}
      <Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.root}>
            <CARD_INTERNAL />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <CARD_INTERNAL />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <CARD_INTERNAL />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <CARD_INTERNAL />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <CARD_INTERNAL />
          </Grid>
          <Grid item xs className={classes.root}></Grid>
          <Grid item xs className={classes.root}></Grid>
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
}
