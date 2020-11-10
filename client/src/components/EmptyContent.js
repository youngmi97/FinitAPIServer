//Active contents displayed in the center of the screen
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddSubscription from "./pop-ups/Add";
import Modal from "@material-ui/core/Modal";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 16,
    minWidth: 217,
    maxWidth: 217,
    minHeight: 217,
    maxHeight: 217,
    backgroundColor: "rgba(255, 255, 255, 0.6 )",
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
  ListItemSize2: {
    fontSize: "14px",
  },
  nomarginButton: {
    margin: 0,
    padding: 0,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "zoom-out",
  },
  detail: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
}));

export default function Active_content() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <Box mx="auto" bgcolor="background.paper" p={4}> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid container className={classes.mainbreak} justify="flex-start">
          <Grid
            item
            xs
            className={classes.root}
            style={{ pading: 0, margin: 0 }}
          >
            <Button
              className={classes.root}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "#C8C7CC",
                borderRadius: "6px",
                margin: 0,
                padding: 63,
              }}
            >
              <AddRoundedIcon style={{ color: "#8a8a8f", fontSize: 60 }} />
            </Button>
          </Grid>
        </Grid>
        <Box p={1}>
          <Typography className={classes.ListItemSize2}>
            Click the '+' button or link account to begin managing your
            subscriptions
          </Typography>
        </Box>
        <Box p={1}>
          <Button
            className={classes.ListItemSize5}
            variant="outlined"
            onClick={handleOpen}
          >
            Link Bank Account
          </Button>
        </Box>
      </Box>
      <Modal
        aria-labelledby="subscription-title"
        aria-describedby="subscription-detail"
        class={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <AddSubscription />
        </Fade>
      </Modal>
      {/* </Box> */}
    </div>
  );
}
