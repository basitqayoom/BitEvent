import { Typography, makeStyles, List, ListItem } from "@material-ui/core";
import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  body: {
    marginRight: "50px",
    marginLeft: "15px",
    marginTop: "15px",
    textAlign: "justify",
  },
  root: {},
  terms: {
    fontFamily: "Quicksand",
  },
}));

function Terms() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography style={{ fontSize: "27px" }}>
        <FiberManualRecordIcon /> T&C
      </Typography>
      <Typography className={classes.body}>
        <List>
          <ListItem>
            <Typography className={classes.terms}>
              • By logging in, you agree to our Terms of Service.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.terms}>
              • You will not be able to delete or edit your event once it has
              been hosted on{" "}
              <span style={{ fontFamily: "sans-serif" }}>
                <strong style={{ color: "rgb(7, 47, 84)", fontWeight: "bold" }}>
                  bit
                </strong>
                Event
              </span>
              .
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.terms}>
              • You will not be allowed to unregister for any event once you
              have registered.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.terms}>
              • We only serve as hosts for the events and do not check them
              personally. As a result, just attend/pay for events organised by
              people you know and trust.
            </Typography>
          </ListItem>
        </List>
      </Typography>
    </div>
  );
}

export default Terms;
