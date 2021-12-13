import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import UserDetail from "./UserDetail";
import Trending from "./Trending";
import Explore from "./Explore";
import UserPrograms from "./UserPrograms";
import BottomSection from "./BottomSection";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <UserDetail user={props.user.user} />
      <Divider />
      <Divider />
      <UserPrograms />

      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <Explore />

      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Trending />
      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <BottomSection />
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon style={{ color: "#545454" }} />
          </IconButton>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SwipeableTemporaryDrawer;
