import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Privacy from "./Privacy";
import Terms from "./Terms";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#282c34",
  },
  heading: {
    fontSize: "60px",
    fontWeight: 700,
  },
  privacy: {
    marginTop: "40px",
  },
}));

function Policy() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.heading}>
        Introducing our Policy
      </Typography>
      <div id="privacy" className={classes.privacy}>
        <Privacy />
      </div>
      <div style={{ margin: "25px 100px 25px 100px" }}></div>
      <div id="terms" className={classes.terms}>
        <Terms />
      </div>
      <br />
    </Container>
  );
}

export default Policy;
