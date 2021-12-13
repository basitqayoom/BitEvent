import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  body: {
    marginRight: "50px",
    marginLeft: "15px",
    marginTop: "15px",
    textAlign: "justify",
  },
}));

function Privacy() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography style={{ fontSize: "27px" }}>
          <FiberManualRecordIcon /> How we store data?
        </Typography>
        <Typography
          className={classes.body}
          style={{ fontFamily: "Quicksand" }}
        >
          For data storage, we use Google Firebase. Visit{" "}
          <Link
            to={{
              pathname: "https://firebase.google.com/support/privacy",
            }}
            target="_blank"
          >
            firebase.google.com
          </Link>{" "}
          for more details.
        </Typography>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Typography style={{ fontSize: "30px" }}>
          <FiberManualRecordIcon /> How we verify users?
        </Typography>
        <Typography
          className={classes.body}
          style={{ fontFamily: "Quicksand" }}
        >
          For user authentication, we use Google Firebase. Visit{" "}
          <Link
            to={{
              pathname: "https://firebase.google.com/support/privacy",
            }}
            target="_blank"
          >
            firebase.google.com
          </Link>{" "}
          for more information.
        </Typography>
      </div>
    </div>
  );
}

export default Privacy;
