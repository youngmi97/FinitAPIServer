//Active contents displayed in the center of the screen
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
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
  },
  mainbreak: {
    [theme.breakpoints.down(1900)]: {
      width: 1250,
    },
    [theme.breakpoints.down(1650)]: {
      width: 1000,
    },
    [theme.breakpoints.down(1400)]: {
      width: 765,
    },
    [theme.breakpoints.down(840)]: {
      width: 500,
    },
    [theme.breakpoints.down(600)]: {
      width: 250,
    },
  },
}));

export default function Active_content(props) {
  const classes = useStyles();
  return (
    <div>
      <Box display="flex" justifyContent="center" p={1} m={1}>
        <Box p={1}>
          <Grid container className={classes.mainbreak} justify="flex-start">
            {props.cards.map((card, index) => {
              return (
                <Grid item xs className={classes.root}>
                  <Details
                    name={card.name}
                    price={card.price}
                    plan={card.planName}
                    lastdate={card.lastdate}
                    period={card.period}
                    key={index}
                  />
                </Grid>
              );
            })}
            <Grid item xs className={classes.root}></Grid>
          </Grid>
        </Box>
      </Box>

      {/* </Box> */}
    </div>
  );
}
