import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventNoteIcon from "@material-ui/icons/EventNote";
import GroupIcon from "@material-ui/icons/Group";
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
    backgroundColor: theme.palette.background.paper,
    blockSize: 5,
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
    minWidth: 40,
    "& span, & svg": {
      fontSize: "24px",
    },
  },
  ListItemSize2: {
    padding: 0,
    "& span, & svg": {
      fontSize: "17px",
      color: "grey",
    },
  },
  ListItemSize3: {
    marginLeft: 20,
    fontSize: 16,
  },
  ListItemSize4: {
    fontSize: 13,
  },
  item: {
    padding: 0,
  },
}));

export default function List_Active() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
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
        <ListItem button {...{ to: "/" }} component={Link}>
          <Avatar
            variant="circle"
            src="Ellipse 2.svg"
            className={classes.small}
          />
          <ListItemText className={classes.ListItemSize3} primary="Elice Yoo" />
        </ListItem>
        <ListSubheader
          className={classes.ListItemSize4}
          component="div"
          id="nested-list-subheader"
        >
          MY ACCOUNT
        </ListSubheader>
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
          {...{ to: "/" }}
          component={Link}
        >
          <ListItemIcon className={classes.ListItemSize}>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText className={classes.ListItemSize2} primary="My Wallet" />
        </ListItem>
      </List>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        <ListSubheader
          className={classes.ListItemSize4}
          component="div"
          id="nested-list-subheader"
        >
          MY SUBSCRIPTIONS
        </ListSubheader>

        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          {...{ to: "/subscriptions" }}
          component={Link}
        >
          <ListItemIcon className={classes.ListItemSize}>
            <AppsIcon />
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
        >
          <ListItemIcon className={classes.ListItemSize}>
            <GroupIcon />
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
        >
          <ListItemIcon className={classes.ListItemSize}>
            <EventNoteIcon />
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
        >
          <ListItemIcon className={classes.ListItemSize}>
            <EqualizerIcon />
          </ListItemIcon>
          <ListItemText className={classes.ListItemSize2} primary="Insight" />
        </ListItem>
      </List>
    </div>
  );
}
