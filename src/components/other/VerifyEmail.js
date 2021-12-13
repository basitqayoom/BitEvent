import { Button, Grid, Snackbar, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { auth } from "../../firebase";

function VerifyEmail(props) {
  const [show, setshow] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    auth.currentUser.sendEmailVerification();
    setshow(true);
  };

  const renderBody = () => {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item sm={12} md={12}>
            <div
              style={{
                textAlign: "center",
                marginTop: "50px",
                display: "block",
                justifyContent: "center",
              }}
            >
              <Typography variant="h2" component="div">
                Verify your email
              </Typography>
              <div style={{ marginTop: "15px" }}>
                <Typography variant="subtitle1">
                  Please confirm that you want to use this as your email address
                </Typography>
              </div>
              <div style={{ marginTop: "25px" }}>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={handleClick}
                >
                  Verify my email
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
        <div>
          <Snackbar
            open={show}
            autoHideDuration={3000}
            onClose={(event, reason) =>
              reason === "clickaway" ? null : setshow(false)
            }
          >
            <Alert
              variant="filled"
              severity="success"
              onClose={(event, reason) =>
                reason === "clickaway" ? null : setshow(false)
              }
            >
              Email verification link has been sent to {props.user.email}
            </Alert>
          </Snackbar>
        </div>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      {props.user ? renderBody() : history.push("/login/email")}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(VerifyEmail);
