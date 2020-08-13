import { CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
// import Grid from "@material-ui/core/Grid";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import SubscriptionDetail from "../SubscriptionDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 217,
    minHeight: 217,
    maxwidth: 345,
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
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
    marginLeft: 10,
    "& span, & svg": {
      fontSize: "14px",
      fontWeight: 600,
    },
  },
  ListItemSize2: {
    marginLeft: 20,
    "& span, & svg": {
      fontSize: "0.7rem",
    },
  },
  ListItemSize3: {
    fontSize: "14px",
  },
  ListItemSize4: {
    marginLeft: 20,
    "& span, & svg": {
      fontSize: "12px",
      color: "gray",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    alignContent: "center",
    flexWrap: "wrap",
    display: "flex",
  },
  Buttoncolor: {
    color: theme.palette.primary.main,
  },
}));

export default function Card_internal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Paper>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="subscription"
              variant="rounded"
              className={classes.avatar}
              src="assets/images/Netflix.png"
            >
              N
            </Avatar>
          }
          title={<Typography className={classes.title}>Notion</Typography>}
          subheader="Team Plan"
        />
        <CardContent>
          <Typography className={classes.pos} variant="body2" component="p">
            US $8.00/mo
            <br />
            Next payment is in 3 days
          </Typography>
          <Typography
            className={classes.pos}
            variant="caption"
            color="textSecondary"
          >
            Member since: July 30,2018
          </Typography>
        </CardContent>
        <CardActionArea>
          <div align="center">
            <Button
              size="small"
              variant="outlined"
              className={classes.ListItemSize3}
              onClick={handleToggle}
            >
              View Details
            </Button>
            <Backdrop
              className={classes.backdrop}
              open={open}
              onClick={handleClose}
            >
              <SubscriptionDetail />
            </Backdrop>
          </div>
        </CardActionArea>
      </Card>
    </Paper>
  );
}
