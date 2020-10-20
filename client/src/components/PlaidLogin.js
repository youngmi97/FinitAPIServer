import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { PlaidLink } from "react-plaid-link";
import { withStyles } from "@material-ui/styles";
//import Button from "@material-ui/core/Button";
import { print } from "graphql";
import axios from "axios";
import "../App.css";
import gql from "graphql-tag";
import { AuthContext } from "../context/auth";
import { withRouter } from "react-router-dom";

const UPDATE_ACCESS_TOKEN = gql`
  mutation UpdateAccessToken($userId: ID!, $access_token: String!) {
    updateAccessToken(userId: $userId, access_token: $access_token) {
      id
      name
      access_token
    }
  }
`;

const ADD_ACCOUNTS = gql`
  mutation addAccount(
    $accountId: String!
    $plaidId: String!
    $userId: String!
    $name: String!
    $officialName: String!
    $balance: String!
    $type: String!
  ) {
    addAccount(
      accountId: $accountId
      plaidId: $plaidId
      userId: $userId
      name: $name
      officialName: $officialName
      balance: $balance
      type: $type
    ) {
      id
    }
  }
`;

const ADD_TRANSACTION = gql`
  mutation addTransaction(
    $accountId: String!
    $amount: String!
    $category: [String!]!
    $date: String!
    $isoCurrencyCode: String!
    $name: String!
    $paymentChannel: String!
    $transactionType: String!
  ) {
    addTransaction(
      accountId: $accountId
      amount: $amount
      category: $category
      date: $date
      isoCurrencyCode: $isoCurrencyCode
      name: $name
      paymentChannel: $paymentChannel
      transactionType: $transactionType
    ) {
      id
    }
  }
`;

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
  //declaring contextType should behave the same as useContext API for functional components
  static contextType = AuthContext;
  constructor(props, context) {
    super(props, context);

    this.state = {
      transactions: [],
      accounts: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOnSuccess = this.handleOnSuccess.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
  }

  handleOnSuccess(public_token, metadata) {
    axios
      .post("http://localhost:5000/auth/public_token", {
        public_token: public_token,
      })
      .then((response) =>
        axios.get("http://localhost:5000/transactions").then((res) => {
          this.setState({ transactions: res.data.transactions.transactions });
          this.setState({ accounts: res.data.transactions.accounts });

          axios
            .post("http://localhost:5000/graphql", {
              query: print(UPDATE_ACCESS_TOKEN),
              variables: {
                userId: this.props.context.user.id,
                access_token: response.data.access_token,
              },
            })
            .then(() => {
              let accountPromises = [];
              let transactionPromises = [];

              console.log("this state accounts", this.state.accounts);
              this.state.accounts.forEach((account) => {
                accountPromises.push(
                  axios.post("http://localhost:5000/graphql", {
                    query: print(ADD_ACCOUNTS),
                    variables: {
                      accountId: account.account_id,
                      plaidId: "plaidId" || "",
                      userId: this.props.context.user.id,
                      name: account.name || "",
                      officialName: account.officialName || "",
                      balance: account.balances.current.toString(),
                      type: account.type || "",
                    },
                  })
                );
              });
              Promise.all(accountPromises).catch((err) => {
                console.log("accounts bulk add err", err);
              });
              console.log("Added accounts");

              //Mutation call for each transaction element
              console.log("transactions", this.state.transactions);
              this.state.transactions.forEach((transaction) => {
                transactionPromises.push(
                  axios.post("http://localhost:5000/graphql", {
                    query: print(ADD_TRANSACTION),
                    variables: {
                      accountId: transaction.account_id,
                      amount: transaction.amount.toString() || "",
                      category: transaction.category,
                      date: transaction.date || "",
                      isoCurrencyCode: transaction.iso_currency_code || "",
                      name: transaction.name || "",
                      paymentChannel: transaction.payment_channel || "",
                      transactionType: transaction.transaction_type || "",
                    },
                  })
                );
              });
              console.log("transactionPromises", transactionPromises);
              Promise.all(transactionPromises).catch((err) => {
                console.log("transaction bulk add err", err);
              });
              console.log("Added transactions");
            })
            .catch((err) => console.log(err));

          this.props.history.push("/subscriptions");
        })
      );
  }

  handleOnExit() {
    // handle the case when your user exits Link
    console.log("User has exited plaid link prompt");
  }

  handleClick(res) {
    axios.get("http://localhost:5000/transactions").then((res) => {
      this.setState({ transactions: res.data });
    });
  }

  // 1. Have to call Mutation from PlaidLink Component after the access_token state has been set
  // 2. Have to call the updateAccessToken function in one of the events --> not working well

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

export default withRouter(withStyles(useStyles)(PlaidLogin));
