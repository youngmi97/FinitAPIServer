import React from "react";

import { fade, makeStyles } from "@material-ui/core/styles";
// import { ThemeProvider } from "react-bootstrap";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import IconButton from "@material-ui/core/IconButton";

import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SortRoundedIcon from "@material-ui/icons/SortRounded";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: 8,
    border: "1px solid #EFEFF4",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: `calc(1em-${theme.spacing(4)}px)`,
    width: 160,
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
    padding: theme.spacing(1, 1, 1, 0),
    padding: 11,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  highlightButton: {
    disableRipple: true,

    padding: 11,
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
    borderRadius: 8,
    color: theme.palette.grey.main,
    marginLeft: 2,
    marginRight: 2,
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar variant="dense">
        <IconButton edge="start" className={classes.regularButton}>
          <FormatListBulletedRoundedIcon fontSize="small" />
        </IconButton>
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
        <IconButton edge="end" className={classes.regularButton}>
          <FilterListRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton className={classes.regularButton}>
          <SortRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton className={classes.highlightButton}>
          <AddRoundedIcon
            fontSize="small"
            alignItems="center"
            alignSelf="flex-end"
          />
        </IconButton>
      </Toolbar>
    </div>
  );
}
