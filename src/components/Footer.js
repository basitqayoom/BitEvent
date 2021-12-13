import { Breadcrumbs, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import data from "./../data.json";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#F2F2F2",
    paddingTop: "5px ",
    paddingBottom: "5px ",
    width: "100%",
    position: "relative",
    bottom: 0,
    marginTop: "15px",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  link: {
    textTransform: "none",
    textDecoration: "none",
    color: "#616161",
  },
}));

function Footer() {
  const classes = useStyles();
  const renderLinks = () => {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          to="/about"
          className={classes.link}
          color="inherit"
          href="/"
          onClick={null}
        >
          About
        </Link>
        <Link
          to="/policy"
          className={classes.link}
          color="inherit"
          onClick={null}
        >
          Policy
        </Link>
      </Breadcrumbs>
    );
  };

  const renderSocial = () => {
    return (
      <div>
        <Link
          className={classes.link}
          color="inherit"
          to={{
            pathname: data.contact.twitter,
          }}
          target="_blank"
          style={{ margin: "auto 20px" }}
        >
          <TwitterIcon />
        </Link>
        <Link
          className={classes.link}
          color="inherit"
          to={{
            pathname: data.contact.instagram,
          }}
          target="_blank"
        >
          <InstagramIcon />
        </Link>

        {/* <Link
          className={classes.link}
          color="inherit"
          to={{
            pathname: "https://www.instagram.com/biteventofficial/",
          }}
          target="_blank"
        >
          <FacebookIcon />
        </Link> */}
      </div>
    );
  };

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container justify="space-between">
          <Grid item>{renderLinks()}</Grid>
          <Grid item>{renderSocial()}</Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
