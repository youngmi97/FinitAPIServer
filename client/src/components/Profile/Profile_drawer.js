import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { fade, makeStyles } from "@material-ui/core/styles";
import React from "react";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import AddSubscription from "../pop-ups/Add";

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
    backgroundColor: "White",
    padding: 12,
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
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
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
    minWidth: 24,
    "& span, & svg": {
      fontSize: "24px",
    },
  },
  AddSize: {
    minWidth: 24,
    "& span, & svg": {
      fontSize: "24px",
    },
  },
  AddSubs: {
    width: 224,
    height: 32,
    marginTop: 4,
    borderRadius: 6,
    paddingLeft: 12,
    paddingTop: 4,
    paddingRight: 4,
  },
  ListItemSize1: {
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 6,
    paddingLeft: 12,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 4,
  },
  ListItemSize2: {
    marginLeft: 12,
    padding: 0,
    "& span, & svg": {
      fontSize: "14px",
      color: "#666666",
    },
  },
  addsubstext: {
    marginLeft: 12,
    padding: 0,
    "& span, & svg": {
      fontSize: "14px",
      color: "#7410EB",
    },
  },
  ListItemSize3: {
    marginLeft: 12,
    padding: 0,
    "& span, & svg": {
      fontSize: "14px",
      color: "#000000",
    },
  },
  ListItemSize4: {
    fontSize: 11,
    height: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  item: {
    padding: 0,
  },
}));

