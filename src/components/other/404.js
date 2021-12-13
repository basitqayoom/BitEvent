import { Typography, Grid, Grow } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Grid container justify="center" style={{ paddingTop: "50px" }}>
      <Grid item>
        <Grow in={true} timeout={250} direction="right">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img alt="404" src="./404.png" />
          </div>
        </Grow>
        <Typography
          variant="h6"
          color="textPrimary"
          component="span"
          style={{ marginRight: "10px" }}
        >
          404
        </Typography>{" "}
        <Typography
          component="span"
          style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}
        >
          The page could not be found.{" "}
          <Link style={{ cursor: "pointer", color: "blue" }} to="/">
            Redirect to home
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageNotFound;
