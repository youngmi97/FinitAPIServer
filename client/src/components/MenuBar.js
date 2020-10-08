import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Popper from "@material-ui/core/Popper";
import {
  Badge,
  IconButton,
  Avatar,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Link, useLocation } from "react-router-dom";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../context/auth";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: 24,
    height: 24,
  },
  middle: {
    width: 30,
    height: 30,
  },
  list: {
    backgroundColor: "#FFFFFF",
    width: 256,
    height: 280,
  },
  list1: {
    backgroundColor: "#FFFFFF",
    width: 376,
    height: 223,
  },
  shape: {
    backgroundColor: "#f7f7f7",
    width: 40,
    height: 40,
  },
  shapeCircle: {
    borderRadius: "50%",
  },
  ListItemSize: {
    minWidth: 36,
    marginLeft: 12,
    marginRight: 12,
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

  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const classes = useStyles();
  const [alarm, setAlarm] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  const path = location.pathname;
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  //const pathname = window.location.pathname;

  // Identify Login State
  const menuBar = user ? (
    <Menu
      secondary
      size="massive"
      style={{
        zIndex: 100,
        position: "fixed",
        height: "60px",
        width: "100%",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #D3D3D3",
      }}
    >
      <Menu.Item
        className={"logo"}
        name="Subscriptions"
        // active={activeItem === "home"}
        // onClick={handleItemClick}
        as={Link}
        to="/subscriptions"
      >
        <img
          style={{ height: "24px", width: "102px" }}
          alt="logo"
          src="LogoSurplus2.png"
        />
      </Menu.Item>

      <Menu.Menu position="right">
        {/* <Menu.Item
          style={{
            backgroundColor: "#7610EB",
            color: "#ffffff",
            alignSelf: "center",
            marginRight: "20px",
            fontSize: "14px",
            fontWeight: "400",
          }}
          name="logout"
          onClick={logout}
          as={Link}
          to="/"
        /> */}

        <Menu.Item style={{ margin: 10, padding: 0 }}>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Badge color="secondary" overlap="circle" badgeContent="">
                  <div className={clsx(classes.shape, classes.shapeCircle)}>
                    <IconButton
                      style={{
                        color: "#666666",
                        padding: "11px",
                      }}
                      {...bindTrigger(popupState)}
                    >
                      <NotificationsIcon style={{ fontSize: 16 }} />
                    </IconButton>
                  </div>
                </Badge>
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
                  style={{ marginTop: 20 }}
                >
                  <Box p={2} style={{ margin: 0, padding: 0 }}>
                    <List
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                      className={classes.list1}
                      style={{ margin: 0, padding: 16 }}
                    >
                      <ListSubheader
                        style={{
                          margin: 0,
                          padding: 0,
                          paddingLeft: 8,
                          paddingRight: 8,
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
                          <Box p={1} flexGrow={1} alignItems="center">
                            <Typography
                              style={{ fontSize: 14, color: "black" }}
                            >
                              NOTIFICATIONS
                            </Typography>
                          </Box>

                          <Box
                            p={1}
                            style={{ margin: 0, padding: 0 }}
                            alignItems="center"
                          >
                            <IconButton
                              style={{
                                margin: 0,
                                padding: 0,
                                width: 32,
                                height: 32,
                                backgroundColor: "#F7f7f7",
                              }}
                            >
                              <img
                                src="/static/icons/symbols/Setting.svg"
                                alt="wallet"
                                style={{
                                  margin: 0,
                                  padding: 0,
                                  marginLeft: 12,
                                  marginRight: 12,
                                }}
                              />
                            </IconButton>
                          </Box>
                        </Box>
                      </ListSubheader>
                      <ListItem
                        button
                        dense={true}
                        disableRipple={true}
                        className={classes.ListItemSize1}
                        style={{ margin: 0, padding: 0, marginTop: 16 }}
                      >
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                          p={1}
                          margin={0}
                          padding={0}
                        >
                          <Box p={1} style={{ margin: 0, padding: 0 }}>
                            <img
                              src="/static/icons/symbols/Notification Icon.svg"
                              alt="wallet"
                              style={{
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </Box>
                          <Box p={1} alignItems="center">
                            <Typography
                              style={{ fontSize: 14, color: "#000000" }}
                            >
                              Your Monthly Insights
                            </Typography>
                            <Typography
                              style={{ fontSize: 12, color: "#666666" }}
                            >
                              Click to review your monthly subscription insight
                            </Typography>
                          </Box>
                        </Box>
                      </ListItem>
                      <ListItem
                        button
                        dense={true}
                        disableRipple={true}
                        className={classes.ListItemSize1}
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
                          <Box p={1} style={{ margin: 0, padding: 0 }}>
                            <img
                              src="/static/icons/symbols/Surplus Favicon.svg"
                              alt="wallet"
                              style={{
                                margin: 0,
                                padding: 0,
                              }}
                            />
                          </Box>
                          <Box p={1} alignItems="center">
                            <Typography
                              style={{ fontSize: 14, color: "#000000" }}
                            >
                              Welcome to Surplus!
                            </Typography>
                            <Typography
                              style={{ fontSize: 12, color: "#666666" }}
                            >
                              Simply add your bank to start managing your
                              subscriptions!
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
        </Menu.Item>

        <Menu.Item style={{ margin: 10, padding: 0, marginRight: 20 }}>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <div {...bindTrigger(popupState)}>
                  <Button
                    style={{
                      margin: 0,
                      padding: 0,
                      textTransform: "capitalize",
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
                      <Box p={1} margin={0} padding={0}>
                        <IconButton
                          style={{
                            padding: "0px",
                            marginRight: 5,
                          }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatars/Ellipse13.svg"
                            className={classes.middle}
                          />
                        </IconButton>
                      </Box>
                      <Box p={1} margin={0} padding={0}>
                        <Typography style={{ fontSize: 14, color: "black" }}>
                          {user.name}
                        </Typography>
                      </Box>
                    </Box>
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
                  style={{ marginTop: 20 }}
                >
                  <Box p={2} style={{ margin: 0, padding: 0 }}>
                    <List
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                      className={classes.list}
                      style={{ margin: 0, padding: 16 }}
                    >
                      <ListSubheader style={{ margin: 0, padding: 0 }}>
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                          p={1}
                          margin={0}
                          padding={0}
                        >
                          <Box p={1} style={{ margin: 0, padding: 0 }}>
                            <Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatars/Ellipse13.svg"
                              className={classes.small}
                              style={{
                                margin: 0,
                                padding: 0,
                                marginLeft: 12,
                                marginRight: 12,
                              }}
                            />
                          </Box>
                          <Box p={1} alignItems="center">
                            <Typography
                              style={{
                                fontSize: 17,
                                color: "black",
                                textTransform: "capitalize",
                              }}
                            >
                              {user.name}
                            </Typography>
                          </Box>
                        </Box>
                      </ListSubheader>
                      <ListItem
                        button
                        dense={true}
                        disableRipple={true}
                        className={classes.ListItemSize1}
                        style={{ margin: 0, padding: 0, marginTop: 20 }}
                      >
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                          p={1}
                          margin={0}
                          padding={0}
                        >
                          <Box p={1} style={{ margin: 0, padding: 0 }}>
                            <img
                              src="/static/icons/symbols/Setting.svg"
                              alt="wallet"
                              style={{
                                margin: 0,
                                padding: 0,
                                marginLeft: 12,
                                marginRight: 12,
                              }}
                            />
                          </Box>
                          <Box p={1} alignItems="center">
                            <Typography
                              style={{ fontSize: 14, color: "#666666" }}
                            >
                              User Settings
                            </Typography>
                          </Box>
                        </Box>
                      </ListItem>
                      <ListItem
                        button
                        dense={true}
                        disableRipple={true}
                        className={classes.ListItemSize1}
                        style={{ margin: 0, padding: 0, marginTop: 4 }}
                      >
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                          p={1}
                          margin={0}
                          padding={0}
                        >
                          <Box p={1} style={{ margin: 0, padding: 0 }}>
                            <img
                              src="/static/icons/symbols/Track.svg"
                              alt="wallet"
                              style={{
                                margin: 0,
                                padding: 0,
                                marginLeft: 12,
                                marginRight: 12,
                              }}
                            />
                          </Box>
                          <Box p={1} alignItems="center">
                            <Typography
                              style={{ fontSize: 14, color: "#666666" }}
                            >
                              Tracked Accounts (4)
                            </Typography>
                          </Box>
                        </Box>
                      </ListItem>
                      <ListItem
                        button
                        dense={true}
                        disableRipple={true}
                        className={classes.ListItemSize1}
                        style={{ margin: 0, padding: 0, marginTop: 4 }}
                      >
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                          p={1}
                          margin={0}
                          padding={0}
                        >
                          <Box p={1} style={{ margin: 0, padding: 0 }}>
                            <img
                              src="/static/icons/symbols/Help.svg"
                              alt="wallet"
                              style={{
                                margin: 0,
                                padding: 0,
                                marginLeft: 12,
                                marginRight: 12,
                              }}
                            />
                          </Box>
                          <Box p={1} alignItems="center">
                            <Typography
                              style={{ fontSize: 14, color: "#666666" }}
                            >
                              Help and Support
                            </Typography>
                          </Box>
                        </Box>
                      </ListItem>
                      <ListItem
                        dense={true}
                        disableRipple={true}
                        className={classes.ListItemSize1}
                        style={{ margin: 0, padding: 0, marginTop: 16 }}
                      >
                        <Button
                          style={{
                            backgroundColor: "#7610EB",
                            color: "#ffffff",
                            alignSelf: "center",
                            width: 224,
                            height: 32,
                            fontSize: "14px",
                            fontWeight: 500,
                            textTransform: "capitalize",
                          }}
                          name="logout"
                          onClick={logout}
                          as={Link}
                          to="/"
                        >
                          Log out
                        </Button>
                      </ListItem>
                      <ListItem
                        dense={true}
                        disableRipple={true}
                        className={classes.ListItemSize1}
                        style={{ margin: 0, padding: 0, marginTop: 16 }}
                      >
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                          justifyContent="center"
                          p={1}
                          margin={0}
                          padding={0}
                          style={{
                            marginLeft: 20,
                            marginRight: 20,
                            width: 166,
                          }}
                        >
                          <Box
                            p={1}
                            margin={0}
                            padding={0}
                            style={{ width: 72 }}
                          >
                            <Button
                              style={{
                                backgroundColor: "#FFFFFF",
                                color: "#8A8A8F",
                                alignSelf: "center",
                                fontSize: "10px",
                                fontWeight: 400,
                                textTransform: "capitalize",
                                width: 72,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              Privacy Policy
                            </Button>
                          </Box>
                          <Box
                            p={1}
                            margin={0}
                            padding={0}
                            style={{ marginLeft: 8, marginRight: 8 }}
                            justifyContent="center"
                          >
                            <Typography
                              style={{ fontSize: "11px", color: "#8A8A8F" }}
                            >
                              •
                            </Typography>
                          </Box>
                          <Box
                            p={1}
                            margin={0}
                            padding={0}
                            style={{ width: 72 }}
                          >
                            <Button
                              style={{
                                backgroundColor: "#FFFFFF",
                                color: "#8A8A8F",
                                alignSelf: "center",
                                fontSize: "11px",
                                width: 90,
                                fontWeight: 400,
                                textTransform: "capitalize",
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              Terms of Service
                            </Button>
                          </Box>
                        </Box>
                      </ListItem>
                    </List>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  ) : (
    <div>
      {(() => {
        if (path == "/login") {
          return (
            <div
              style={{
                zIndex: 100,
                position: "fixed",
                height: "60px",
                width: "100%",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #D3D3D3",
              }}
            >
              <Menu
                secondary
                style={{
                  marginBottom: "0px",
                  backgroundColor: "#2f0459",
                  height: 60,
                }}
                size="massive"
              >
                <Menu.Item
                  className={"logo"}
                  name="home"
                  //active={activeItem === "home"}
                  //onClick={handleItemClick}
                  as={Link}
                  to="/"
                >
                  <img
                    style={{ height: "24px", width: "102px" }}
                    alt="logo"
                    src="LogoSurplus1.png"
                  />
                </Menu.Item>

                <Menu.Menu position="right">
                  <Menu.Item
                    style={{
                      fontSize: "14px",
                      color: "white",
                      fontWeight: "400",
                    }}
                    name="login"
                    //active={activeItem === "login"}
                    //onClick={handleItemClick}
                    as={Link}
                    to="/login"
                  />
                  <Menu.Item
                    style={{
                      backgroundColor: "#7610EB",
                      color: "#ffffff",
                      alignSelf: "center",
                      marginRight: "20px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                    position="right"
                    name="register"
                    //active={activeItem === "register"}
                    //onClick={handleItemClick}
                    as={Link}
                    to="/register"
                  />
                </Menu.Menu>
              </Menu>
            </div>
          );
        } else if (path == "/register") {
          return (
            <div
              style={{
                zIndex: 100,
                position: "fixed",
                height: "60px",
                width: "100%",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #D3D3D3",
              }}
            >
              <Menu
                secondary
                style={{
                  marginBottom: "0px",
                  backgroundColor: "#2f0459",
                  height: 60,
                }}
                size="massive"
              >
                <Menu.Item
                  className={"logo"}
                  name="home"
                  //active={activeItem === "home"}
                  //onClick={handleItemClick}
                  as={Link}
                  to="/"
                >
                  <img
                    style={{ height: "24px", width: "102px" }}
                    alt="logo"
                    src="LogoSurplus1.png"
                  />
                </Menu.Item>

                <Menu.Menu position="right">
                  <Menu.Item
                    style={{
                      fontSize: "14px",
                      color: "white",
                      fontWeight: "400",
                    }}
                    name="login"
                    //active={activeItem === "login"}
                    //onClick={handleItemClick}
                    as={Link}
                    to="/login"
                  />
                  <Menu.Item
                    style={{
                      backgroundColor: "#7610EB",
                      color: "#ffffff",
                      alignSelf: "center",
                      marginRight: "20px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                    position="right"
                    name="register"
                    //active={activeItem === "register"}
                    //onClick={handleItemClick}
                    as={Link}
                    to="/register"
                  />
                </Menu.Menu>
              </Menu>
            </div>
          );
        } else if (path == "/link") {
          return (
            <div
              style={{
                zIndex: 100,
                position: "fixed",
                height: "60px",
                width: "100%",
                backgroundColor: "#ffffff",
              }}
            ></div>
          );
        } else if (path == "/linkplaid") {
          return (
            <div
              style={{
                zIndex: 100,
                position: "fixed",
                height: "60px",
                width: "100%",
                backgroundColor: "#ffffff",
              }}
            ></div>
          );
        } else {
          return (
            <div
              style={{
                zIndex: 100,
                position: "fixed",
                height: "60px",
                width: "100%",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #D3D3D3",
              }}
            >
              <Menu
                secondary
                style={{ marginBottom: "0px", height: 60 }}
                size="massive"
              >
                <Menu.Item
                  className={"logo"}
                  name="home"
                  //active={activeItem === "home"}
                  //onClick={handleItemClick}
                  as={Link}
                  to="/"
                >
                  <img
                    style={{ height: "24px", width: "102px" }}
                    alt="logo"
                    src="LogoSurplus2.png"
                  />
                </Menu.Item>

                <Menu.Menu position="right">
                  <Menu.Item
                    style={{ fontSize: "14px", fontWeight: "400" }}
                    name="login"
                    //active={activeItem === "login"}
                    //onClick={handleItemClick}
                    as={Link}
                    to="/login"
                  />
                  <Menu.Item
                    style={{
                      backgroundColor: "#7610EB",
                      color: "#ffffff",
                      alignSelf: "center",
                      marginRight: "20px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                    position="right"
                    name="register"
                    //active={activeItem === "register"}
                    //onClick={handleItemClick}
                    as={Link}
                    to="/register"
                  />
                </Menu.Menu>
              </Menu>
            </div>
          );
        }
      })()}
    </div>
  );

  return menuBar;
}

export default MenuBar;
