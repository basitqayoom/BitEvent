import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = (props) => {
  const { user, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          user.emailVerified ? (
            <Component {...props} />
          ) : (
            <Redirect to="/verify/email" />
          )
        ) : (
          <Redirect to="/login/email" />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(AuthenticatedRoute);
