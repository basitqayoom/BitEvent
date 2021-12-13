import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function About(props) {
  const history = useHistory();
  const { user } = props;
  const path = user ? "/programs/new" : "/login/email";

  return (
    <Container style={{ marginTop: "120px" }}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <img alt="bg" width="100%" src="/bg.png" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            style={{
              textAlign: "justify",
              fontSize: "25px",
              color: "#272C34",
              fontFamily: "Quicksand",
            }}
          >
            <span style={{ fontFamily: "sans-serif" }}>
              <strong style={{ color: "rgb(7, 47, 84)", fontWeight: "bold" }}>
                bit
              </strong>
              Event
            </span>{" "}
            is how you change event management and event hosting not only in the
            times of covid but for the future that lies ahead of us. Anyone can
            host any type of event from sports to science. We host it all.
            Registers, data, number of people? We store it all for you. Secure.
            We don't get to see it or change it. All the control lies in your
            hands.
          </Typography>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => history.push(path)}
              variant="contained"
              disableElevation
              size="large"
              color="primary"
              style={{ paddingLeft: " 50px", paddingRight: " 50px" }}
            >
              Get Started
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(About);
