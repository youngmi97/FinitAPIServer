import { Box, IconButton, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemText from "@material-ui/core/ListItemText";
import WalletToolbar from "../toolbars/WalletToolbar";
import React from "react";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    minHeight: 332,
    maxHeight: 332,
    borderRadius: "10px",
  },
  rect: {
    width: theme.spacing(6),
    height: theme.spacing(4),
    margin: 8,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 186,
  },
  overlay: {
    position: "absolute",
    top: "0%",
    left: "75%",
    color: "white",
  },
  ListItemSize: {
    color: "black",
    borderColor: "white",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
  },
  ListItemSize3: {
    fontSize: "14px",
  },
  ListItemSize5: {
    fontSize: "14px",
    fontWeight: "1000",
  },
  ListItemSize2: {
    fontSize: "14px",
    color: "#7610EB",
  },
  Buttoncolor: {
    color: theme.palette.primary.main,
  },
}));

export default function Card_internal() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const [secondary, setSecondary] = React.useState(false);
  return (
    <Card className={classes.root}>
      {/* <CardHeader></CardHeader> */}
      <CardContent>
        <Box display="flex">
          <Box flexGrow={1} className={classes.ListItemSize} margin="16px">
            WALLET HISTORY
          </Box>
          <Box className={classes.ListItemSize}>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>
        <WalletToolbar />
        <List>
          <ListItem divider>
            <Grid container>
              <Grid xs={3}>
                <Typography className={classes.ListItemSize5}>Date</Typography>
              </Grid>
              <Grid xs={4}>
                <Typography className={classes.ListItemSize5}>
                  Subscription
                </Typography>
              </Grid>
              <Grid xs={3}>
                <Typography className={classes.ListItemSize5}>Type</Typography>
              </Grid>
              <Grid xs={2}>
                <Typography className={classes.ListItemSize5}>
                  Amount
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem divider>
            <Grid container alignItems="center">
              <Grid xs={3}>
                <Typography className={classes.ListItemSize3}>
                  04/21/20
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Box display="flex" alignItems="center" margin="0">
                  <Avatar variant="square" src="static/images/Medium.svg" />
                  <Box p={1}>
                    <Typography className={classes.ListItemSize5}>
                      Medium
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Typography className={classes.ListItemSize3}>
                  Reward
                </Typography>
              </Grid>
              <Grid xs={2}>
                <Typography className={classes.ListItemSize2}>+ $ 1</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem divider>
            <Grid container alignItems="center">
              <Grid xs={3}>
                <Typography className={classes.ListItemSize3}>
                  04/21/25
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Box display="flex" alignItems="center" margin="0">
                  <Avatar variant="square" src="static/images/Medium.svg" />
                  <Box p={1}>
                    <Typography className={classes.ListItemSize5}>
                      Medium
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Typography className={classes.ListItemSize3}>
                  Collect
                </Typography>
              </Grid>
              <Grid xs={2}>
                <Typography className={classes.ListItemSize2}>+ $ 4</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem divider>
            <Grid container alignItems="center" justifyContent="center">
              <Grid xs={3}>
                <Typography className={classes.ListItemSize3}>
                  04/21/20
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Box display="flex" alignItems="center" margin="0">
                  <Avatar variant="square" src="static/images/Medium.svg" />
                  <Box p={1}>
                    <Typography className={classes.ListItemSize5}>
                      Medium
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Typography className={classes.ListItemSize3}>
                  Reward
                </Typography>
              </Grid>
              <Grid xs={2}>
                <Typography className={classes.ListItemSize2}>+ $ 1</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