export default function List_Active(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleListItemClick = (event, index) => {
    props.setDrawer(index);
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography className={classes.ListItemSize4}>
            USER SETTINGS
          </Typography>
        </ListSubheader>

        {(() => {
          if (props.drawer == 0) {
            return (
              <ListItem
                button
                selected={props.drawer === 0}
                onClick={(event) => handleListItemClick(event, 0)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.9917 5.93213C7.38623 5.93213 8.61475 4.67871 8.61475 3.04346C8.61475 1.4165 7.38623 0.237793 5.9917 0.237793C4.60547 0.237793 3.37695 1.44971 3.37695 3.06006C3.37695 4.67871 4.60547 5.93213 5.9917 5.93213ZM1.98242 11.9917H10.0093C11.1216 11.9917 11.4868 11.6763 11.4868 11.1035C11.4868 9.41846 9.37842 7.09424 5.9917 7.09424C2.61328 7.09424 0.504883 9.41846 0.504883 11.1035C0.504883 11.6763 0.870117 11.9917 1.98242 11.9917Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="Account Info"
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                selected={props.drawer === 0}
                onClick={(event) => handleListItemClick(event, 0)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.9917 5.93213C7.38623 5.93213 8.61475 4.67871 8.61475 3.04346C8.61475 1.4165 7.38623 0.237793 5.9917 0.237793C4.60547 0.237793 3.37695 1.44971 3.37695 3.06006C3.37695 4.67871 4.60547 5.93213 5.9917 5.93213ZM1.98242 11.9917H10.0093C11.1216 11.9917 11.4868 11.6763 11.4868 11.1035C11.4868 9.41846 9.37842 7.09424 5.9917 7.09424C2.61328 7.09424 0.504883 9.41846 0.504883 11.1035C0.504883 11.6763 0.870117 11.9917 1.98242 11.9917Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="Account Info"
                />
              </ListItem>
            );
          }
        })()}

        {(() => {
          if (props.drawer == 1) {
            return (
              <ListItem
                button
                selected={props.drawer === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 13.5977C6.09131 13.5977 6.24902 13.5728 6.43164 13.4814C10.1587 11.5972 11.3789 10.5596 11.3789 8.15234V3.23828C11.3789 2.57422 11.0635 2.3667 10.5571 2.15088C9.89307 1.86865 7.20361 0.905762 6.54785 0.681641C6.37354 0.623535 6.18262 0.590332 6 0.590332C5.80908 0.590332 5.61816 0.631836 5.44385 0.681641C4.77979 0.880859 2.09863 1.87695 1.43457 2.15088C0.928223 2.3584 0.612793 2.57422 0.612793 3.23828V8.15234C0.612793 10.5596 1.90771 11.4644 5.56836 13.4814C5.74268 13.5811 5.90039 13.5977 6 13.5977Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="Security and Login"
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                selected={props.drawer === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 13.5977C6.09131 13.5977 6.24902 13.5728 6.43164 13.4814C10.1587 11.5972 11.3789 10.5596 11.3789 8.15234V3.23828C11.3789 2.57422 11.0635 2.3667 10.5571 2.15088C9.89307 1.86865 7.20361 0.905762 6.54785 0.681641C6.37354 0.623535 6.18262 0.590332 6 0.590332C5.80908 0.590332 5.61816 0.631836 5.44385 0.681641C4.77979 0.880859 2.09863 1.87695 1.43457 2.15088C0.928223 2.3584 0.612793 2.57422 0.612793 3.23828V8.15234C0.612793 10.5596 1.90771 11.4644 5.56836 13.4814C5.74268 13.5811 5.90039 13.5977 6 13.5977Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="Security and Login"
                />
              </ListItem>
            );
          }
        })()}
        {(() => {
          if (props.drawer == 2) {
            return (
              <ListItem
                button
                selected={props.drawer === 2}
                onClick={(event) => handleListItemClick(event, 2)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.92041 13.166H8.08789C8.92627 13.166 9.34131 12.7427 9.34131 11.8296V7.09814C9.34131 6.29297 9.01758 5.86133 8.34521 5.77832V4.10156C8.34521 1.54492 6.66846 0.407715 5 0.407715C3.33984 0.407715 1.65479 1.54492 1.65479 4.10156V5.81982C1.04883 5.94434 0.658691 6.35938 0.658691 7.09814V11.8296C0.658691 12.7427 1.07373 13.166 1.92041 13.166ZM2.8584 3.92725C2.8584 2.3335 3.87939 1.54492 5 1.54492C6.12061 1.54492 7.1499 2.3335 7.1499 3.92725V5.77002L2.8584 5.77832V3.92725Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="Privacy"
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                selected={props.drawer === 2}
                onClick={(event) => handleListItemClick(event, 2)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.92041 13.166H8.08789C8.92627 13.166 9.34131 12.7427 9.34131 11.8296V7.09814C9.34131 6.29297 9.01758 5.86133 8.34521 5.77832V4.10156C8.34521 1.54492 6.66846 0.407715 5 0.407715C3.33984 0.407715 1.65479 1.54492 1.65479 4.10156V5.81982C1.04883 5.94434 0.658691 6.35938 0.658691 7.09814V11.8296C0.658691 12.7427 1.07373 13.166 1.92041 13.166ZM2.8584 3.92725C2.8584 2.3335 3.87939 1.54492 5 1.54492C6.12061 1.54492 7.1499 2.3335 7.1499 3.92725V5.77002L2.8584 5.77832V3.92725Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="Privacy"
                />
              </ListItem>
            );
          }
        })()}
      </List>
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        {(() => {
          if (props.drawer == 3) {
            return (
              <ListItem
                button
                selected={props.drawer === 3}
                onClick={(event) => handleListItemClick(event, 3)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.92822 11.3647H12.0718C12.7773 11.3647 13.1924 11.0161 13.1924 10.4849C13.1924 9.8374 12.5117 9.23975 11.939 8.65869C11.5654 8.28516 11.416 7.51318 11.3994 6.94043C11.3911 4.24268 10.7271 2.43311 8.95068 1.75244C8.67676 0.922363 7.99609 0.225098 7 0.225098C6.00391 0.225098 5.32324 0.922363 5.04932 1.75244C3.27295 2.43311 2.60889 4.24268 2.59229 6.94043C2.58398 7.51318 2.42627 8.28516 2.06104 8.65869C1.47998 9.23975 0.807617 9.8374 0.807617 10.4849C0.807617 11.0161 1.22266 11.3647 1.92822 11.3647ZM7 14.104C8.13721 14.104 8.96729 13.2656 9.04199 12.3359H4.95801C5.02441 13.2656 5.86279 14.104 7 14.104Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="Notifications"
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                selected={props.drawer === 3}
                onClick={(event) => handleListItemClick(event, 3)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.92822 11.3647H12.0718C12.7773 11.3647 13.1924 11.0161 13.1924 10.4849C13.1924 9.8374 12.5117 9.23975 11.939 8.65869C11.5654 8.28516 11.416 7.51318 11.3994 6.94043C11.3911 4.24268 10.7271 2.43311 8.95068 1.75244C8.67676 0.922363 7.99609 0.225098 7 0.225098C6.00391 0.225098 5.32324 0.922363 5.04932 1.75244C3.27295 2.43311 2.60889 4.24268 2.59229 6.94043C2.58398 7.51318 2.42627 8.28516 2.06104 8.65869C1.47998 9.23975 0.807617 9.8374 0.807617 10.4849C0.807617 11.0161 1.22266 11.3647 1.92822 11.3647ZM7 14.104C8.13721 14.104 8.96729 13.2656 9.04199 12.3359H4.95801C5.02441 13.2656 5.86279 14.104 7 14.104Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="Notifications"
                />
              </ListItem>
            );
          }
        })()}

        {(() => {
          if (props.drawer == 4) {
            return (
              <ListItem
                button
                selected={props.drawer === 4}
                onClick={(event) => handleListItemClick(event, 4)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.06543 14.0127H6.38574C6.00391 13.6807 5.68018 13.2739 5.44775 12.8174H3.13184C2.50928 12.8174 2.17725 12.4937 2.17725 11.896V2.15088C2.17725 1.55322 2.50098 1.21289 3.13184 1.21289H9.88867C10.4863 1.21289 10.835 1.55322 10.835 2.15088V7.42188C11.2915 7.6543 11.6982 7.96973 12.0386 8.35986V2.13428C12.0386 0.714844 11.3413 0.0175781 9.94678 0.0175781H3.06543C1.6709 0.0175781 0.981934 0.723145 0.981934 2.13428V11.896C0.981934 13.3154 1.6709 14.0127 3.06543 14.0127ZM4.10303 3.87744H8.92578C9.18311 3.87744 9.37402 3.67822 9.37402 3.4209C9.37402 3.17188 9.18311 2.98096 8.92578 2.98096H4.10303C3.8374 2.98096 3.64648 3.17188 3.64648 3.4209C3.64648 3.67822 3.8374 3.87744 4.10303 3.87744ZM4.10303 6.13525H8.92578C9.18311 6.13525 9.37402 5.93604 9.37402 5.67871C9.37402 5.42969 9.18311 5.23877 8.92578 5.23877H4.10303C3.8374 5.23877 3.64648 5.42969 3.64648 5.67871C3.64648 5.93604 3.8374 6.13525 4.10303 6.13525ZM9.00049 14.0127C9.58984 14.0127 10.146 13.8384 10.6108 13.5479L12.0635 14.9922C12.2295 15.1665 12.3955 15.2246 12.5947 15.2246C12.9268 15.2246 13.1841 14.9673 13.1841 14.5854C13.1841 14.436 13.1011 14.27 12.9849 14.1455L11.5156 12.6763C11.8394 12.1948 12.0386 11.6055 12.0386 10.9746C12.0386 9.28955 10.6772 7.93652 9.00049 7.93652C7.32373 7.93652 5.9541 9.30615 5.9541 10.9746C5.9541 12.6514 7.32373 14.0127 9.00049 14.0127ZM9.00049 12.9585C7.90479 12.9585 7.0083 12.0703 7.0083 10.9746C7.0083 9.89551 7.90479 8.99902 9.00049 8.99902C10.0713 8.99902 10.9678 9.89551 10.9678 10.9746C10.9678 12.0703 10.0796 12.9585 9.00049 12.9585Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="Tracked Accounts"
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                selected={props.drawer === 4}
                onClick={(event) => handleListItemClick(event, 4)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.06543 14.0127H6.38574C6.00391 13.6807 5.68018 13.2739 5.44775 12.8174H3.13184C2.50928 12.8174 2.17725 12.4937 2.17725 11.896V2.15088C2.17725 1.55322 2.50098 1.21289 3.13184 1.21289H9.88867C10.4863 1.21289 10.835 1.55322 10.835 2.15088V7.42188C11.2915 7.6543 11.6982 7.96973 12.0386 8.35986V2.13428C12.0386 0.714844 11.3413 0.0175781 9.94678 0.0175781H3.06543C1.6709 0.0175781 0.981934 0.723145 0.981934 2.13428V11.896C0.981934 13.3154 1.6709 14.0127 3.06543 14.0127ZM4.10303 3.87744H8.92578C9.18311 3.87744 9.37402 3.67822 9.37402 3.4209C9.37402 3.17188 9.18311 2.98096 8.92578 2.98096H4.10303C3.8374 2.98096 3.64648 3.17188 3.64648 3.4209C3.64648 3.67822 3.8374 3.87744 4.10303 3.87744ZM4.10303 6.13525H8.92578C9.18311 6.13525 9.37402 5.93604 9.37402 5.67871C9.37402 5.42969 9.18311 5.23877 8.92578 5.23877H4.10303C3.8374 5.23877 3.64648 5.42969 3.64648 5.67871C3.64648 5.93604 3.8374 6.13525 4.10303 6.13525ZM9.00049 14.0127C9.58984 14.0127 10.146 13.8384 10.6108 13.5479L12.0635 14.9922C12.2295 15.1665 12.3955 15.2246 12.5947 15.2246C12.9268 15.2246 13.1841 14.9673 13.1841 14.5854C13.1841 14.436 13.1011 14.27 12.9849 14.1455L11.5156 12.6763C11.8394 12.1948 12.0386 11.6055 12.0386 10.9746C12.0386 9.28955 10.6772 7.93652 9.00049 7.93652C7.32373 7.93652 5.9541 9.30615 5.9541 10.9746C5.9541 12.6514 7.32373 14.0127 9.00049 14.0127ZM9.00049 12.9585C7.90479 12.9585 7.0083 12.0703 7.0083 10.9746C7.0083 9.89551 7.90479 8.99902 9.00049 8.99902C10.0713 8.99902 10.9678 9.89551 10.9678 10.9746C10.9678 12.0703 10.0796 12.9585 9.00049 12.9585Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="Tracked Accounts"
                />
              </ListItem>
            );
          }
        })()}
        {(() => {
          if (props.drawer == 5) {
            return (
              <ListItem
                button
                selected={props.drawer === 5}
                onClick={(event) => handleListItemClick(event, 5)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.69287 10.6714L7.66406 9.68359C6.88379 9.57568 6.37744 9.32666 6.00391 8.94482C4.8916 7.83252 4.8916 6.27197 5.9873 5.17627L8.1123 3.05127C9.21631 1.94727 10.7769 1.93896 11.8892 3.05127C13.0015 4.17188 12.9932 5.73242 11.8975 6.82812L10.7769 7.94873C10.9844 8.43018 11.0342 8.97803 10.9761 9.44287L12.7939 7.625C14.396 6.02295 14.4043 3.76514 12.7856 2.15479C11.1753 0.536133 8.90918 0.544434 7.31543 2.14648L5.09082 4.37939C3.49707 5.97314 3.48047 8.23096 5.09912 9.84961C5.46436 10.2148 5.9375 10.4888 6.69287 10.6714ZM7.30713 5.23438L6.32764 6.23047C7.10791 6.33838 7.61426 6.5874 7.99609 6.96924C9.1084 8.08154 9.1084 9.64209 8.0127 10.7378L5.8877 12.8628C4.78369 13.9668 3.22314 13.9668 2.11084 12.8628C0.990234 11.7422 0.998535 10.1816 2.10254 9.08594L3.22314 7.96533C3.01562 7.48389 2.96582 6.93604 3.02393 6.47119L1.20605 8.28906C-0.395996 9.88281 -0.404297 12.1489 1.21436 13.7593C2.82471 15.3779 5.08252 15.3696 6.68457 13.7676L8.90918 11.5347C10.5029 9.94092 10.5112 7.68311 8.90088 6.06445C8.53564 5.69922 8.0625 5.42529 7.30713 5.23438Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="Apps and Websites"
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                selected={props.drawer === 5}
                onClick={(event) => handleListItemClick(event, 5)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.69287 10.6714L7.66406 9.68359C6.88379 9.57568 6.37744 9.32666 6.00391 8.94482C4.8916 7.83252 4.8916 6.27197 5.9873 5.17627L8.1123 3.05127C9.21631 1.94727 10.7769 1.93896 11.8892 3.05127C13.0015 4.17188 12.9932 5.73242 11.8975 6.82812L10.7769 7.94873C10.9844 8.43018 11.0342 8.97803 10.9761 9.44287L12.7939 7.625C14.396 6.02295 14.4043 3.76514 12.7856 2.15479C11.1753 0.536133 8.90918 0.544434 7.31543 2.14648L5.09082 4.37939C3.49707 5.97314 3.48047 8.23096 5.09912 9.84961C5.46436 10.2148 5.9375 10.4888 6.69287 10.6714ZM7.30713 5.23438L6.32764 6.23047C7.10791 6.33838 7.61426 6.5874 7.99609 6.96924C9.1084 8.08154 9.1084 9.64209 8.0127 10.7378L5.8877 12.8628C4.78369 13.9668 3.22314 13.9668 2.11084 12.8628C0.990234 11.7422 0.998535 10.1816 2.10254 9.08594L3.22314 7.96533C3.01562 7.48389 2.96582 6.93604 3.02393 6.47119L1.20605 8.28906C-0.395996 9.88281 -0.404297 12.1489 1.21436 13.7593C2.82471 15.3779 5.08252 15.3696 6.68457 13.7676L8.90918 11.5347C10.5029 9.94092 10.5112 7.68311 8.90088 6.06445C8.53564 5.69922 8.0625 5.42529 7.30713 5.23438Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="Apps and Websites"
                />
              </ListItem>
            );
          }
        })()}
      </List>
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        {(() => {
          if (props.drawer == 6) {
            return (
              <ListItem
                button
                selected={props.drawer === 6}
                onClick={(event) => handleListItemClick(event, 6)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9917 13.7056C10.6523 13.7056 13.6987 10.6675 13.6987 7.00684C13.6987 3.34619 10.644 0.308105 6.9834 0.308105C3.33105 0.308105 0.292969 3.34619 0.292969 7.00684C0.292969 10.6675 3.33936 13.7056 6.9917 13.7056ZM6.9917 12.4438C3.97852 12.4438 1.57129 10.0283 1.57129 7.00684C1.57129 3.98535 3.97021 1.56982 6.9834 1.56982C10.0049 1.56982 12.4204 3.98535 12.4287 7.00684C12.437 10.0283 10.0132 12.4438 6.9917 12.4438ZM6.92529 4.78223C7.44824 4.78223 7.85498 4.35889 7.85498 3.84424C7.85498 3.32129 7.44824 2.90625 6.92529 2.90625C6.41064 2.90625 5.99561 3.32129 5.99561 3.84424C5.99561 4.35889 6.41064 4.78223 6.92529 4.78223ZM5.87109 10.6011H8.51074C8.80957 10.6011 9.05029 10.3853 9.05029 10.0864C9.05029 9.7959 8.80957 9.57178 8.51074 9.57178H7.78027V6.46729C7.78027 6.06055 7.58105 5.79492 7.20752 5.79492H5.99561C5.69678 5.79492 5.46436 6.01904 5.46436 6.30957C5.46436 6.6167 5.69678 6.83252 5.99561 6.83252H6.60156V9.57178H5.87109C5.57227 9.57178 5.33154 9.7959 5.33154 10.0864C5.33154 10.3853 5.57227 10.6011 5.87109 10.6011Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="About Surplus"
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                selected={props.drawer === 6}
                onClick={(event) => handleListItemClick(event, 6)}
                {...{ to: "/subscriptions" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9917 13.7056C10.6523 13.7056 13.6987 10.6675 13.6987 7.00684C13.6987 3.34619 10.644 0.308105 6.9834 0.308105C3.33105 0.308105 0.292969 3.34619 0.292969 7.00684C0.292969 10.6675 3.33936 13.7056 6.9917 13.7056ZM6.9917 12.4438C3.97852 12.4438 1.57129 10.0283 1.57129 7.00684C1.57129 3.98535 3.97021 1.56982 6.9834 1.56982C10.0049 1.56982 12.4204 3.98535 12.4287 7.00684C12.437 10.0283 10.0132 12.4438 6.9917 12.4438ZM6.92529 4.78223C7.44824 4.78223 7.85498 4.35889 7.85498 3.84424C7.85498 3.32129 7.44824 2.90625 6.92529 2.90625C6.41064 2.90625 5.99561 3.32129 5.99561 3.84424C5.99561 4.35889 6.41064 4.78223 6.92529 4.78223ZM5.87109 10.6011H8.51074C8.80957 10.6011 9.05029 10.3853 9.05029 10.0864C9.05029 9.7959 8.80957 9.57178 8.51074 9.57178H7.78027V6.46729C7.78027 6.06055 7.58105 5.79492 7.20752 5.79492H5.99561C5.69678 5.79492 5.46436 6.01904 5.46436 6.30957C5.46436 6.6167 5.69678 6.83252 5.99561 6.83252H6.60156V9.57178H5.87109C5.57227 9.57178 5.33154 9.7959 5.33154 10.0864C5.33154 10.3853 5.57227 10.6011 5.87109 10.6011Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="About Surplus"
                />
              </ListItem>
            );
          }
        })()}
      </List>

      <AddSubscription
        open={open}
        handleClose={() => handleClose()}
        handleClickOpen={() => handleClickOpen()}
      />
    </div>
  );
}
