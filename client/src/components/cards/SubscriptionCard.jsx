import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

import SubscriptionDetail from "../SubscriptionDetail";
import Modal from "@material-ui/core/Modal";

import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const images = [
  {
    url: "/static/images/Netflix.svg",
    title: "Netflix",
    width: "100%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100%",
    display: "flex",
    flexWrap: "wrap",
    width: 217,
    height: 217,
    borderRadius: 4,
  },
  contents: {
    padding: "16px 16px 16px 16px",
  },
  image: {
    position: "relative",
    height: "100%",
    left: 0,
    top: 0,
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0,
        transition: "opacity 350ms ease",
        border: "4px solid",
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  content: {
    padding: "12px 12px 12px 12px",
  },
  //Central Button
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
    borderRadius: 4,
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  //Subscription detail card styling
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

export default function ButtonBases() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          onClick={handleOpen}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              View More
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
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
          <SubscriptionDetail />
        </Fade>
      </Modal>
    </div>
  );
}
