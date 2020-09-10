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
  inputInput1: {
    padding: "10.5px 26px 10.5px 12px",
    fontSize: "14px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "20ch",
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
  Switchstyle: {
    height: "40px",
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
          <IconButton
            className={classes.highlightButton}
            disableRipple={true}
            onClick={handleClickOpen}
          >
            <AddRoundedIcon
              fontSize="small"
              alignItems="center"
              // alignSelf="flex-end"
            />
          </IconButton>
        </ArrowTooltip>
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
          <div className={classes.Dialog}>
            <DialogContent className={classes.Avatar}>
              <Typography align="center" className={classes.Title}>
                Add Subscriptions
              </Typography>
              <div className={classes.search1}>
                <div className={classes.searchIcon}>
                  <SearchRoundedIcon />
                </div>
                <InputBase
                  placeholder="Search Subscriptions"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput1,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div>
                <List className={classes.List}>
                  <ListSubheader component="div" id="nested-list-subheader">
                    <Typography className={classes.ListItemSize4}>
                      ALL
                    </Typography>
                  </ListSubheader>
                  {lists.map((name) => {
                    return (
                      <ListItem
                        button
                        className={classes.List}
                        onClick={() => {
                          handleClickOpen1();
                          handleClose();
                          changeName(name);
                        }}
                      >
                        <ListItemIcon className={classes.ListItemSize}>
                          <img
                            className={classes.imageIcon}
                            src={"/static/avatar/" + name + "[48].svg"}
                            alt="upcoming"
                          />
                        </ListItemIcon>
                        {name}
                        <ListItemSecondaryAction>
                          <img src="/static/icons/symbols/MovetoPage.svg" />
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </DialogContent>

            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
              disableRipple={true}
              disableFocusRipple={true}
            >
              <img src="static/icons/symbols/Exit.svg" />
            </IconButton>
          </div>
        </Dialog>

        <Dialog
          fullScreen={fullScreen}
          open={open1}
          onClose={() => {
            handleClickOpen();
            handleClose1();
          }}
        >
          <div className={classes.Dialog1}>
            <DialogContent className={classes.Avatar1}>
              <div className={classes.margins}>
                <Typography align="center" className={classes.Title}>
                  <img
                    className={classes.imageIcon}
                    src={"/static/avatar/" + temporalname + "[48].svg"}
                    alt="upcoming"
                  />
                </Typography>
                <Typography align="center" className={classes.Title}>
                  {temporalname}
                </Typography>
                <Typography align="center" className={classes.Title1}>
                  {plan}
                </Typography>
                <Typography align="center" className={classes.Title1}>
                  {price}
                </Typography>
              </div>
            </DialogContent>
            <div>
              <div className={classes.left}>
                <FormControl className={classes.formControl}>
                  <InputLabel shrink htmlFor="age-native-simple">
                    Plan
                  </InputLabel>
                  <Select
                    value={index}
                    onChange={(event) => {
                      handleIndex(event);
                    }}
                    displayEmpty
                    className={classes.selectEmpty}
                    label="hihi"
                    inputProps={{
                      name: "age",
                      id: "age-native-simple",
                    }}
                  >
                    <MenuItem value={0} disabled>
                      Select Plan
                    </MenuItem>
                    <MenuItem value={1}>Basic</MenuItem>
                    <MenuItem value={2}>Standard</MenuItem>
                    <MenuItem value={3}>Premium</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className={classes.left1}>
                <Grid container spacing={0} alignItems="center">
                  <Grid item className={classes.forgrid}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <AttachMoneyRoundedIcon />
                      </Grid>
                      <Grid item>
                        <InputLabel
                          shrink
                          htmlFor="standard-adornment-password"
                        >
                          Price
                        </InputLabel>
                        <TextField
                          id="standard-adornment-password"
                          disabled
                          value={price}
                          className={classes.inputmargin}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.forgrid1}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <UpdateRoundedIcon />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="standard-select-currency"
                          select
                          label="Cycle"
                          value={index}
                          onChange={(event) => {
                            handleIndex(event);
                          }}
                          className={classes.selectEmpty1}
                        >
                          <MenuItem value={1}>Monthly</MenuItem>
                          <MenuItem value={2}>Monthly</MenuItem>
                          <MenuItem value={3}>Monthly</MenuItem>
                        </TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.left}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <EventRoundedIcon />
                  </Grid>
                  <Grid item>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className={classes.left1}>
              <Box display="flex" p={1} padding={0} margin={0}>
                <Box p={1} flexGrow={1}>
                  <Typography className={classes.remind}>Remind Me</Typography>
                </Box>
                <Box p={1}>
                  <Switch
                    className={classes.Switchstyle}
                    checked={state.checkedA}
                    onChange={handleChangeSwitch}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>
              </Box>
            </div>
            <Box display="flex" justifyContent="center">
              <Box p={1}>
                <Button className={classes.ListItemSize5} variant="outlined">
                  Add subscriptions
                </Button>
              </Box>
            </Box>

            <IconButton
              aria-label="back"
              className={classes.closeButton1}
              onClick={() => {
                handleClickOpen();
                handleClose1();
              }}
              disableRipple={true}
              disableFocusRipple={true}
            >
              <img src="static/icons/symbols/Back.svg" />
            </IconButton>
          </div>
        </Dialog>
      </Toolbar>
    </div>
  );
}
