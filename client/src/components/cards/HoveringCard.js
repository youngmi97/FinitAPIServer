import React from "react";
import styled from "@emotion/styled/macro";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";

import SubscriptionDetail from "../SubscriptionDetail";
import { Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modalStyle: {
    alignContent: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    display: "flex",
    cursor: "zoom-out",
  },
  detail: {
    position: "relative",
    transform: "translate(-50%, -50%)",
  },
}));

// emotion-styled
const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
  borderRadius: 4,
});

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 20px 20px",
  boxSizing: "border-box",
  borderRadius: 4,
});

const SubTitle = styled.h4({
  fontSize: "14px",
  fontWeight: "500px",
  left: "20px",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  left: "20px",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "217px",
  height: "217px",
  cursor: "pointer",
  backgroundImage: "url(/static/images/Netflix.svg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const CTA = styled.div({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});

export default function HoveringCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="HoveringCard">
      <Background>
        <DisplayOver type="button" onClick={handleOpen}>
          <Hover>
            <SubTitle>Netflix</SubTitle>
            <Paragraph>
              USD $12.00/mo
              <br />
              Next payment is in 3 days
            </Paragraph>
            <CTA>View Details</CTA>
          </Hover>
        </DisplayOver>
      </Background>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="subscription-title"
        aria-describedby="subscription-detail"
        class={classes.modalStyle}
      >
        <SubscriptionDetail class={classes.detail} />
      </Modal>
    </div>
  );
}
