import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Query } from "react-apollo";
import * as Queries from "../graphql/queries";

const AuthRoute = ({
  component: Component,
  path,
  exact,
  routeType,
  ...rest
}) => (
  <Query query={Queries.IS_LOGGED_IN}>
    {({ data }) => {
      if (routeType === "auth") {
        return (
          <Route
            path={path}
            exact={exact}
            render={props =>
              !data.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
          />
        );
      } else {
        return (
          <Route
            {...rest}
            render={props =>
              data.isLoggedIn ? (
                <Component {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        );
      }
    }}
  </Query>
);

export default AuthRoute;