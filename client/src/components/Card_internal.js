import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

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
    </Paper>
  );
}
