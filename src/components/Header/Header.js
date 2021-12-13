import React from "react";
import Appbar from "../material-ui/Appbar";
import { Fade, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
  };
});

function Header(props) {
  const classes = useStyles();
  const user = props.auth;

  return (
    <Fade in={true} timeout={200}>
      <div className={classes.toolbar} style={{ marginBottom: "15px" }}>
        <Appbar user={user} />
      </div>
    </Fade>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
