import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function NoProgramFound() {
  return (
    <Grow in={true} timeout={300}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ marginLeft: "50px" }}
      >
        <Grid item xs={12}>
          <img
            width="100%"
            alt="No-program-found"
            src="https://image.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg"
          />
          <Typography variant="h5" style={{ textAlign: "center" }}>
            No Program found! <Link to="/programs/new"> Create one</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grow>
  );
}

export default NoProgramFound;
