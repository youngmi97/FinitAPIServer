// import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";

import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

import Toolbar from "@material-ui/core/Toolbar";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import React from "react";

//Sort
import FormControl from "@material-ui/core/FormControl";

import InputBase from "@material-ui/core/InputBase";
import { Select } from "@material-ui/core";

import MenuItem from "@material-ui/core/MenuItem";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

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
    marginRight: 2,
    height: "100%",
    width: "auto",
    "&:hover": {
      borderRadius: 8,
      // backgroundColor: fade(theme.palette.common.white, 0.25),
      // border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: "0 0 0 0.2rem rgba(118, 16, 235, 0.25)",
    },
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
    alignItems: "center",
    justifyItems: "center",
    borderRadius: 8,
  },
  inputInput: {
    padding: "10.5px 26px 10.5px 12px",
    fontSize: 16,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "12ch",
    "&:focus": {
      width: "20ch",
    },
  },
  highlightButton: {
    padding: "11px",
    height: "100%",
    borderRadius: 8,
    backgroundColor: theme.palette.primary.light,
    color: "white",
    border: "1px solid #7610EB",
    margin: theme.spacing(1),
    "&:hover, &:focus": {
      backgroundColor: "#7C45BA",
      borderColor: "#5C0CB8",
    },
  },
  regularButton: {
    padding: "11px",
    marginRight: theme.spacing(1),
    borderRadius: 8,
    // border: "1px solid #EFEFF4",
    color: theme.palette.grey.main,
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(239, 239, 244, 0.25)",
    },
  },
  sortButton: {
    padding: "11px",
    borderRadius: "0px 8px 8px 0px",
    color: theme.palette.grey.main,
  },
  formControl: {
    minWidth: 120,
  },
  sortStyle: {
    width: "fit-content",
    borderRadius: 8,
    height: 40,
  },
  menuItemStyle: {
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

const BootstrapInput = withStyles((theme) => ({
  root: {
    height: "40px",
    width: "auto",
    borderRadius: 8,
  },
  input: {
    borderRadius: 8,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    fontSize: 16,
    // color: "#666666",
    padding: "10.5px 26px 10.5px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover, &:focus": {
      borderRadius: 8,
      // border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: "0 0 0 0.2rem rgba(118, 16, 235, 0.25)",
    },
  },
}))(InputBase);

function ArrowTooltip(props) {
  const classes = useStylesArrow();

  return <Tooltip arrow classes={classes} {...props} />;
}

export default function SubscriptionToolbar({ changeView, changeSort }) {
  const classes = useStyles();
  const [listView, setListView] = React.useState(true);
  const [setValue] = React.useState("");
  const [sort, setSort] = React.useState(true);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Toolbar variant="dense">
        <ArrowTooltip
          title={listView ? "List View" : "Card View"}
          TransitionComponent={Fade}
          enterDelay={500}
        >
          <IconButton
            edge="start"
            className={classes.regularButton}
            disableRipple={true}
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
        </ArrowTooltip>
        <Grid container alignItems="center" className={classes.sortStyle}>
          <FormControl variant="outlined">
            <Select
              labelId="customized-select-label"
              id="customized-select"
              defaultValue={0}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value={0} className={classes.menuItemStyle}>
                Alphabetical
              </MenuItem>
              <MenuItem value={10} className={classes.menuItemStyle}>
                Price
              </MenuItem>
              <MenuItem value={20} className={classes.menuItemStyle}>
                Date Added
              </MenuItem>
            </Select>
          </FormControl>
          <Divider orientation="vertical" flexItem />
          <ArrowTooltip
            title={sort ? "Ascending" : "Descending"}
            TransitionComponent={Fade}
            margin={0}
          >
            <IconButton
              className={classes.sortButton}
              disableRipple={true}
              onChange={handleChange}
              onClick={() => {
                setSort(!sort);
                changeSort();
              }}
            >
              {sort ? (
                <ArrowUpwardRoundedIcon fontSize="small" />
              ) : (
                <ArrowDownwardRoundedIcon fontSize="small" />
              )}
            </IconButton>
          </ArrowTooltip>
        </Grid>
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

        <ArrowTooltip
          title="Add Subscription"
          TransitionComponent={Fade}
          enterDelay={500}
        >
          <IconButton className={classes.highlightButton} disableRipple={true}>
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
