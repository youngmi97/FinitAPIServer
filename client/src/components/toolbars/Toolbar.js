// import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";

import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

import Toolbar from "@material-ui/core/Toolbar";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SortRoundedIcon from "@material-ui/icons/SortRounded";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    bottom: 0,
  },
  marginStyle: {
    flexGrow: 1,
    display: "block",
  },
  search: {
    position: "relative",
    borderRadius: 8,
    border: "1px solid #EFEFF4",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      border: "1px solid #7610EB",
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 2,
    marginLeft: 2,
    height: "100%",
    width: "auto",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.grey.main,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: "11px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "12ch",
    "&:focus": {
      width: "20ch",
    },
  },
  highlightButton: {
    disableRipple: true,
    padding: "11px",
    height: "100%",
    borderRadius: 8,
    backgroundColor: theme.palette.primary.light,
    color: "white",
    "&:hover": {
      backgroundColor: "#9855E5",
      borderRadius: 8,
    },
    border: "1px solid #7610EB",
    marginLeft: 2,
    marginRight: 2,
  },
  regularButton: {
    padding: "11px",
    borderRadius: 8,
    // border: "1px solid #EFEFF4",
    color: theme.palette.grey.main,
    marginLeft: 2,
    marginRight: 2,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const useStylesArrow = makeStyles((theme) => ({
  arrow: {
    // color: theme.palette.common.black,
  },
  tooltip: {
    // backgroundColor: theme.palette.common.black,
    top: "-16px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: "12px",
  },
}));

function ArrowTooltip(props) {
  const classes = useStylesArrow();

  return <Tooltip arrow classes={classes} {...props} />;
}

export default function SubscriptionToolbar({ changeView }) {
  const classes = useStyles();
  const [listView, setListView] = React.useState(true);

  return (
    <div className={classes.root}>
      <Toolbar variant="dense">
        <ArrowTooltip title="Change View" TransitionComponent={Fade}>
          <IconButton
            edge="start"
            className={classes.regularButton}
            onClick={() => {
              changeView();
              setListView(!listView);
            }}
          >
            {listView ? (
              <FormatListBulletedRoundedIcon fontSize="small" noWrap />
            ) : (
              <ViewModuleRoundedIcon fontSize="small" />
            )}
          </IconButton>
        </ArrowTooltip>
        <Box className={classes.marginStyle} noWrap></Box>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchRoundedIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <ArrowTooltip title="Filter" TransitionComponent={Fade}>
          <IconButton className={classes.regularButton}>
            <FilterListRoundedIcon fontSize="small" />
          </IconButton>
        </ArrowTooltip>
        <ArrowTooltip title="Sort" TransitionComponent={Fade}>
          <IconButton className={classes.regularButton}>
            <SortRoundedIcon fontSize="small" />
          </IconButton>
        </ArrowTooltip>
        <ArrowTooltip title="Add Subscription" TransitionComponent={Fade}>
          <IconButton className={classes.highlightButton}>
            <AddRoundedIcon
              fontSize="small"
              alignItems="center"
              // alignSelf="flex-end"
            />
          </IconButton>
        </ArrowTooltip>
      </Toolbar>
    </div>
  );
}
