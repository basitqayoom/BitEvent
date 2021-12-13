import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import { Grid, Slide, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function error() {
  return (
    <Grid
      container
      style={{
        display: "block",
        margin: "100px auto auto auto",
        textAlign: "center",
      }}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={200}
        >
          <img src="./error.png" alt="bg-ig" />
        </Slide>
      </Grid>
      <Grid
        item
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <React.Fragment>
          <ErrorIcon color="disabled" fontSize="large" />
        </React.Fragment>

        <Typography color="textSecondary">
          Oops! Something went wrong{" "}
        </Typography>
      </Grid>
      <Link to="/">Go back to Home</Link>
    </Grid>
  );
}

export default error;
