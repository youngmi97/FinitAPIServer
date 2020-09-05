import React from "react";

import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import DialogContent from "@material-ui/core/DialogContent";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import HoveringCard from "./HoveringCard";
import { ButtonBase, Typography, Avatar, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "590px",
    height: "420px",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "28px",
    height: "28px",
  },
  Avatar: {
    margin: "8px",
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
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [secondary] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonBase onClick={handleClickOpen}>
        <HoveringCard name={props.name} />
      </ButtonBase>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        margin="100"
      >
        <div className={classes.root}>
          <DialogTitle className={classes.Avatar}>
            <Avatar variant="square" src="static/images/Medium.svg" />

            <Box
              display="flex"
              alignItems="flex-end"
              p={1}
              className={classes.List1}
            >
              <Box p={1} flexGrow={1} className={classes.List1}>
                <div className={classes.he}>
                  <Typography className={classes.ListItemSize}>
                    Notion
                  </Typography>
                  <Typography className={classes.ListItemSize1}>
                    Team plan, monthly payment • 8 members
                  </Typography>
                </div>
              </Box>
              <Box p={1}>
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
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent className={classes.Avatar}>
            <Typography className={classes.ListItemSize2}>
              US $8.00/mo
            </Typography>
            <Typography className={classes.ListItemSize1}>
              Next payment is in 3 days, scheduled for July 30, 2020.
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
        <Avatar
          className={classes.overlay}
          src="/static/images/badges/GroupBadge.svg"
        ></Avatar>
      </Dialog>
    </div>
  );
}
