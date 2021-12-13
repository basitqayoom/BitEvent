import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import Snackbar from "../material-ui/Snackbar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  input1: {
    marginBottom: "25px",
  },
  btn: {
    textTransform: "none",
  },
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
    marginTop: "60px",
    padding: "48px",
  },
  grid: {
    [theme.breakpoints.up("sm")]: {
      height: "auto",
    },
  },
  item1: {
    textAlign: "center",
  },
  loginTitle: {
    marginBottom: "10px",
  },
  component: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-between",
  },
  createAccountLink: {
    fontWeight: "500",
  },
}));

const PasswordReset = (props) => {
  const classes = useStyles();

  // states
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const handleSubmit = () => {
    if (email !== "") {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          setSnackbar({
            ...snackbar,
            open: true,
            message: "Password reset link has been sent to " + email,
            severity: "success",
          });
          setEmail("");
        })
        .catch((e) => setError(e.message));
    } else if (email === "") {
      setError("Please fill the details");
    }
  };

  return (
    <Grid container justify="center" className={classes.grid}>
      <Box className={classes.box}>
        <Grid item className={classes.item1}>
          <Typography variant="h5" className={classes.loginTitle}>
            Reset Password
          </Typography>
          <Typography variant="body1" className={classes.subTitle}>
            Enter your email
          </Typography>
        </Grid>

        <Grid item className={classes.input1}>
          <TextField
            margin="dense"
            type="email"
            label="Email"
            fullWidth
            autoFocus={true}
            required
            value={email}
            onChange={(e) => {
              setError("");
              setEmail(e.target.value);
              setSnackbar({ open: false, message: "", severity: "" });
            }}
          />
        </Grid>

        <Grid>
          {error ? (
            <Typography color="error" variant="subtitle2">
              {error}
            </Typography>
          ) : null}
        </Grid>

        <Grid item className={classes.component}>
          <Typography
            variant="body2"
            color="primary"
            className={classes.createAccountLink}
          >
            <Link
              style={{
                cursor: "pointer",
                color: "#1A73E8",
                textDecoration: "none",
              }}
              to="/login/email"
            >
              Already have an account?
            </Link>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            disableElevation
            className={classes.btn}
            onClick={handleSubmit}
          >
            Reset
          </Button>
        </Grid>
      </Box>
      <Snackbar snackbar={snackbar} />
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(PasswordReset);
