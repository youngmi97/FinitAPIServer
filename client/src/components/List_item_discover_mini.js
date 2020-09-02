import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AppsIcon from "@material-ui/icons/Apps";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import GroupIcon from "@material-ui/icons/Group";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";

const TextTypographyTitle = withStyles({
  root: {
    fontSize: 24,
    color: "#7610EB",
    marginLeft: 10,
    height: 28,
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  ListItemTitle: {
    width: "146px",
    color: "#7610EB",
    fontWeight: 500,
    fontSize: 24,
  },
  ListItem: {
    width: "176px",
    height: "20px",
    marginRight: "80px",
  },
  ListItemSize: {
    minWidth: "35px",
    "& span, & svg": {
      fontSize: "17px",
    },
  },
  ListItemSize2: {
    padding: 0,
    "& span, & svg": {
      fontSize: "14px",
      color: "black",
    },
  },
}));

export default function SimpleListMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(props.index);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuTitleOptions = [
    "My Wallet",
    "All Subscriptions",
    "Shared Subscriptions",
    "Upcoming Events",
    "Insight",
  ];

  const redirect = [
    "/wallet",
    "/subscriptions",
    "/shared",
    "/upcoming",
    "/insight",
  ];

  const options = [
    <ListItem
      className={classes.ListItem}
      onClick={(event) => handleListItemClick(event, 0)}
    >
      <ListItemIcon className={classes.ListItemSize}>
        <CreditCardIcon />
      </ListItemIcon>
      <ListItemText className={classes.ListItemSize2} primary="My Wallet" />
    </ListItem>,

    <ListItem
      className={classes.ListItem}
      onClick={(event) => handleListItemClick(event, 1)}
    >
      <ListItemIcon className={classes.ListItemSize}>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText
        className={classes.ListItemSize2}
        primary="All Subscriptions"
      />
    </ListItem>,

    <ListItem
      className={classes.ListItem}
      onClick={(event) => handleListItemClick(event, 2)}
    >
      <ListItemIcon className={classes.ListItemSize}>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText
        className={classes.ListItemSize2}
        primary="Shared Subscriptions"
      />
    </ListItem>,

    <ListItem
      className={classes.ListItem}
      onClick={(event) => handleListItemClick(event, 3)}
    >
      <ListItemIcon className={classes.ListItemSize}>
        <EventNoteIcon />
      </ListItemIcon>
      <ListItemText
        className={classes.ListItemSize2}
        primary="Upcoming Events"
      />
    </ListItem>,

    <ListItem
      className={classes.ListItem}
      onClick={(event) => handleListItemClick(event, 4)}
    >
      <ListItemIcon className={classes.ListItemSize}>
        <EqualizerIcon />
      </ListItemIcon>
      <ListItemText className={classes.ListItemSize2} primary="Insight" />
    </ListItem>,
  ];

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <TextTypographyTitle>
            {menuTitleOptions[selectedIndex]}
          </TextTypographyTitle>
          <KeyboardArrowDownIcon
            style={{ color: "#7610EB", marginLeft: "10px", marginTop: "3px" }}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            {...{ to: redirect[index] }}
            component={Link}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
