import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "28px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "38px",
    },
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <Link to="/" style={{ textTransform: "none", textDecoration: "none" }}>
      <Typography
        className={classes.logo}
        style={{
          fontFamily: "sans-serif",
          color: "#072f54",
        }}
      >
        <span style={{ fontWeight: "800" }}>bit</span>

        <span style={{}}>E</span>
        <span style={{}}>vent</span>
      </Typography>
    </Link>
  );
}

export default Logo;
