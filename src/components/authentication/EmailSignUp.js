import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import PasswordField from "material-ui-password-field";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { emailSignUp } from "../../redux/actions/authentication";

const useStyles = makeStyles((theme) => ({
  input1: {
    marginBottom: "25px",
  },
  input2: {
    marginBottom: "25px",
  },
  component: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-between",
  },
  createAccountLink: {
    fontWeight: "500",
  },
  btn: {
    textTransform: "none",
  },
}));

const EmailSignUp = (props) => {
  const classes = useStyles();

  const [loader, setLoader] = useState(false);

  // states
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [authError, setAuthError] = useState(props.authError);

  const newUser = { email, firstName, lastName, password };

  const handleSubmit = () => {
    setError("");
    setAuthError("");

    if (password !== confirmPassword) {
      setError("Password does not match");
    } else {
      if (
        (email === "" || firstName === "" || lastName === "",
        password === "" || confirmPassword === "")
      ) {
        setError("All inputs required");
      } else if (authError) {
        setAuthError(props.authError);
      } else {
        setLoader(true);
        props.emailSignUp(newUser).then(() => setLoader(false));
      }
    }
  };

  useEffect(() => {
    setAuthError(props.authError);
  }, [props.authError]);

  const renderButton = () => {
    if (!loader) {
      return (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.btn}
          onClick={handleSubmit}
        >
          Sign up
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.btn}
        >
          <CircularProgress color="inherit" size={"1.5rem"} />
        </Button>
      );
    }
  };

  return (
    <React.Fragment>
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
          }}
        />
      </Grid>
      <Grid item className={classes.input1} style={{ display: "flex" }}>
        <TextField
          margin="dense"
          type="text"
          label="First Name"
          required
          value={firstName}
          onChange={(e) => {
            setError("");
            setFirstName(e.target.value);
          }}
        />{" "}
        <TextField
          margin="dense"
          type="text"
          label="Last Name"
          required
          value={lastName}
          onChange={(e) => {
            setError("");
            setLastName(e.target.value);
          }}
        />
      </Grid>
      <br />
      <Grid item className={classes.input2}>
        <PasswordField
          onChange={(e) => {
            setError("");
            setPassword(e.target.value);
          }}
          placeholder="Password*"
          fullWidth
          required
        />
      </Grid>
      <br />
      <Grid item className={classes.input2}>
        <PasswordField
          onChange={(e) => {
            setError("");
            setAuthError("");
            setConfirmPassword(e.target.value);
          }}
          placeholder="Confirm Password*"
          fullWidth
          required
        />
      </Grid>

      <Grid>
        <Typography color="error" variant="subtitle2">
          {error ? error : null}
        </Typography>
        <Typography color="error" variant="subtitle2">
          {authError ? authError : null}
        </Typography>
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

        {renderButton()}
      </Grid>

      <Grid item>
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
            to="/resetPassword"
          >
            Forgot Password?
          </Link>
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.errorMessage,
  };
};

export default connect(mapStateToProps, { emailSignUp })(EmailSignUp);
