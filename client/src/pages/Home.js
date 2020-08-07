import React, { Component, Fragment } from "react";
import gql from 'graphql-tag';
import { Query } from "react-apollo";


const FETCH_USERS_QUERY = gql`
  {
    getUsers {
      id
      name
    }
  }
`;

function Home() {

    return (
      <Query query={FETCH_USERS_QUERY}>
        {({ loading, err, data }) => {
          if (loading) return <h4>Loading ...</h4>;
          if (err) console.log("err", err);
          //console.log("data", data);

          return (
            <Fragment>
              {data.getUsers.map((user) => (
                <div key={user.id}>{user.name}</div>
              ))}
            </Fragment>
          );
        }}
      </Query>
    );
}

export default Home