// import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import UpdateRoundedIcon from "@material-ui/icons/UpdateRounded";
import Button from "@material-ui/core/Button";
import {
  fade,
  makeStyles,
  withStyles,
  useTheme,
} from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";

import FormHelperText from "@material-ui/core/FormHelperText";

import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DialogContent from "@material-ui/core/DialogContent";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Toolbar from "@material-ui/core/Toolbar";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import React from "react";
import { ButtonBase, Typography, Avatar, Box } from "@material-ui/core";
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
    backgroundColor: "#fafafa",
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
  Dialog: {
    minWidth: "375px",
    height: "600px",
  },
  Dialog1: {
    width: "448px",
    height: "563px",
  },
  Avatar: {
    marginTop: "24px",
  },
  Avatar1: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    height: 183,
  },
  marginStyle: {
    flexGrow: 1,
    display: "block",
  },
  search: {
    position: "relative",
    borderRadius: 8,
    border: "1px solid #EFEFF4",
    backgroundColor: "white",
    marginRight: 2,
    height: "40px",
    width: "auto",
  },
  search1: {
    position: "relative",
    borderRadius: 8,
    border: "1px solid #EFEFF4",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: 2,
    marginTop: 12,
    height: "100%",
    width: "auto",
    "&:hover": {
      borderRadius: 8,
      // backgroundColor: fade(theme.palette.common.white, 0.25),
      // border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: "0 0 0 0.2rem rgba(118, 16, 235, 0.25)",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "384px",
    marginTop: 4,
  },
  selectEmpty: {
    width: 384,
  },
  selectEmpty1: {
    width: 150,
  },
  left: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  left1: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 20,
  },
  forgrid: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    width: 188,
    height: 56,
    marginRight: 4,
  },
  forgrid1: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    width: 188,
    height: 56,
    marginLeft: 4,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "40px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.grey.main,
  },
  inputRoot: {
    color: "inherit",
    height: "100%",
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
    "&:hover": {
      borderRadius: 8,
      // backgroundColor: fade(theme.palette.common.white, 0.25),
      // border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: "0 0 0 0.2rem rgba(118, 16, 235, 0.25)",
    },
    "&:focus": {
      width: "20ch",
      borderRadius: 8,
      boxShadow: "0 0 0 0.2rem rgba(118, 16, 235, 0.25)",
    },
  },
  inputInput1: {
    padding: "10.5px 26px 10.5px 12px",
    fontSize: "14px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "20ch",
  },

  Switchstyle: {
    height: "40px",
  },
  regularButton: {
    padding: "9.5px",
    height: "100%",
    borderRadius: 8,
    margin: theme.spacing(1),
    // border: "1px solid #EFEFF4",
    color: theme.palette.grey.main,
    backgroundColor: "white",
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(239, 239, 244, 0.25)",
    },
  },
  highlightButton: {
    padding: "9.5px",
    height: "40px",
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
  sortButton: {
    padding: "9.5px",
    borderRadius: "8px 8px 8px 8px",
    margin: theme.spacing(1),
    color: theme.palette.grey.main,
    backgroundColor: "white",
  },
  formControl: {
    minWidth: 120,
  },
  sortStyle: {
    width: "fit-content",
    borderRadius: 8,
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
    backgroundColor: "#FFFFFF",
  },
  margins: {
    marginTop: 24,
  },
  Title: {
    fontSize: "24px",
    flexGrow: 1,
  },
  Title1: {
    fontSize: "14px",
    color: "#666666",
    flexGrow: 1,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    fontSize: 32,
    "&:hover, &:focus": {
      backgroundColor: "#ffffff",
      borderColor: "#ffffff",
    },
  },
  closeButton1: {
    position: "absolute",
    left: theme.spacing(1),
    top: theme.spacing(1),
    fontSize: 32,
    "&:hover, &:focus": {
      backgroundColor: "#ffffff",
      borderColor: "#ffffff",
    },
  },
  ListItemSize4: {
    fontSize: 11,
    height: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  inputmargin: {
    margin: 0,
    height: 40,
  },
  remind: {
    fontSize: 16,
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
    width: "80px",
    textAlign: "center",
  },
}));

const useStylesArrow2 = makeStyles((theme) => ({
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
    width: "90px",
    textAlign: "center",
  },
}));
const useStylesArrow3 = makeStyles((theme) => ({
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
    backgroundColor: "#ffffff",
  },
  input: {
    borderRadius: 8,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    fontSize: 16,
    backgroundColor: "#ffffff",
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

function ArrowTooltip2(props) {
  const classes = useStylesArrow2();

  return <Tooltip arrow classes={classes} {...props} />;
}
function ArrowTooltip3(props) {
  const classes = useStylesArrow3();

  return <Tooltip arrow classes={classes} {...props} />;
}

export default function SubscriptionToolbar({
  changeView,
  changeSort,
  changeKind,
}) {
  const classes = useStyles();
  const [listView, setListView] = React.useState(1);
  const [Value, setValue] = React.useState("Alphabetical");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [secondary] = React.useState(false);
  const [sort, setSort] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [plan, setPlan] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [temporalname, setName] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [selectedDate, handleDateChange] = React.useState(new Date());

  const [open1, setOpen1] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    changeKind(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const changeName = (name) => {
    setName(name);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleIndex = (event) => {
    setIndex(event.target.value);
    setPlan(Netflix_plan[event.target.value]);
    setPrice(Netflix_price[event.target.value]);
  };

  const lists = [
    "Netflix",
    "Disney Plus",
    "Apple TV Plus",
    "Hulu",
    "Spotify",
    "Youtube",
    "Notion",
    "Amazon",
    "Twitch",
  ];
  lists.sort();

  const Netflix_plan = ["", "Basic", "Standard", "Premium"];
  const Netflix_price = ["", "$8.99", "$12.99", "$15.99"];

  return (
    <div className={classes.root}>
      <Toolbar variant="dense">
        <Grid container alignItems="center" className={classes.sortStyle}>
          <ArrowTooltip
            style={{ backgroundColor: "#ffffff" }}
            title={listView ? "List View" : "Card View"}
            TransitionComponent={Fade}
            enterDelay={500}
            enterNextDelay={500}
          >
            <IconButton
              edge="start"
              className={classes.sortButton}
              disableRipple={true}
              onClick={() => {
                changeView();
                setListView(!listView);
              }}
            >
              {listView ? (
                <img src="static/icons/symbols/ListView.svg"></img>
              ) : (
                <img src="static/icons/symbols/GridView.svg"></img>
              )}
            </IconButton>
          </ArrowTooltip>
          <FormControl variant="outlined">
            <Select
              labelId="customized-select-label"
              id="customized-select"
              defaultValue={"Alphabetical"}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem
                value={"Alphabetical"}
                className={classes.menuItemStyle}
              >
                Alphabetical
              </MenuItem>
              <MenuItem value={"Price"} className={classes.menuItemStyle}>
                Price
              </MenuItem>
              <MenuItem value={"Date Added"} className={classes.menuItemStyle}>
                Date Added
              </MenuItem>
            </Select>
          </FormControl>
          {/* <Divider orientation="vertical" flexItem /> */}
          <ArrowTooltip2
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
          </ArrowTooltip2>
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
      </Toolbar>
    </div>
  );
}
