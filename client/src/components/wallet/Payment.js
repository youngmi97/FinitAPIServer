import { Box, IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
// import Typography from "@material-ui/core/Typography";
import React from "react";
import PlaidLogin from "../PlaidLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    minHeight: 332,
    maxHeight: 332,
    borderRadius: "10px",
  },
  rect: {
    width: theme.spacing(6),
    height: theme.spacing(4),
    margin: 8,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 186,
  },
  overlay: {
    position: "absolute",
    top: "0%",
    left: "75%",
    color: "white",
  },
  ListItemSize: {
    color: "black",
    borderColor: "white",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
  },
  ListItemSize2: {
    color: "black",
    borderColor: "white",
    fontSize: "17px",
  },
  ListItemSize3: {
    color: "black",
    borderColor: "white",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
    height: "40px",
    textTransform: "none",
    marginLeft: "5px",
  },
  ListItemSize4: {
    color: "black",
    fontSize: "24px",
  },
  ListItemSize5: {
    color: "#7610EB",
    borderColor: "white",
    backgroundColor: "white",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
    textTransform: "none",
    height: "40px",
    marginLeft: "16px",
  },
  Buttoncolor: {
    color: theme.palette.primary.main,
  },
}));

export default function Card_internal() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const [secondary] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };
  return (
    <Card className={classes.root}>
      {/* <CardHeader></CardHeader> */}
      <CardContent>
        <Box display="flex">
          <Box flexGrow={1} className={classes.ListItemSize} margin="16px">
            PAYMENT METHODS
          </Box>
          <Box className={classes.ListItemSize}>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>
        <List>
          <ListItem divider>
            <ListItemAvatar>
              <Avatar
                variant="square"
                className={classes.rect}
                src="static/images/Visa.svg"
              ></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="VISA ****-****-****-9322"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem divider>
            <ListItemAvatar>
              <Avatar
                variant="square"
                className={classes.rect}
                src="static/images/UnionPay.svg"
              ></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="UNION ****-****-****-9322"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem divider>
            <ListItemAvatar>
              <Avatar
                variant="square"
                className={classes.rect}
                src="static/images/Visa.svg"
              ></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="VISA ****-****-****-9322"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        </List>
        {/* <Button className={classes.ListItemSize5}>+ Add Payment Methods</Button> */}
        <PlaidLogin />
      </CardContent>
    </Card>
  );
}
