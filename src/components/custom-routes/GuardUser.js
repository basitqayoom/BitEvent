import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuardUser = (props) => {
  const { user, component: Component, ...rest } = props;
  const checkUser = () => {
    if (user) return false;
    return true;
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        return checkUser() ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(GuardUser);
