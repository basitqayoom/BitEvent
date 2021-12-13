import GoogleButton from "react-google-button";
import React from "react";
import { connect } from "react-redux";
import { googleLogin } from "../../redux/actions/authentication";

const Google = (props) => {
  return (
    <GoogleButton
      label={props.label}
      type="dark"
      onClick={async () => {
        await props.googleLogin();
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { googleLogin })(Google);
