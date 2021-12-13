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
import { emailLogin } from "../../redux/actions/authentication";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  input1: {
    marginBottom: "25px",
  },
  input2: {
    marginBottom: "25px",
  },
  component: {
    display: "flex",
    marginTop: "30px",
    justifyContent: "space-between",
  },
  createAccountLink: {
    fontWeight: "500",
  },
  btn: {
    textTransform: "none",
  },
}));

const EmailLogin = (props) => {
  const classes = useStyles();

  const [loader, setLoader] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authError, setAuthError] = useState("");

  const credentials = { email, password };

  const handleSumbit = () => {
    setError("");
    setAuthError("");
    if (email === "" || password === "") {
      setError("All inputs required");
    } else if (authError) {
      setAuthError(props.authError);
    } else {
      setLoader(true);
      props.emailLogin(credentials).then(() => setLoader(false));
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
          onClick={handleSumbit}
        >
          Login
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
    <form>
      <Grid item className={classes.input1}>
        <TextField
          margin="dense"
          type="email"
          label="Email"
          fullWidth
          autoFocus={true}
          value={email}
          onChange={(e) => {
            setError("");
            setEmail(e.target.value);
          }}
          required
        />
      </Grid>
      <Grid item className={classes.input2}>
        <PasswordField
          placeholder="Password*"
          fullWidth
          value={password}
          onChange={(e) => {
            setError("");
            setPassword(e.target.value);
          }}
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
            to="/signUp/email"
          >
            Create an account
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
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.errorMessage,
  };
};

export default connect(mapStateToProps, { emailLogin })(EmailLogin);
