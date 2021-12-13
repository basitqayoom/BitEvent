import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Drawer from "./Drawer/Drawer";
import Avatar from "./Avatar";
import { Button, Grid } from "@material-ui/core";
import history from "../../redux/history";
import Tabs from "./Tabs";
import Logo from "../Logo";
import { logout } from "../../redux/actions/authentication";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  logo: {
    fontSize: "28px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "38px",
    },
  },
}));

function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const menuId = "primary-search-account-menu";

  const renderAvatar = () => {
    if (!props.user.user) {
      return (
        <React.Fragment>
          <Typography component="span">
            <Button
              color="inherit"
              style={{
                textTransform: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => history.push("/login/email")}
            >
              Login
            </Button>
          </Typography>{" "}
        </React.Fragment>
      );
    }
    return (
      <Grid>
        <Typography component="span">
          <Button
            color="inherit"
            style={{
              textTransform: "none",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              props.logout();
            }}
          >
            Logout
          </Button>
        </Typography>{" "}
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar
            photoURL={props.user.user.photoURL}
            displayName={
              props.user.user.displayName
                ? props.user.user.displayName[0]
                : null
            }
          />
        </IconButton>
      </Grid>
    );
  };

  return (
    <div style={{ borderBottom: "1px solid #e5e5e5" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Drawer user={props.user} />
          <Logo />

          <div className={classes.sectionDesktop}>{renderAvatar()}</div>
        </Toolbar>
      </AppBar>
      <Tabs />
    </div>
  );
}

export default connect(null, { logout })(PrimarySearchAppBar);
