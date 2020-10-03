import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { fade, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import AddSubscription from "./pop-ups/AddSubscription";

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
        <ListItem
          button
          dense={true}
          disableRipple={true}
          className={classes.AddSubs}
          onClick={handleClickOpen}
        >
          <ListItemIcon className={classes.AddSize}>
            <svg
              width="26"
              height="26"
              viewBox="-4 -4 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17.5352C12.3652 17.5352 12.6641 17.2446 12.6641 16.8794V12.6875H16.7563C17.1133 12.6875 17.4204 12.3804 17.4204 12.0151C17.4204 11.6499 17.1133 11.3428 16.7563 11.3428H12.6641V7.14258C12.6641 6.77734 12.3652 6.48682 12 6.48682C11.6348 6.48682 11.3276 6.77734 11.3276 7.14258V11.3428H7.24365C6.87842 11.3428 6.57129 11.6499 6.57129 12.0151C6.57129 12.3804 6.87842 12.6875 7.24365 12.6875H11.3276V16.8794C11.3276 17.2446 11.6348 17.5352 12 17.5352Z"
                fill="#7610EB"
              />
              <path
                d="M12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM12 -1C4.8203 -1 -1 4.8203 -1 12H1C1 5.92487 5.92487 1 12 1V-1Z"
                fill="#7610EB"
              />
            </svg>
          </ListItemIcon>
          <ListItemText
            className={classes.addsubstext}
            primary="Add subscriptions"
          />
        </ListItem>
      </List>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography className={classes.ListItemSize4}>
            MY SUBSCRIPTIONS
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
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 9.27588C13.1372 9.27588 14.0835 8.32959 14.0835 7.19238C14.0835 6.03857 13.1372 5.10059 12 5.10889C10.8628 5.11719 9.9165 6.03857 9.9165 7.19238C9.9165 8.32959 10.8628 9.27588 12 9.27588ZM17.0635 9.27588C18.209 9.27588 19.147 8.32959 19.147 7.19238C19.147 6.03857 18.209 5.10059 17.0635 5.10889C15.9263 5.11719 14.9883 6.03857 14.9883 7.19238C14.9883 8.32959 15.9263 9.27588 17.0635 9.27588ZM6.93652 9.26758C8.07373 9.26758 9.01172 8.32959 9.01172 7.20068C9.01172 6.06348 8.07373 5.11719 6.93652 5.11719C5.79102 5.11719 4.85303 6.06348 4.85303 7.20068C4.85303 8.32959 5.79102 9.26758 6.93652 9.26758ZM12 14.0986C13.1372 14.0986 14.0835 13.1523 14.0835 12.0151C14.0835 10.8779 13.1372 9.93164 12 9.93994C10.8628 9.94824 9.9165 10.8779 9.9165 12.0151C9.9165 13.1523 10.8628 14.0986 12 14.0986ZM17.0635 14.0986C18.209 14.0986 19.147 13.1523 19.147 12.0151C19.147 10.8779 18.209 9.93164 17.0635 9.93994C15.9263 9.94824 14.9883 10.8779 14.9883 12.0151C14.9883 13.1523 15.9263 14.0986 17.0635 14.0986ZM6.93652 14.0986C8.07373 14.0986 9.01172 13.1523 9.01172 12.0151C9.01172 10.8779 8.07373 9.93164 6.93652 9.93994C5.79102 9.94824 4.85303 10.8779 4.85303 12.0151C4.85303 13.1523 5.79102 14.0986 6.93652 14.0986ZM6.93652 18.9297C8.07373 18.9297 9.01172 17.9751 9.01172 16.8379C9.01172 15.6924 8.07373 14.7627 6.93652 14.7627C5.79102 14.7627 4.85303 15.6924 4.85303 16.8379C4.85303 17.9751 5.79102 18.9297 6.93652 18.9297ZM12 18.9297C13.1372 18.9297 14.0835 17.9751 14.0835 16.8379C14.0835 15.6924 13.1372 14.7627 12 14.7627C10.8628 14.7627 9.9165 15.6924 9.9165 16.8379C9.9165 17.9751 10.8628 18.9297 12 18.9297ZM17.0635 18.9297C18.209 18.9297 19.147 17.9751 19.147 16.8379C19.147 15.6924 18.209 14.7627 17.0635 14.7627C15.9263 14.7627 14.9883 15.6924 14.9883 16.8379C14.9883 17.9751 15.9263 18.9297 17.0635 18.9297Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="All subscriptions"
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
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 9.27588C13.1372 9.27588 14.0835 8.32959 14.0835 7.19238C14.0835 6.03857 13.1372 5.10059 12 5.10889C10.8628 5.11719 9.9165 6.03857 9.9165 7.19238C9.9165 8.32959 10.8628 9.27588 12 9.27588ZM17.0635 9.27588C18.209 9.27588 19.147 8.32959 19.147 7.19238C19.147 6.03857 18.209 5.10059 17.0635 5.10889C15.9263 5.11719 14.9883 6.03857 14.9883 7.19238C14.9883 8.32959 15.9263 9.27588 17.0635 9.27588ZM6.93652 9.26758C8.07373 9.26758 9.01172 8.32959 9.01172 7.20068C9.01172 6.06348 8.07373 5.11719 6.93652 5.11719C5.79102 5.11719 4.85303 6.06348 4.85303 7.20068C4.85303 8.32959 5.79102 9.26758 6.93652 9.26758ZM12 14.0986C13.1372 14.0986 14.0835 13.1523 14.0835 12.0151C14.0835 10.8779 13.1372 9.93164 12 9.93994C10.8628 9.94824 9.9165 10.8779 9.9165 12.0151C9.9165 13.1523 10.8628 14.0986 12 14.0986ZM17.0635 14.0986C18.209 14.0986 19.147 13.1523 19.147 12.0151C19.147 10.8779 18.209 9.93164 17.0635 9.93994C15.9263 9.94824 14.9883 10.8779 14.9883 12.0151C14.9883 13.1523 15.9263 14.0986 17.0635 14.0986ZM6.93652 14.0986C8.07373 14.0986 9.01172 13.1523 9.01172 12.0151C9.01172 10.8779 8.07373 9.93164 6.93652 9.93994C5.79102 9.94824 4.85303 10.8779 4.85303 12.0151C4.85303 13.1523 5.79102 14.0986 6.93652 14.0986ZM6.93652 18.9297C8.07373 18.9297 9.01172 17.9751 9.01172 16.8379C9.01172 15.6924 8.07373 14.7627 6.93652 14.7627C5.79102 14.7627 4.85303 15.6924 4.85303 16.8379C4.85303 17.9751 5.79102 18.9297 6.93652 18.9297ZM12 18.9297C13.1372 18.9297 14.0835 17.9751 14.0835 16.8379C14.0835 15.6924 13.1372 14.7627 12 14.7627C10.8628 14.7627 9.9165 15.6924 9.9165 16.8379C9.9165 17.9751 10.8628 18.9297 12 18.9297ZM17.0635 18.9297C18.209 18.9297 19.147 17.9751 19.147 16.8379C19.147 15.6924 18.209 14.7627 17.0635 14.7627C15.9263 14.7627 14.9883 15.6924 14.9883 16.8379C14.9883 17.9751 15.9263 18.9297 17.0635 18.9297Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="All subscriptions"
                />
              </ListItem>
            );
          }
        })()}

        <ListItem
          button
          disabled={true}
          selected={props.drawer === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          {...{ to: "/shared" }}
          component={Link}
          dense={true}
          className={classes.ListItemSize1}
          disableRipple={true}
        >
          <ListItemIcon className={classes.ListItemSize}>
            <img
              className={classes.imageIcon}
              src="/static/icons/drawer/SharedSubscriptions.svg"
              alt="share"
            />
          </ListItemIcon>
          <ListItemText
            className={classes.ListItemSize2}
            primary="Shared subcriptions"
          />
          <ListItemIcon className={classes.ListItemSize}>
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
                d="M15.0879 18.3792H8.92041C8.07373 18.3792 7.65869 17.9558 7.65869 17.0427V12.3113C7.65869 11.5725 8.04883 11.1575 8.65479 11.033V9.3147C8.65479 6.75806 10.3398 5.62085 12 5.62085C13.6685 5.62085 15.3452 6.75806 15.3452 9.3147V10.9915C16.0176 11.0745 16.3413 11.5061 16.3413 12.3113V17.0427C16.3413 17.9558 15.9263 18.3792 15.0879 18.3792ZM12 6.75806C10.8794 6.75806 9.8584 7.54663 9.8584 9.14038V10.9915L14.1499 10.9832V9.14038C14.1499 7.54663 13.1206 6.75806 12 6.75806ZM12 15.4135C12.5229 15.4135 12.9297 14.9901 12.9297 14.4755C12.9297 13.9525 12.5229 13.5375 12 13.5375C11.4854 13.5375 11.0703 13.9525 11.0703 14.4755C11.0703 14.9901 11.4854 15.4135 12 15.4135Z"
                fill="#666666"
              />
            </svg>
          </ListItemIcon>
        </ListItem>
      </List>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography className={classes.ListItemSize4}>MY WALLET</Typography>
        </ListSubheader>

        <ListItem
          button
          disabled={true}
          selected={props.drawer === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          {...{ to: "/wallet" }}
          component={Link}
          dense={true}
          disableRipple={true}
          className={classes.ListItemSize1}
        >
          <ListItemIcon className={classes.ListItemSize}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.81152 9.15137H19.1885V8.52051C19.1885 7.12598 18.4829 6.43701 17.0718 6.43701H6.92822C5.50879 6.43701 4.81152 7.12598 4.81152 8.52051V9.15137ZM4.81152 15.4019C4.81152 16.7964 5.50879 17.4854 6.92822 17.4854H17.0718C18.4829 17.4854 19.1885 16.7964 19.1885 15.4019V10.6372H4.81152V15.4019ZM7.03613 13.8164V12.6128C7.03613 12.2476 7.29346 11.9902 7.67529 11.9902H9.26904C9.65088 11.9902 9.9082 12.2476 9.9082 12.6128V13.8164C9.9082 14.1816 9.65088 14.439 9.26904 14.439H7.67529C7.29346 14.439 7.03613 14.1816 7.03613 13.8164Z"
                fill="#666666"
              />
            </svg>
          </ListItemIcon>
          <ListItemText
            className={classes.ListItemSize2}
            primary="Surplus Wallet"
          />

          <ListItemIcon className={classes.ListItemSize}>
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
                d="M15.0879 18.3792H8.92041C8.07373 18.3792 7.65869 17.9558 7.65869 17.0427V12.3113C7.65869 11.5725 8.04883 11.1575 8.65479 11.033V9.3147C8.65479 6.75806 10.3398 5.62085 12 5.62085C13.6685 5.62085 15.3452 6.75806 15.3452 9.3147V10.9915C16.0176 11.0745 16.3413 11.5061 16.3413 12.3113V17.0427C16.3413 17.9558 15.9263 18.3792 15.0879 18.3792ZM12 6.75806C10.8794 6.75806 9.8584 7.54663 9.8584 9.14038V10.9915L14.1499 10.9832V9.14038C14.1499 7.54663 13.1206 6.75806 12 6.75806ZM12 15.4135C12.5229 15.4135 12.9297 14.9901 12.9297 14.4755C12.9297 13.9525 12.5229 13.5375 12 13.5375C11.4854 13.5375 11.0703 13.9525 11.0703 14.4755C11.0703 14.9901 11.4854 15.4135 12 15.4135Z"
                fill="#666666"
              />
            </svg>
          </ListItemIcon>
        </ListItem>
        {(() => {
          if (props.drawer == 2) {
            return (
              <ListItem
                button
                selected={props.drawer === 2}
                onClick={(event) => handleListItemClick(event, 2)}
                {...{ to: "/upcoming" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.60889 18.0664H16.3911C17.8105 18.0664 18.5078 17.3691 18.5078 15.9746V8.05566C18.5078 6.66113 17.8105 5.96387 16.3911 5.96387H7.60889C6.19775 5.96387 5.49219 6.66113 5.49219 8.05566V15.9746C5.49219 17.3691 6.19775 18.0664 7.60889 18.0664ZM7.49268 16.8628C6.97803 16.8628 6.6875 16.5889 6.6875 16.0493V9.80713C6.6875 9.26758 6.97803 8.99365 7.49268 8.99365H16.499C17.0137 8.99365 17.3125 9.26758 17.3125 9.80713V16.0493C17.3125 16.5889 17.0137 16.8628 16.499 16.8628H7.49268ZM10.7383 11.3428H11.1201C11.3691 11.3428 11.4521 11.2598 11.4521 11.019V10.6372C11.4521 10.3965 11.3691 10.3135 11.1201 10.3135H10.7383C10.4976 10.3135 10.4146 10.3965 10.4146 10.6372V11.019C10.4146 11.2598 10.4976 11.3428 10.7383 11.3428ZM12.8799 11.3428H13.2617C13.5024 11.3428 13.5854 11.2598 13.5854 11.019V10.6372C13.5854 10.3965 13.5024 10.3135 13.2617 10.3135H12.8799C12.6309 10.3135 12.5479 10.3965 12.5479 10.6372V11.019C12.5479 11.2598 12.6309 11.3428 12.8799 11.3428ZM15.0132 11.3428H15.395C15.6357 11.3428 15.7271 11.2598 15.7271 11.019V10.6372C15.7271 10.3965 15.6357 10.3135 15.395 10.3135H15.0132C14.7642 10.3135 14.6812 10.3965 14.6812 10.6372V11.019C14.6812 11.2598 14.7642 11.3428 15.0132 11.3428ZM8.60498 13.4429H8.98682C9.23584 13.4429 9.31885 13.3599 9.31885 13.1191V12.7373C9.31885 12.4966 9.23584 12.4136 8.98682 12.4136H8.60498C8.36426 12.4136 8.27295 12.4966 8.27295 12.7373V13.1191C8.27295 13.3599 8.36426 13.4429 8.60498 13.4429ZM10.7383 13.4429H11.1201C11.3691 13.4429 11.4521 13.3599 11.4521 13.1191V12.7373C11.4521 12.4966 11.3691 12.4136 11.1201 12.4136H10.7383C10.4976 12.4136 10.4146 12.4966 10.4146 12.7373V13.1191C10.4146 13.3599 10.4976 13.4429 10.7383 13.4429ZM12.8799 13.4429H13.2617C13.5024 13.4429 13.5854 13.3599 13.5854 13.1191V12.7373C13.5854 12.4966 13.5024 12.4136 13.2617 12.4136H12.8799C12.6309 12.4136 12.5479 12.4966 12.5479 12.7373V13.1191C12.5479 13.3599 12.6309 13.4429 12.8799 13.4429ZM15.0132 13.4429H15.395C15.6357 13.4429 15.7271 13.3599 15.7271 13.1191V12.7373C15.7271 12.4966 15.6357 12.4136 15.395 12.4136H15.0132C14.7642 12.4136 14.6812 12.4966 14.6812 12.7373V13.1191C14.6812 13.3599 14.7642 13.4429 15.0132 13.4429ZM8.60498 15.543H8.98682C9.23584 15.543 9.31885 15.46 9.31885 15.2192V14.8374C9.31885 14.5967 9.23584 14.5137 8.98682 14.5137H8.60498C8.36426 14.5137 8.27295 14.5967 8.27295 14.8374V15.2192C8.27295 15.46 8.36426 15.543 8.60498 15.543ZM10.7383 15.543H11.1201C11.3691 15.543 11.4521 15.46 11.4521 15.2192V14.8374C11.4521 14.5967 11.3691 14.5137 11.1201 14.5137H10.7383C10.4976 14.5137 10.4146 14.5967 10.4146 14.8374V15.2192C10.4146 15.46 10.4976 15.543 10.7383 15.543ZM12.8799 15.543H13.2617C13.5024 15.543 13.5854 15.46 13.5854 15.2192V14.8374C13.5854 14.5967 13.5024 14.5137 13.2617 14.5137H12.8799C12.6309 14.5137 12.5479 14.5967 12.5479 14.8374V15.2192C12.5479 15.46 12.6309 15.543 12.8799 15.543Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="Calendar"
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                selected={props.drawer === 2}
                onClick={(event) => handleListItemClick(event, 2)}
                {...{ to: "/upcoming" }}
                component={Link}
                dense={true}
                disableRipple={true}
                className={classes.ListItemSize1}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.60889 18.0664H16.3911C17.8105 18.0664 18.5078 17.3691 18.5078 15.9746V8.05566C18.5078 6.66113 17.8105 5.96387 16.3911 5.96387H7.60889C6.19775 5.96387 5.49219 6.66113 5.49219 8.05566V15.9746C5.49219 17.3691 6.19775 18.0664 7.60889 18.0664ZM7.49268 16.8628C6.97803 16.8628 6.6875 16.5889 6.6875 16.0493V9.80713C6.6875 9.26758 6.97803 8.99365 7.49268 8.99365H16.499C17.0137 8.99365 17.3125 9.26758 17.3125 9.80713V16.0493C17.3125 16.5889 17.0137 16.8628 16.499 16.8628H7.49268ZM10.7383 11.3428H11.1201C11.3691 11.3428 11.4521 11.2598 11.4521 11.019V10.6372C11.4521 10.3965 11.3691 10.3135 11.1201 10.3135H10.7383C10.4976 10.3135 10.4146 10.3965 10.4146 10.6372V11.019C10.4146 11.2598 10.4976 11.3428 10.7383 11.3428ZM12.8799 11.3428H13.2617C13.5024 11.3428 13.5854 11.2598 13.5854 11.019V10.6372C13.5854 10.3965 13.5024 10.3135 13.2617 10.3135H12.8799C12.6309 10.3135 12.5479 10.3965 12.5479 10.6372V11.019C12.5479 11.2598 12.6309 11.3428 12.8799 11.3428ZM15.0132 11.3428H15.395C15.6357 11.3428 15.7271 11.2598 15.7271 11.019V10.6372C15.7271 10.3965 15.6357 10.3135 15.395 10.3135H15.0132C14.7642 10.3135 14.6812 10.3965 14.6812 10.6372V11.019C14.6812 11.2598 14.7642 11.3428 15.0132 11.3428ZM8.60498 13.4429H8.98682C9.23584 13.4429 9.31885 13.3599 9.31885 13.1191V12.7373C9.31885 12.4966 9.23584 12.4136 8.98682 12.4136H8.60498C8.36426 12.4136 8.27295 12.4966 8.27295 12.7373V13.1191C8.27295 13.3599 8.36426 13.4429 8.60498 13.4429ZM10.7383 13.4429H11.1201C11.3691 13.4429 11.4521 13.3599 11.4521 13.1191V12.7373C11.4521 12.4966 11.3691 12.4136 11.1201 12.4136H10.7383C10.4976 12.4136 10.4146 12.4966 10.4146 12.7373V13.1191C10.4146 13.3599 10.4976 13.4429 10.7383 13.4429ZM12.8799 13.4429H13.2617C13.5024 13.4429 13.5854 13.3599 13.5854 13.1191V12.7373C13.5854 12.4966 13.5024 12.4136 13.2617 12.4136H12.8799C12.6309 12.4136 12.5479 12.4966 12.5479 12.7373V13.1191C12.5479 13.3599 12.6309 13.4429 12.8799 13.4429ZM15.0132 13.4429H15.395C15.6357 13.4429 15.7271 13.3599 15.7271 13.1191V12.7373C15.7271 12.4966 15.6357 12.4136 15.395 12.4136H15.0132C14.7642 12.4136 14.6812 12.4966 14.6812 12.7373V13.1191C14.6812 13.3599 14.7642 13.4429 15.0132 13.4429ZM8.60498 15.543H8.98682C9.23584 15.543 9.31885 15.46 9.31885 15.2192V14.8374C9.31885 14.5967 9.23584 14.5137 8.98682 14.5137H8.60498C8.36426 14.5137 8.27295 14.5967 8.27295 14.8374V15.2192C8.27295 15.46 8.36426 15.543 8.60498 15.543ZM10.7383 15.543H11.1201C11.3691 15.543 11.4521 15.46 11.4521 15.2192V14.8374C11.4521 14.5967 11.3691 14.5137 11.1201 14.5137H10.7383C10.4976 14.5137 10.4146 14.5967 10.4146 14.8374V15.2192C10.4146 15.46 10.4976 15.543 10.7383 15.543ZM12.8799 15.543H13.2617C13.5024 15.543 13.5854 15.46 13.5854 15.2192V14.8374C13.5854 14.5967 13.5024 14.5137 13.2617 14.5137H12.8799C12.6309 14.5137 12.5479 14.5967 12.5479 14.8374V15.2192C12.5479 15.46 12.6309 15.543 12.8799 15.543Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="Calendar"
                />
              </ListItem>
            );
          }
        })()}
        {(() => {
          if (props.drawer == 3) {
            return (
              <ListItem
                button
                selected={props.drawer === 3}
                onClick={(event) => handleListItemClick(event, 3)}
                {...{ to: "/insight" }}
                component={Link}
                dense={true}
                className={classes.ListItemSize1}
                disableRipple={true}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9224 18.0581H18.8481C19.7861 18.0581 20.2676 17.6016 20.2676 16.7217V7.30859C20.2676 6.42871 19.7861 5.98047 18.8481 5.98047H16.9224C15.9927 5.98047 15.5112 6.42871 15.5112 7.30859V16.7217C15.5112 17.6016 15.9927 18.0581 16.9224 18.0581ZM11.0371 18.0581H12.9629C13.9009 18.0581 14.3823 17.6016 14.3823 16.7217V9.21777C14.3823 8.33789 13.9009 7.88135 12.9629 7.88135H11.0371C10.1074 7.88135 9.61768 8.33789 9.61768 9.21777V16.7217C9.61768 17.6016 10.1074 18.0581 11.0371 18.0581ZM5.14355 18.0581H7.06934C8.00732 18.0581 8.48877 17.6016 8.48877 16.7217V11.1187C8.48877 10.2388 8.00732 9.79053 7.06934 9.79053H5.14355C4.21387 9.79053 3.73242 10.2388 3.73242 11.1187V16.7217C3.73242 17.6016 4.21387 18.0581 5.14355 18.0581Z"
                      fill="#000000"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize3}
                  primary="Insight"
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                selected={props.drawer === 3}
                onClick={(event) => handleListItemClick(event, 3)}
                {...{ to: "/insight" }}
                component={Link}
                dense={true}
                className={classes.ListItemSize1}
                disableRipple={true}
              >
                <ListItemIcon className={classes.ListItemSize}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9224 18.0581H18.8481C19.7861 18.0581 20.2676 17.6016 20.2676 16.7217V7.30859C20.2676 6.42871 19.7861 5.98047 18.8481 5.98047H16.9224C15.9927 5.98047 15.5112 6.42871 15.5112 7.30859V16.7217C15.5112 17.6016 15.9927 18.0581 16.9224 18.0581ZM11.0371 18.0581H12.9629C13.9009 18.0581 14.3823 17.6016 14.3823 16.7217V9.21777C14.3823 8.33789 13.9009 7.88135 12.9629 7.88135H11.0371C10.1074 7.88135 9.61768 8.33789 9.61768 9.21777V16.7217C9.61768 17.6016 10.1074 18.0581 11.0371 18.0581ZM5.14355 18.0581H7.06934C8.00732 18.0581 8.48877 17.6016 8.48877 16.7217V11.1187C8.48877 10.2388 8.00732 9.79053 7.06934 9.79053H5.14355C4.21387 9.79053 3.73242 10.2388 3.73242 11.1187V16.7217C3.73242 17.6016 4.21387 18.0581 5.14355 18.0581Z"
                      fill="#666666"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemSize2}
                  primary="Insight"
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
