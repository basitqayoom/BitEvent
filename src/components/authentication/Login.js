import React from "react";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import Google from "./Google";
import EmailLogin from "./EmailLogin";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "460px",
      border: "1px solid",
      borderColor: "#DADCE0",
      borderRadius: "10px",
    },
    marginTop: "20px",
    padding: "48px",
  },
  grid: {
    [theme.breakpoints.up("sm")]: {
      height: "590px",
    },
  },
  item1: {
    textAlign: "center",
  },
  item: {
    textAlign: "center",
    margin: "15px",
  },
  item2: {
    textAlign: "center",
    margin: "10px 10px 10px 10px",
  },
  text1: {
    textAlign: "start",
  },
  loginTitle: {
    marginBottom: "10px",
  },
  subTitle: {
    marginBottom: "40px",
  },
  dividerText: {
    fontWeight: "400",
    fontSize: "15px",
    margin: "35px auto",
  },
}));
const Login = (props) => {
  const classes = useStyles();

  const renderForm = (path) => {
    switch (path) {
      case "/login/email":
        return <EmailLogin />;
      default:
        return null;
    }
  };

  return (
    <Grid
      container
      justify="center"
      className={classes.grid}
      style={{ marginBottom: "60px" }}
    >
      <Box className={classes.box}>
        <Grid item className={classes.item1}>
          <Typography variant="h5" className={classes.loginTitle}>
            Login
          </Typography>
          <Typography variant="body1" className={classes.subTitle}>
            to continue to Program
          </Typography>
        </Grid>

        {renderForm(window.location.pathname)}

        <Grid item className={classes.item}>
          <Typography variant="body2" className={classes.dividerText}>
            or
          </Typography>
        </Grid>
        <Grid item style={{ display: "flex", justifyContent: "center" }}>
          <Google label="Continue with Google" />
        </Grid>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Login);
