import { CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 217,
    minHeight: 217,
    marginLeft: 15,
    marginRight: 15,
  },
  ListItemSize5: {
    color: "white",
    borderColor: "white",
    backgroundColor: "#7610EB",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
    textTransform: "none",
    height: "40px",
  },
  title: {
    fontSize: 22,
    fontWeight: 1000,
  },
  pos: {
    fontSize: 17,
    fontWeight: 500,
    marginBottom: 12,
    marginLeft: 15,
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
  },
  Buttoncolor: {
    color: theme.palette.primary.main,
  },
}));

export default function Card_internal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="subscription"
            variant="rounded"
            className={classes.avatar}
            src={"/static/avatar/" + props.name + "[48].svg"}
          ></Avatar>
        }
        title={<Typography className={classes.title}>{props.name}</Typography>}
      />
      <CardContent>
        <Typography className={classes.pos} variant="body2" component="p">
          {props.plan}
        </Typography>
        <Typography className={classes.pos} variant="body2" component="p">
          {props.price}
        </Typography>
        <Box display="flex" justifyContent="center">
          <Box p={1}>
            <Button className={classes.ListItemSize5} variant="outlined">
              Add subscriptions
            </Button>
          </Box>
        </Box>
        {/* <Typography
            className={classes.pos}
            variant="caption"
            color="textSecondary"
          >
            Member since: July 30,2018
          </Typography> */}
      </CardContent>
      <CardActionArea>
        <div align="center">
          {/* <Button
              size="small"
              variant="outlined"
              className={classes.ListItemSize3}
              onClick={handleToggle}
            >
              View Details
            </Button> */}
          <Backdrop
            className={classes.backdrop}
            open={open}
            onClick={handleClose}
          >
            <Paper>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.list}
              >
                <ListItem button>
                  <Grid
                    container
                    spacing={0}
                    align="center"
                    justify="center"
                    direction="row"
                  >
                    <Grid item xs>
                      <Avatar
                        variant="square"
                        className={classes.small}
                        src="Netflix_small.png"
                      />
                    </Grid>
                    <Grid item xs>
                      <ListItemText
                        className={classes.ListItemSize}
                        primary="Netflix"
                      />
                    </Grid>
                    <Grid item xs></Grid>
                  </Grid>
                </ListItem>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="TeamPlan"
                />
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="USD $12.00"
                />
                <br />
                <ListItemText
                  className={classes.ListItemSize4}
                  primary="Monthly Payment"
                />
              </List>
            </Paper>
          </Backdrop>
        </div>
      </CardActionArea>
    </Card>
  );
}
