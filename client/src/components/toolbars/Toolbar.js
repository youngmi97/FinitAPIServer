import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
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
  },
  search: {
    position: "relative",
    borderRadius: 8,
    border: "1px solid #EFEFF4",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    display: "flex",
    flexWrap: "wrap",
    "&:hover": {
      border: "1px solid #7610EB",
    },
    marginLeft: "auto",
    minWidth: 160,
    alignItems: "center",
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "50%",
    "&:focus": {
      width: "100%",
    },
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

export default function SubscriptionToolbar({ changeView }) {
  const classes = useStyles();
  const [listView, setListView] = React.useState(true);

  return (
    <div className={classes.root}>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          className={classes.regularButton}
          onClick={() => {
            changeView();
            setListView(!listView);
          }}
        >
          {listView ? (
            <FormatListBulletedRoundedIcon fontSize="small" />
          ) : (
            <ViewModuleRoundedIcon fontSize="small" />
          )}
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
            // alignSelf="flex-end"
          />
        </IconButton>
      </Toolbar>
    </div>
  );
}
