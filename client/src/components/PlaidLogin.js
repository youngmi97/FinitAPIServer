import React, { Component } from "react";
import { PlaidLink } from "react-plaid-link";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "../App.css";

const useStyles = (theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    minHeight: 332,
    maxHeight: 332,
    borderRadius: "10px",
  },
  ListItemSize5: {
    color: "#7610EB",
    borderColor: "white",
    outline: "none",
    backgroundColor: "white",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
    textTransform: "none",
    height: "40px",
    marginLeft: "16px",
  },
  plaidWrapper: {
    display: "flex",
  },
});

class PlaidLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOnSuccess = this.handleOnSuccess.bind(this);
  }

  handleOnSuccess(public_token, metadata) {
    // send token to client server
    // make a TRANSACTIONS Request Here? --> Right after exchanging for access token
    // Make an update function
    axios
      .post("http://localhost:5000/auth/public_token", {
        public_token: public_token,
      })
      .then((response) =>
        axios.get("http://localhost:5000/transactions").then((res) => {
          this.setState({ transactions: res.data });
          console.log(this.state.transactions);
        })
      );
  }

  handleOnExit() {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
    console.log("User has exited plaid link prompt");
  }

  handleClick(res) {
    axios.get("http://localhost:5000/transactions").then((res) => {
      this.setState({ transactions: res.data });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <PlaidLink
        clientName="React Plaid Setup"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="d74564d1fca97dd00ec3f9f421eae9"
        onExit={this.handleOnExit}
        onSuccess={this.handleOnSuccess}
        className={classes.ListItemSize5}
      >
        + Add Payment Methods
      </PlaidLink>
    );
  }
}

export default withStyles(useStyles)(PlaidLogin);
