import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "../../material-ui/Card/Header";
import { Fade, Grid } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  joinedAt: {
    fontSize: 14,
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "15px",
  },
  pos: {
    marginBottom: 12,
  },
});

function OutlinedCard(props) {
  const { program } = props;
  const classes = useStyles();
  const { title, joinedAt } = program;

  return (
    <Fade in={true} timeout={300}>
      <Card className={classes.root} variant="elevation" elevation={5}>
        <Header program={props.program} />
        <CardContent>
          <Typography variant="body1" component="h2">
            {title}
          </Typography>
          <br />
          <Grid container justify="space-between" alignItems="baseline">
            <Grid item>
              <Button
                variant="text"
                href={"mailto:" + props.program.host.email}
              >
                Contact
              </Button>
            </Grid>
            <Grid item>
              <Typography className={classes.joinedAt} color="textSecondary">
                Joined on {moment(joinedAt.toDate()).format("LLL")}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fade>
  );
}

export default OutlinedCard;
