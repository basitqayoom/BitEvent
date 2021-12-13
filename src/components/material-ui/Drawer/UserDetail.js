import { Grid, Typography } from "@material-ui/core";
import React from "react";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { connect } from "react-redux";
import Avatar from "../Avatar";
function UserDetail({ user }) {
  const renderUser = () => {
    if (!user) {
      return (
        <Grid
          container
          style={{ margin: "10px auto 10px 16px" }}
          alignItems="center"
        >
          <Grid item>
            <PermIdentityOutlinedIcon style={{ fontWeight: "800" }} />
          </Grid>{" "}
          <Grid item>
            <Typography style={{ fontWeight: "800" }}>
              Hello, Sign in
            </Typography>
          </Grid>
        </Grid>
      );
    }

    return (
      <Grid
        container
        style={{ margin: "10px auto 10px 16px" }}
        alignItems="center"
      >
        <Grid item style={{ marginRight: "15px" }}>
          <Avatar
            photoURL={user.photoURL}
            displayName={user.displayName ? user.displayName[0] : null}
          />
        </Grid>{" "}
        <Grid item>
          <Typography style={{ fontWeight: "500", fontSize: "17px" }}>
            Hello, {user.displayName ? user.displayName : "User"}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return <React.Fragment>{renderUser()}</React.Fragment>;
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(UserDetail);
