import React from "react";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import UpdateRoundedIcon from "@material-ui/icons/UpdateRounded";
import Switch from "@material-ui/core/Switch";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useTheme, makeStyles, fade } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

import InputBase from "@material-ui/core/InputBase";
import { Select } from "@material-ui/core";

import MenuItem from "@material-ui/core/MenuItem";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { ButtonBase, Typography, Avatar, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "590px",
    height: "420px",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    right: "40px",
    width: 24,
    height: 24,
    minWidth: 24,
    maxWidth: 24,
  },
  overlay1: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: 24,
    height: 24,
    minWidth: 24,
    maxWidth: 24,
  },
  Avatar: {
    margin: "8px",
  },
  Avatar1: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    height: 183,
  },
  List: {
    padding: 0,
    marginTop: 8,
  },
  List1: {
    padding: 0,
    marginTop: 6,
  },
  he: { height: 70 },
  ListItemSize: {
    color: "Black",
    fontWeight: 700,
    fontSize: "24px",
  },
  ListItemSize1: {
    color: "#666666",
    fontSize: "14px",
  },
  ListItemSize2: {
    color: "Black",
    fontWeight: 100,
    fontSize: "14px",
  },
  ListItemSize3: {
    color: "Black",
    fontWeight: 600,
    fontSize: "14px",
    marginTop: "69px",
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
  ListItemSize4: {
    color: "Black",
    fontWeight: 600,
    fontSize: "14px",
    marginTop: "24px",
  },

  rect: {
    width: theme.spacing(6),
    height: theme.spacing(4),
    marginRight: 8,
    marginBottom: 8,
  },
  popover: {
    backgroundColor: "#FFFFFF",
    width: 198,
    height: 80,
  },
  selectEmpty: {
    width: 384,
  },
  selectEmpty1: {
    width: 150,
  },
  Dialog1: {
    width: "448px",
    height: "563px",
  },
  poplist: {
    height: 32,
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
  search: {
    position: "relative",
    borderRadius: 8,
    border: "1px solid #EFEFF4",
    backgroundColor: "white",
    marginRight: 2,
    height: "40px",
    width: "auto",
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
    margin: theme.spacing(1),
    minWidth: "384px",
    marginTop: 4,
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
    minWidth: "330px",
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

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open1, setOpen1] = React.useState(false);
  const [secondary] = React.useState(false);
  const handleClose1 = () => {
    setOpen1(false);
  };
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
  const backgrounds = {
    Aaptiv: "#FFFFFF",
    Adobe: "#E6001F",
    Amazon: "#FF9201",
    AppleMusic: "linear-gradient(0deg, #FA233B 0.39%, #FB5C74 97.84%)",
    AppleTV: "#FFFFFF",
    AudiSelect: "#FFFFFF",
    Avast: "#160e53",

    BarkBox: "#46b0df",
    BirchBox: "#231f20",
    Blinkist: "#FFFFFF",
    Bloomberg: "#FFFFFF",
    BlueApron: "#FFFFFF",

    Codeacademy: "#FFFFFF",
    Coursera: "#FFFFFF",

    DisneyPlus: "#1F2161",
    DollarShaveClub: "#FFFFFF",
    DropBox: "#FFFFFF",

    Economist: "#e3120b",
    Equinox: "#000000",

    Glo: "#FFFFFF",
    GoogleDrive: "#FFFFFF",
    GooglePlayPass: "#FFFFFF",
    Grammarly: "FFFFFF",

    HelloFresh: "#91c11e",
    Hulu: "#000000",

    iCloud: "#FFFFFF",
    Ipsy: "#f5978d",

    JetBrains: "#FFFFFF",

    LeetCode: "#FFFFFF",
    LinkedIn: "#0077B4",

    Todist: "#E44332",
    Twitch: "#9147FF",

    Medium: "#FFFFFF",
    Miro: "#ffd02f",

    Netflix: "#000000",
    Notion: "#FFFFFF",

    Office365: "#FFFFFF",
    OnePassword: "#FFFFFF",

    Peloton: "#000000",
    PillPack: "#FFFFFF",
    Play: "#FFFFFF",
    Protopie: "#FFFFFF",

    Skillshare: "#FFFFFF",
    Spotify: "#000000",
    StitchFix: "#FFFFFF",
    SurfAir: "#11253C",
    Swit: "#ff595d",

    Xbox: "#107C10",

    Youtube: "#FF0000",

    ZipCar: "#FFFFFF",
  };

  function get_date(today, day) {
    return parseInt((day - today) / 86400000);
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [plan, setPlan] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [temporalname, setName] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const handleIndex = (event) => {
    setIndex(event.target.value);
    setPlan(Netflix_plan[event.target.value]);
    setPrice(Netflix_price[event.target.value]);
  };
  const Netflix_plan = ["", "Basic", "Standard", "Premium"];
  const Netflix_price = ["", "$8.99", "$12.99", "$15.99"];
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    checkedA: true,
  });
  return (
    <div>
      <Dialog
        fullScreen={props.fullScreen}
        open={props.open}
        onClose={props.handleClose}
        margin="100"
      >
        <div className={classes.root}>
          <DialogTitle className={classes.Avatar}>
            <Avatar
              variant="square"
              src={"/static/avatar/" + props.name + "/[32].svg"}
            />

            <Box
              display="flex"
              alignItems="flex-end"
              p={1}
              className={classes.List1}
            >
              <Box p={1} flexGrow={1} className={classes.List1}>
                <div className={classes.he}>
                  <Typography className={classes.ListItemSize}>
                    {props.name}
                  </Typography>
                  <Typography className={classes.ListItemSize1}>
                    {props.plan}, {props.period} payment
                  </Typography>
                </div>
              </Box>
              {/* <Box p={1}>
                <AvatarGroup max={4}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatars/Ellipse 13.svg"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatars/Ellipse 14.svg"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="/static/images/avatars/Ellipse 13.svg"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatars/Ellipse 14.svg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatars/Ellipse 14.svg"
                  />
                </AvatarGroup>
              </Box>*/}
            </Box>
          </DialogTitle>
          <DialogContent className={classes.Avatar}>
            <Typography className={classes.ListItemSize2}>
              {props.price}
            </Typography>
            <Typography className={classes.ListItemSize1}>
              Next payment is in {props.date} days, scheduled for{" "}
              {monthNames[props.day.getMonth()]} {props.day.getDate()},{" "}
              {props.day.getFullYear()}.
            </Typography>
            <Typography className={classes.ListItemSize3}>
              Payment Method
            </Typography>

            <List className={classes.List}>
              <ListItem divider className={classes.List}>
                <Avatar
                  variant="square"
                  className={classes.rect}
                  src="static/images/Visa.svg"
                ></Avatar>
                <ListItemText
                  primary="VISA ****-****-****-9322"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            </List>
            <Typography className={classes.ListItemSize4}>
              Purchase History
            </Typography>
          </DialogContent>
        </div>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <div>
                <Button
                  className={classes.overlay}
                  style={{ padding: 0, maxWidth: 24, margin: 0 }}
                  {...bindTrigger(popupState)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
                      fill="#666666"
                    />
                  </svg>
                </Button>
              </div>

              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Box p={2} style={{ margin: 0, padding: 0 }}>
                  <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.popover}
                    style={{ margin: 0, padding: 8 }}
                  >
                    <ListItem
                      button
                      dense={true}
                      disableRipple={true}
                      className={classes.poplist}
                      style={{ margin: 0, padding: 0 }}
                      onClick={() => {
                        setOpen1(true);
                        props.handleClose();
                      }}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        p={1}
                        margin={0}
                        padding={0}
                      >
                        <Box p={1} alignItems="center">
                          <Typography style={{ fontSize: 14, color: "black" }}>
                            Edit Subscription
                          </Typography>
                        </Box>
                      </Box>
                    </ListItem>
                    <ListItem
                      button
                      dense={true}
                      disableRipple={true}
                      className={classes.poplist}
                      style={{ margin: 0, padding: 0 }}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        p={1}
                        margin={0}
                        padding={0}
                      >
                        <Box p={1} alignItems="center">
                          <Typography style={{ fontSize: 14, color: "Red" }}>
                            Delete Subscription
                          </Typography>
                        </Box>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>

        <Button
          className={classes.overlay1}
          style={{ padding: 0, margin: 0, maxWidth: 24, height: 24 }}
          onClick={() => {
            props.handleClose();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.97803 16.0908C6.729 16.3398 6.7207 16.7798 6.97803 17.0371C7.24365 17.2944 7.67529 17.2944 7.93262 17.0371L12 12.9614L16.0757 17.0371C16.3247 17.2944 16.7646 17.2944 17.022 17.0371C17.2793 16.7715 17.2793 16.3398 17.022 16.0908L12.9463 12.0151L17.022 7.94775C17.2793 7.69043 17.2876 7.25049 17.022 6.99316C16.7563 6.74414 16.3247 6.74414 16.0757 6.99316L12 11.0688L7.93262 6.99316C7.67529 6.74414 7.23535 6.73584 6.97803 6.99316C6.729 7.25879 6.729 7.69043 6.97803 7.94775L11.0537 12.0151L6.97803 16.0908Z"
              fill="#666666"
            />
          </svg>
        </Button>
      </Dialog>
      <Dialog
        fullScreen={fullScreen}
        open={open1}
        onClose={() => {
          setOpen1(false);
          props.handleClickOpen();
        }}
      >
        <div className={classes.Dialog1}>
          <DialogContent className={classes.Avatar1}>
            <div className={classes.margins}>
              <Typography align="center" className={classes.Title}>
                <img
                  className={classes.imageIcon}
                  src={"/static/avatar/" + props.name + "/[48].svg"}
                  alt="upcoming"
                />
              </Typography>
              <Typography align="center" className={classes.Title}>
                {props.name}
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
                      <InputLabel shrink htmlFor="standard-adornment-password">
                        Price
                      </InputLabel>
                      <TextField
                        id="standard-adornment-password"
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
                Edit subscriptions
              </Button>
            </Box>
          </Box>

          <IconButton
            aria-label="back"
            className={classes.closeButton1}
            onClick={() => {
              props.handleClickOpen();
              handleClose1();
            }}
            disableRipple={true}
            disableFocusRipple={true}
          >
            <img src="static/icons/symbols/Back.svg" />
          </IconButton>
        </div>
      </Dialog>
    </div>
  );
}
