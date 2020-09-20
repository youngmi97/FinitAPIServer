import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const drawerWidth = 300;
const drawerWidth2 = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  icon_root: {
    flexGrow: 1,
    maxWidth: 500,
  },
  list: {
    backgroundColor: "white",
    padding: 12,
  },
  small: {
    width: 24,
    height: 24,
  },
  grow: {
    flexGrow: 1,
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 10,
  },
  appBar2: {
    width: `calc(100%)`,
  },
  customizeToolbar: {
    marginTop: 10,
    minHeight: 5,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawer2: {
    width: drawerWidth2,
    flexShrink: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    fontSize: 10,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  searchIcon: {
    padding: theme.spacing(2, 0),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
  drawerPaper: {
    marginTop: 44,
  },
  drawerPaper2: {
    width: drawerWidth2,
    top: 200,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paperContainer: {
    backgroundImage: `url(${"Rectangle4.png"})`,
    height: 260,
    width: 1440,
  },
  ListItemSize: {
    minWidth: 36,
    "& span, & svg": {
      fontSize: "24px",
    },
  },
  ListItemSize1: {
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 6,
  },
  ListItemSize2: {
    padding: 0,
    "& span, & svg": {
      fontSize: "14px",
      color: "grey",
    },
  },
  ListItemSize4: {
    fontSize: 11,
    height: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  item: {
    padding: 0,
  },
}));

export default function List_Active() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(4);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography className={classes.ListItemSize4}>MY WALLET</Typography>
        </ListSubheader>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          {...{ to: "/wallet" }}
          component={Link}
          dense={true}
          disableRipple={true}
          className={classes.ListItemSize1}
        >
          <ListItemIcon className={classes.ListItemSize}>
            <img
              className={classes.imageIcon}
              src="/static/icons/drawer/Wallet.svg"
              alt="wallet"
            />
          </ListItemIcon>
          <ListItemText className={classes.ListItemSize2} primary="My Wallet" />
        </ListItem>
      </List>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography className={classes.ListItemSize4}>
            MY SUBSCRIPTIONS
          </Typography>
        </ListSubheader>

        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          {...{ to: "/subscriptions" }}
          component={Link}
          dense={true}
          disableRipple={true}
          className={classes.ListItemSize1}
        >
          <ListItemIcon className={classes.ListItemSize}>
            <img
              className={classes.imageIcon}
              src="/static/icons/drawer/AllSubscriptions.svg"
              alt="all"
            />
          </ListItemIcon>
          <ListItemText
            className={classes.ListItemSize2}
            primary="All subscriptions"
          />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          {...{ to: "/shared" }}
          component={Link}
          dense={true}
          className={classes.ListItemSize1}
          disableRipple={true}
        >
          <ListItemIcon className={classes.ListItemSize}>
            <img
              className={classes.imageIcon}
              src="/static/icons/drawer/SharedSubscriptions.svg"
              alt="share"
            />
          </ListItemIcon>
          <ListItemText
            className={classes.ListItemSize2}
            primary="Shared subcriptions"
          />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          {...{ to: "/upcoming" }}
          component={Link}
          dense={true}
          disableRipple={true}
          className={classes.ListItemSize1}
        >
          <ListItemIcon className={classes.ListItemSize}>
            <img
              className={classes.imageIcon}
              src="/static/icons/drawer/Upcoming.svg"
              alt="upcoming"
            />
          </ListItemIcon>
          <ListItemText
            className={classes.ListItemSize2}
            primary="Upcoming events"
          />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          {...{ to: "/insight" }}
          component={Link}
          dense={true}
          className={classes.ListItemSize1}
          disableRipple={true}
        >
          <ListItemIcon className={classes.ListItemSize}>
            <img
              className={classes.imageIcon}
              src="/static/icons/drawer/Insight.svg"
              alt="insight"
            />
          </ListItemIcon>
          <ListItemText className={classes.ListItemSize2} primary="Insight" />
        </ListItem>
      </List>
    </div>
  );
}
