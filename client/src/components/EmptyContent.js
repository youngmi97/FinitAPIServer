//Active contents displayed in the center of the screen
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddSubscription from "./AddSubscription";
import Modal from "@material-ui/core/Modal";

import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
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
        <Box p={1}>
          <img src={"static/images/sitting 1.svg"} alt={"text"}></img>
        </Box>
        <Box p={1}>
          <Typography className={classes.ListItemSize2}>
            No subscriptions to show
          </Typography>
        </Box>
        <Box p={1}>
          <Button
            className={classes.ListItemSize5}
            variant="outlined"
            onClick={handleOpen}
          >
            Add subscriptions
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
