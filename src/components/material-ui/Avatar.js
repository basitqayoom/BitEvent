import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";

import data from "../../data.json";

const StyledBadge = withStyles((theme) =>
  createStyles({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  })
)(Badge);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(0),
      },
    },
  })
);

const BadgeAvatars = (props) => {
  const { photoURL, displayName } = props;
  const classes = useStyles();
  const colors = data.CSS_COLOR_NAMES;
  const randomColor = colors[Math.floor(Math.random() * colors.length + 0)];

  const renderAvatar = () => {
    if (photoURL) {
      return (
        <div className={classes.root}>
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src={photoURL} />
          </StyledBadge>
        </div>
      );
    } else {
      return (
        <Avatar style={{ backgroundColor: randomColor }}>{displayName}</Avatar>
      );
    }
  };

  return <React.Fragment>{renderAvatar()}</React.Fragment>;
};

export default BadgeAvatars;
