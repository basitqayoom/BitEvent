import React from "react";
import { CardHeader, Chip, Grid, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Avatar from "../Avatar";
import moment from "moment";

const Header = ({ program }) => {
  const { host } = program;

  return (
    <React.Fragment>
      <CardHeader
        avatar={
          <Avatar photoURL={host.photoURL} displayName={host.displayName[0]} />
        }
        action={null}
        title={
          <Grid container alignItems="flex-start">
            <Grid item>
              <Typography variant="subtitle2">{host.displayName}</Typography>
            </Grid>
            <Grid item>
              <ArrowRightIcon />
            </Grid>
            <Grid item>
              <Chip
                label={
                  program.category[0].toUpperCase() +
                  program.category.substring(1)
                }
                component="a"
                clickable
                color="primary"
                size="small"
              />
            </Grid>
          </Grid>
        }
        //
        subheader={"Posted " + moment(program.createdAt.toDate()).fromNow()}
      />
    </React.Fragment>
  );
};

export default Header;
