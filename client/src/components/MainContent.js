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
      <Box>
        <Box display="flex">
          <Box className={classes.root}>
            <Box
              name="hover-feedback"
              precision={0.5}
              onClick={() => sethover1(!hover1)}
            >
              {hover1 !== true ? <Card_content /> : <Card_internal />}
            </Box>
          </Box>
          <Box className={classes.root}>
            <Box
              name="hover-feedback"
              onMouseEnter={() => sethover(true)}
              onMouseLeave={() => sethover(false)}
            >
              {hover !== true ? <Card_content /> : <Card_internal />}
            </Box>
          </Box>
          <Box className={classes.root}>
            <Card_internal />
          </Box>
          <Box className={classes.root}>
            <Card_internal />
          </Box>
          <Box className={classes.root}>
            <Card_content />
          </Box>
          <Box className={classes.root}>
            <Card_content />
          </Box>
          <Box className={classes.root}></Box>
          <Box className={classes.root}></Box>
        </Box>
      </Box>
      {/* </Box> */}
    </div>
  );
}
