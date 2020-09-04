//Active contents displayed in the center of the screen
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

//Cards to be displayed in the screen
// import SubscriptionCard from "./cards/SubscriptionCard";
import Details from "./cards/Details";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 16,
    minWidth: 217,
    maxWidth: 217,
    minHeight: 217,
    maxHeight: 217,
    align: "left",
  },
}));

export default function Active_content(props) {
  const classes = useStyles();
  const [hover, sethover] = React.useState(false);
  const [hover1, sethover1] = React.useState(false);
  return (
    <div>
      <Grid>
        <Grid container spacing={0} justify="center">
          {props.cards.map((card, index) => {
            return (
              <Grid item xs className={classes.root}>
                <Details name={card.name} key={index} />
              </Grid>
            );
          })}
          <Grid item xs className={classes.root}></Grid>
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
}
