import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

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
    display: "flex",
    flexWrap: "wrap",
    width: 217,
    height: 217,
    borderRadius: 6,
  },

  image: {
    position: "relative",
    height: "100%",
    left: 0,
    top: 0,
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.4,
        transition: "opacity 350ms ease",
        border: "4px solid",
      },
      "& $DisplayOver": {
        opacity: 1,
        transition: "opacity 350ms ease",
      },
      // "& $cardTitle": {
      //   opacity: 1,
      //   transition: "opacity 350ms ease",
      //   transform: "translate3d(0,0,0)",
      // },
      // "& $cardcontents": {
      //   transform: "translate3d(0,0,0)",
      // },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  DisplayOver: {
    height: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    width: "100%",
    backgroundColor: "transparent",
    padding: "20px 20px 20px 20px",
    boxSizing: "border-box",
    opacity: 0,
    zIndex: 2,
    borderRadius: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 500,
    left: "20px",
    color: theme.palette.common.white,
    // opacity: 0,
  },
  cardContent: {
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
    color: theme.palette.common.white,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.common.white,
  },
  //
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    borderRadius: 6,
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create("opacity"),
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
          <Card className={classes.DisplayOver}>
            <CardContent>
              <Typography
                className={classes.cardTitle}
                component="span"
                variant="h1"
              >
                {image.title}
              </Typography>
              <Typography variant="h5" className={classes.cardContent}>
                USD $12.00/mo
                <br />
                Next payment is in 3 days
              </Typography>
              <Typography className={classes.pos}>View More</Typography>
            </CardContent>
          </Card>
          {/* <Typography
              component="span"
              variant="h2"
              className={classes.cardTitle}
            >
              {image.title}
            </Typography> */}
          {/* </div> */}
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
