import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Badge, Chip, Fade, Grid, IconButton } from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";
import { connect } from "react-redux";
import { updateActive } from "../../../redux/actions/user";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "auto 7px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function OutlinedCard(props) {
  const history = useHistory();

  const { program, userId } = props;
  const classes = useStyles();
  const { title, isActive, programId } = program;
  const [closed, setClosed] = React.useState(isActive);

  const handleUpdate = () => {
    setClosed(!closed);
    props.updateActive(closed, userId, programId);
  };

  const renderButton = () => {
    return (
      <Button
        variant="contained"
        size="small"
        style={{ display: "flex", width: "100%" }}
        onClick={() =>
          history.push(
            "/users/" + props.userId + "/programs/created/" + program.programId
          )
        }
      >
        See details
      </Button>
    );
  };

  const renderUpdate = () => {
    return (
      <React.Fragment>
        <IconButton onClick={handleUpdate}>
          <Badge color={closed ? "primary" : "error"} variant="dot">
            <UpdateIcon />
          </Badge>
        </IconButton>{" "}
        {closed ? (
          <Typography>Close</Typography>
        ) : (
          <Typography>Open</Typography>
        )}
      </React.Fragment>
    );
  };

  return (
    <Fade in={true} timeout={300}>
      <Card className={classes.root} variant="elevation" elevation={5}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Posted {moment(program.createdAt.toDate()).fromNow()}
              </Typography>
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
            <Grid item>{renderUpdate()}</Grid>
          </Grid>
          <br />

          <Typography variant="body1" component="h2">
            {title}
          </Typography>
        </CardContent>

        <div>{renderButton()}</div>
      </Card>
    </Fade>
  );
}

export default connect(null, { updateActive })(OutlinedCard);
